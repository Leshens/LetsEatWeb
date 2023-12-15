import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EditRestaurant from '../components/EditRestaurant'; // Make sure to import your EditRestaurant component
import '../Table.css';

export default function AdminMenu() {
  const [restaurants, setRestaurants] = useState({});
  const [editState, setEditState] = useState(-1);
  const [editedData, setEditedData] = useState({});
  const token = localStorage.getItem('token');

  useEffect(() => {
    loadRestaurant();
  }, []);

  const onSubmit = async (restaurantId) => {
    const authToken = token;

    console.log('onSubmit - Restaurant ID:', restaurantId);
    console.log('onSubmit - Edited Data:', editedData);

    try {
      await axios.put(
        `http://localhost:8080/updateRestaurant/${restaurantId}`,
        editedData,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      setEditState(-1);
      setEditedData({}); // Clear edited data after submission
      loadRestaurant();
    } catch (error) {
      console.error('Error updating restaurant:', error);
    }
  };

  const loadRestaurant = async () => {
    try {
      const result = await axios.get('http://localhost:8080/restaurants');
      const restaurantsObject = {};
      result.data.forEach((restaurant) => {
        restaurantsObject[restaurant.restaurantId] = restaurant;
      });
      setRestaurants(restaurantsObject);
    } catch (error) {
      console.error('Error loading restaurants:', error);
    }
  };

  return (
    <div className="body">
      <div className="tableWrap flex items-center justify-center h-screen">
        <div>
          <table className="border-primary border-b-2 border-collapse text-2xl text-center shadow-md">
            <thead className="text-secondary border-primary border-b-2">
              <th scope="col" className="px-6 py-4 bg-inBetween">
                Nazwa
              </th>
              <th scope="col" className="px-6 py-4 bg-inBetween">
                Rodzaj
              </th>
              <th scope="col" className="px-6 py-4 bg-inBetween">
                Adres
              </th>
              <th scope="col" className="px-6 py-4 bg-inBetween">
                Action
              </th>
            </thead>
            <tbody>
              {Object.keys(restaurants).map((restaurantId) => {
                const restaurant = restaurants[restaurantId];
                return (
                  <React.Fragment key={restaurantId}>
                    {editState === restaurantId ? (
                      <EditRestaurant
                        current={restaurant}
                        index={restaurantId}
                        onEditSubmit={() => onSubmit(restaurantId)}
                        onInputChange={(field, value) =>
                          setEditedData({
                            ...editedData,
                            [field]: value,
                          })
                        }
                      />
                    ) : (
                      <tr className="">
                        <td className="px-6 py-4 bg-lightSecondary">
                          {restaurant.restaurantName}
                        </td>
                        <td className="px-6 py-4 bg-lightSecondary">
                          {restaurant.restaurantCategory}
                        </td>
                        <td className="px-6 py-4 bg-lightSecondary">
                          {restaurant.location}
                        </td>
                        <td className="px-6 py-4 bg-lightSecondary">
                          <button
                            type="button"
                            className="edit text-white hover:text-primary bg-primary hover:bg-gray-800 rounded-full px-4 py-2"
                            onClick={() => setEditState(restaurantId)}
                          >
                            Edit
                          </button>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <a href="StolikiTable">Panel zarządzania stolikami</a>
      <a href="MenuTable">Panel zarządzania menu</a>
    </div>
  );
}
