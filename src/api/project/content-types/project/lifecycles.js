const { sanitize } = require('@strapi/utils');

module.exports = {
    async afterFindOne(event) {
        let entity = event.result;
        console.log(event);
        //console.log("leaders");
        //console.log(entity.team);
        //console.log(entity.team.members);
        // if (entity) {
        //     if (entity.team) {
        //         entity.team.leaders = entity.team.leaders.map((leader) => ({
                        // get user by id
                        // findone to get username 
        //             id: leader.leader.id,
        //             username: leader.leader.username,
        //             profile: leader.leader.profile,
        //             email: leader.leader.email,
        //             role: leader.role,
        //         }));
        //         entity.team.members = entity.team.members.map((member) => ({
        //             id: member.member.id,
        //             username: member.member.username,
        //             profile: member.member.profile,
        //             role: member.role,
        //         }));
        //         const sanitizedEntity = await sanitize.contentAPI.output(entity);
        //         console.log(sanitizedEntity);
        //         return { data: sanitizedEntity };
        //     }
        //  }      
        const entries = await strapi.entityService.findMany('api::project.project', {
            populate: ['team'],
        });
        return 
    },
  
    async afterFindMany(event) {
        let entity = event.result;
        if (entity) {
            if (entity.team) {
                entity.team.leaders = entity.team.leaders.map((leader) => ({
                    id: leader.leader.id,
                    username: leader.leader.username,
                    profile: leader.leader.profile,
                    email: leader.leader.email,
                    role: leader.role,
                }));
                entity.team.members = entity.team.members.map((member) => ({
                    id: member.member.id,
                    username: member.member.username,
                    profile: member.member.profile,
                    role: member.role,
                }));
                const sanitizedEntity = await sanitize.contentAPI.output(entity);
                return { data: sanitizedEntity };
            }
         }  
    },
  };


  