module.exports = {
    async beforeCreate(event) {
      const { data } = event.params

      if (data.displayName) {
        // sanitize
        data.displayName = data.displayName
          .toLowerCase()
          .trim()
          .replace(/\s+/g, '_')
          .replace(/[^a-z0-9_]/g, '');
      }
    },

    async beforeUpdate(event) {
      const { data } = event.params;
      
      if (data.displayName) {
        // sanitize
        data.displayName = data.displayName
          .toLowerCase()
          .trim()
          .replace(/\s+/g, '_')
          .replace(/[^a-z0-9_]/g, '');
      }
    },

    async afterUpdate(event) {
      // const profileId = event.params.data.id
      const profileId = event.result.id
      const currentImageUrl = event.params.data.profilePictureUrl

      // Check if profilePicture is available
      if (!event.result.profilePicture){
        return; 
      }

      const uploadedImageUrl = event.result.profilePicture.url

      // Confirm that a new image has been uploaded, then update the profilePictureUrl field
      if (uploadedImageUrl && currentImageUrl !== uploadedImageUrl){
          await strapi.entityService.update('api::profile.profile', profileId, {
            data: {
              profilePictureUrl: uploadedImageUrl,
            },
            populate: "profilePicture"
          });
        }
      },    
    }