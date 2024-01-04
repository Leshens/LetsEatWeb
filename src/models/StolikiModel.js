import { useState } from 'react';
import Data from '../stolikiData.json';

export const useStolikiModel = () => {
  const [data, setData] = useState(Data);
  const [editState, setEditState] = useState(-1);

  const updateStolik = (id, nazwa, twoSeater, fourSeater, sixSeater, eightSeater) => {
    const updatedData = data.map((d) =>
      d.id === id
        ? { ...d, nazwa, twoSeater, fourSeater, sixSeater, eightSeater }
        : d
    );
    setEditState(-1);
    setData(updatedData);
  };

  const editStolik = (id) => {
    setEditState(id);
  };

  return { data, editState, updateStolik, editStolik };
};
