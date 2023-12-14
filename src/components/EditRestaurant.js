import React, { useState, useEffect } from 'react';

export default function EditRestaurant({ current, index, onSubmit }) {
  const [editedData, setEditedData] = useState({ ...current });

  useEffect(() => {
    setEditedData({ ...current });
  }, [current]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    setEditedData((prevData) => {
      // Use the callback function to ensure the state is updated
      const updatedData = { ...prevData };
      onSubmit(index, updatedData);
      console.log(updatedData);
      return updatedData;
    });
  };
  

  return (
    <tr className="bg-green-100">
      <td>
        <input
          type="text"
          className="w-40 py-4 bg-green-100"
          onChange={handleInputChange}
          value={editedData.restaurantName}
          name="restaurantName"
          placeholder="Wpisz nazwę"
        />
      </td>
      <td>
        <input
          type="text"
          className="w-40 py-4 bg-green-100"
          onChange={handleInputChange}
          value={editedData.restaurantCategory}
          name="restaurantCategory"
          placeholder="Wpisz rodzaj restauracji"
        />
      </td>
      <input
        type="text"
        className="w-40 py-4 bg-green-100"
        onChange={handleInputChange}
        value={editedData.location}
        name="location"
        placeholder="Wpisz adres restauracji"
      />
      <td>
        <button
          type="button"
          className="edit text-primary hover:text-white bg-gray-800 hover:bg-primary rounded-full px-4 py-2"
          onClick={handleUpdate}
        >
          Update
        </button>
      </td>
    </tr>
  );
}
