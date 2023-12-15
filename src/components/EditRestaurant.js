import React from 'react';

const EditRestaurant = ({ current, index, onEditSubmit, onInputChange }) => {
  const handleChange = (event, field) => {
    onInputChange(field, event.target.value);
  };

  return (
    <tr className="">
      <td className="px-6 py-4 bg-lightSecondary">
        <input
          type="text"
          value={current.restaurantName}
          onChange={(e) => handleChange(e, 'restaurantName')}
        />
      </td>
      <td className="px-6 py-4 bg-lightSecondary">
        <input
          type="text"
          value={current.restaurantCategory}
          onChange={(e) => handleChange(e, 'restaurantCategory')}
        />
      </td>
      <td className="px-6 py-4 bg-lightSecondary">
        <input
          type="text"
          value={current.location}
          onChange={(e) => handleChange(e, 'location')}
        />
      </td>
      <td className="px-6 py-4 bg-lightSecondary">
        <button
          type="button"
          className="edit text-white hover:text-primary bg-primary hover:bg-gray-800 rounded-full px-4 py-2"
          onClick={() => onEditSubmit()}
        >
          Save
        </button>
      </td>
    </tr>
  );
};

export default EditRestaurant;
