import axiosInstance from '../utils/axiosInst';
export const getWel = async () => {
  try {
    const myMessage = await axiosInstance
      .get('/googledrive/', {
        //headers: {
        //  Authorization: `Bearer ${token}`,
        //},
      })
      .then((myData) => myData)
      .catch((err) => err);
    return myMessage.data;
  } catch (err) {
    return err;
  }
};
