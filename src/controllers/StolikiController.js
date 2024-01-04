import React from 'react';
import { useStolikiModel } from '../models/StolikiModel';
import { StolikiView } from '../views/StolikiView';

export const StolikiController = () => {
  const { data, editState, updateStolik, editStolik } = useStolikiModel();

  const handleUpdate = (event) => {
    event.preventDefault();
    const id = editState;
    const nazwa = event.target.elements.nazwa.value;
    const twoSeater = event.target.elements.twoSeater.value;
    const fourSeater = event.target.elements.fourSeater.value;
    const sixSeater = event.target.elements.sixSeater.value;
    const eightSeater = event.target.elements.eightSeater.value;

    updateStolik(id, nazwa, twoSeater, fourSeater, sixSeater, eightSeater);
  };

  const handleEdit = (id) => {
    editStolik(id);
  };

  return (
    <StolikiView
      data={data}
      editState={editState}
      handleUpdate={handleUpdate}
      handleEdit={handleEdit}
    />
  );
};
