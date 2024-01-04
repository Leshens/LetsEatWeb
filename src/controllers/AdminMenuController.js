import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AdminMenuView from '../views/AdminMenuView';
import AdminMenuModel from '../models/AdminMenuModel';

const AdminMenuController = () => {
  const [restaurant, setRestaurant] = useState([]);
  const [editState, setEditState] = useState(-1);
  const { restaurantId } = useParams();

  useEffect(() => {
    loadRestaurant();
  }, []);

  const onSubmit = async (index, editedData) => {
    const authToken = '4435615320'; // Replace with your actual authentication token

    try {
      await AdminMenuModel.updateRestaurant(index, editedData, authToken);
      setEditState(-1);
      loadRestaurant();
    } catch (error) {
      console.error('Error updating restaurant:', error);
    }
  };

  const loadRestaurant = async () => {
    try {
      const restaurants = await AdminMenuModel.getAllRestaurants();
      setRestaurant(restaurants);
    } catch (error) {
      console.error('Error loading restaurants:', error);
    }
  };

  return <AdminMenuView restaurant={restaurant} editState={editState} onSubmit={onSubmit} setEditState={setEditState} />;
};

export default AdminMenuController;
