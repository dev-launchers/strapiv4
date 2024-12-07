import axiosInstance from '../utils/axiosInst';

export const delDelete = async (infileId) => {
  try {
    const delMessage = await axiosInstance.request(
      '/googledrive/delete?fileId=' + infileId,
      {
        headers: { Authorization: `Bearer ${process.env.ADMIN_JWT_SECRET}` },
      },
      {
        method: 'delete',
      }
    );
    return delMessage.status;
  } catch (err) {
    return err;
  }
};
export const postUpdate = async (inUploadData) => {
  try {
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
    return postMessage.data;
  } catch (err) {
    return err;
  }
};
