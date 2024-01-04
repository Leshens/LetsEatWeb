import axios from 'axios';

const AdminMenuModel = {
  getAllRestaurants: async () => {
    try {
      const result = await axios.get('http://localhost:8080/restaurants');
      return result.data;
    } catch (error) {
      console.error('Error fetching restaurants:', error);
      throw error;
    }
  },

  updateRestaurant: async (index, editedData, authToken) => {
    try {
      await axios.put(
        `http://localhost:8080/updateRestaurant/${index}`,
        editedData,
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`,
          },
        }
      );
    } catch (error) {
      console.error('Error updating restaurant:', error);
      throw error;
    }
  },
};

export default AdminMenuModel;
