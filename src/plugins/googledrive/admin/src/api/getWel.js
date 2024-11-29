import { prefixPluginTranslations } from '@strapi/helper-plugin';
import axiosInstance from '../utils/axiosInst';
export const getWel = async () => {
  try {
    console.log('getWel');
    const myMessage = await axiosInstance
      .get('/googledrive/', {
        //headers: {
        //  Authorization: `Bearer ${token}`,
        //},
      })
      .then((myData) => myData)
      .catch((err) => err);
    console.log(myMessage);
    console.log(myMessage.data);
    return myMessage.data;
  } catch (err) {
    console.error('err in getWel');
    console.error('Error fetching data:', err);
    throw err;
  }
};

//export default getWel;
