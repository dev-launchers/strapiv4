//import request from '@strapi/helper-plugin';
import { prefixPluginTranslations } from '@strapi/helper-plugin';
//import axiosInstance from '@strapi/helper-plugin';
import axiosInstance from '../utils/axiosInst';
const getWel = async () => {
  console.log(axiosInstance);

  try {
    console.log('getWel');
    //const data = await request.get('http://localhost:1337/googledrive');
    //const data = await strapi.fetch('/googledrive/', {
    const myMessage = await axiosInstance.get('/googledrive/');
    console.log(myMessage);
    console.log(myMessage.data);
    return myMessage.data;
  } catch (err) {
    console.error(err);
    console.error('Error fetching data:', err);
    throw err;
  }
};
export default getWel;
