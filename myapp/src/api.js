import axiosInstance from "./utils/axiosConfig.js";

export const fetchHouseEstimations = async () => {
  try {
    const response = await axiosInstance.get('/house_estimation');
    console.log(response)
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la requête:', error);
    return [];
  }
};
