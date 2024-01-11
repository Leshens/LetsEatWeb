import { useState } from 'react';

export const useRestaurantFormModel = () => {
  const [formData, setFormData] = useState({
    restaurantName: '',
    selectedTypes: [],
    hourStart: '',
    hourEnd: '',
    address: '',
    telephone: '',
    tables: {
      '2p': 0,
      '4p': 0,
      '6p': 0,
      '8p': 0,
    },
  });

  const updateFormData = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  return {
    formData,
    updateFormData,
  };
};
