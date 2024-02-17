export const fetchHouseEstimations = async () => {
  try {
    const response = await fetch('http://localhost:5050/house_estimation', {
      method: 'GET', 
    });
    if (!response.ok) {
      throw new Error('Erreur lors de la requête:', response.statusText);
    }
    const data = await response.json();
    console.log(data); 
    return data;
  } catch (error) {
    console.error('Erreur lors de la requête:', error.message);
    return [];
  }
};
