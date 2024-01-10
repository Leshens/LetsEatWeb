import { useState } from 'react';
import Data from '../dishData.json';

export function useMenuModel() {
  const [data, setData] = useState(Data);
  const [editState, setEditState] = useState(-1);

  function handleUpdate(nazwa, cena, photo) {
    const updatedData = data.map((d) =>
      d.id === editState
        ? { ...d, nazwa, cena, photo }
        : d
    );
    setEditState(-1);
    setData(updatedData);
  }

  function handleEdit(id) {
    setEditState(id);
  }

  function handleDelete(id) {
    const updatedData = data.filter((d) => id !== d.id);
    setData(updatedData);
  }

  return { data, editState, handleUpdate, handleEdit, handleDelete };
}
