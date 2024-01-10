
import React from 'react';
import { useMenuModel } from '../models/MenuModel';
import { MenuView } from '../views/MenuView';
import '../Table.css';
import Navbar from '../layout/Navbar';

export default function MenuController() {
  const {
    data,
    editState,
    handleUpdate,
    handleEdit,
    handleDelete,
  } = useMenuModel();

  return (
    <div className='body'>
      <div className='h-10 w-10'></div>
      <Navbar />

      <div className='flex flex-col items-center justify-center order-1'>
        <h2 className='text-center text-3xl text-secondary font-semibold'>
          Panel administratora
        </h2>
        <div className='h-4 w-10'></div>
        <div className='inline-flex items-center justify-center'>
          <div className='bg-primary h-three w-28 inline-flex order-1'></div>
          <div className='h-10 w-8 inline-flex order-2'></div>
          <h3 className='text-center text-3xl text-secondary font-semibold inline-flex order-3'>
            Menu restauracji
          </h3>
          <div className='h-10 w-8 inline-flex order-4'></div>
          <div className='bg-primary h-three w-28 inline-flex order-5'></div>
        </div>
      </div>

      <MenuView
        data={data}
        editState={editState}
        handleUpdate={handleUpdate}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
}
