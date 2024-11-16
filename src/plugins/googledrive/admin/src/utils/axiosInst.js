import axios from 'axios';
console.log(process.env.STRAPI_ADMIN_BACKEND_URL);
console.log(process.env.ADMIN_JWT_SECRET);
const axiosInstance = axios.create({
  baseURL: 'http://localhost:1337/', // Adjust base URL if needed

  //baseURL: process.env.STRAPI_ADMIN_BACKEND_URL || 'admin/', // Adjust base URL if needed
  // baseURL: process.env.baseURL, // Adjust base URL if needed

  headers: {
    Authorization: `Bearer ${process.env.ADMIN_JWT_SECRET}`,
    //`Bearer ${strapi.auth.getToken()}`, // Add the admin token
    'Content-Type': 'application/json',
  },
});
console.log(axiosInstance);

export default axiosInstance;
