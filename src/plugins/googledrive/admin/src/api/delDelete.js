import { prefixPluginTranslations } from '@strapi/helper-plugin';
import axiosInstance from '../utils/axiosInst';

export const delDelete = async (infileId) => {
  try {
    console.log('delDelete');
    console.log(`infileId is ${infileId}`);

    //const delMessage = await axiosInstance.delete('/googledrive/', {
    //  params: fileDetails,
    //});
    const delMessage = await axiosInstance.request(
      '/googledrive/delete?fileId=' + infileId,
      {
        headers: { Authorization: `Bearer ${process.env.ADMIN_JWT_SECRET}` },
      },
      {
        method: 'delete',
        // params: fileDetails,
      }
    );
    console.log('delMessage.data');
    console.log(delMessage.status);
    return delMessage.status;
  } catch (err) {
    console.error(err);
    console.error('Error Deleting data:', err);
    throw err;
  }
};
export const postUpdate = async (inUploadData) => {
  try {
    console.log('postUpdate');
    console.log(`inUploadData is ${inUploadData}`);
    /*const postMessage = await axiosInstance.request(
      '/googledrive/upload',
      inUploadData,
      {
        method: 'POST',
        // params: fileDetails,
      }
    );*/
    const postMessage = await axiosInstance.post(
      '/googledrive/upload',
      inUploadData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${process.env.ADMIN_JWT_SECRET}`,
        },
      }
    );

    console.log('postMessage.data');
    console.log(postMessage.data);
    return postMessage.data;
  } catch (err) {
    console.error(err);
    console.error('Error Uploading data:', err);
    throw err;
  }
};
