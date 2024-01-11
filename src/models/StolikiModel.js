// StolikiModel.js
import { useState } from 'react';
import Data from '../stolikiData.json';

export function useStolikiModel() {
  const [data, setData] = useState(Data);
  const [editState, setEditState] = useState(-1);

  function handleUpdate(nazwa, twoSeater, fourSeater, sixSeater, eightSeater) {
    const updatedData = data.map((d) =>
      d.id === editState
        ? { ...d, nazwa, twoSeater, fourSeater, sixSeater, eightSeater }
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
