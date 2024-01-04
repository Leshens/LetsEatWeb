import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRestaurantFormModel } from '../models/RestaurantFormModel';
import RestaurantFormView from '../views/RestaurantFormView';

const RestaurantFormController = () => {
  const navigate = useNavigate();
  const { formData, updateFormData } = useRestaurantFormModel();

  const handleNextClick = () => {
    console.log(formData);
    // Dodaj logikę obsługi przycisku "Dalej" (np. walidacja danych) przed przejściem do kolejnego kroku
    navigate('/SampleMenu');
  };

  return (
    <RestaurantFormView formData={formData} updateFormData={updateFormData} handleNextClick={handleNextClick} />
  );
};

export default RestaurantFormController;
