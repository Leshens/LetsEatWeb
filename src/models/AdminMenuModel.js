// AdminMenuModel.js
import { useState } from 'react';
import Data from '../restaurantData.json';

export function useAdminMenuModel() {
  const [data, setData] = useState(Data);
  const [editState, setEditState] = useState(-1);

  function handleUpdate(nazwa, rodzaj, hours, adres, telefon) {
    const updatedData = data.map((d) =>
      d.id === editState
        ? { ...d, nazwa, rodzaj, hours, adres, telefon }
        : d
    );
    setEditState(-1);
    setData(updatedData);
  }

  function handleEdit(id) {
    setEditState(id);
  }

  return { data, editState, handleUpdate, handleEdit };
}
