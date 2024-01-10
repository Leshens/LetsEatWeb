
import React from 'react';
import { useAdminMenuModel } from '../models/AdminMenuModel';
import { AdminMenuView } from '../views/AdminMenuView';
import Navbar from "../layout/Navbar";

export default function AdminMenuController() {
  const {
    data,
    editState,
    handleUpdate,
    handleEdit,
  } = useAdminMenuModel();

  return (
    <div className='body'>
      <div className='h-10 w-10'></div>
      <Navbar />

      <div className='flex flex-col items-center justify-center'>
        <h2 className='text-center text-3xl text-secondary font-semibold'>
          Panel administratora
        </h2>

        <div className='h-4 w-10'></div>

        {/* Main text */}
        <div className='inline-flex items-center justify-center'>
          <div className='bg-primary h-three w-28 inline-flex order-1'></div>
          <div className='h-10 w-8 inline-flex order-2'></div>
          <h3 className='text-center text-3xl text-secondary font-semibold inline-flex order-3'>
            Dane restauracji
          </h3>
          <div className='h-10 w-8 inline-flex order-4'></div>
          <div className='bg-primary h-three w-28 inline-flex order-5'></div>
        </div>
      </div>

      <AdminMenuView
        data={data}
        editState={editState}
        handleUpdate={handleUpdate}
        handleEdit={handleEdit}
      />
    </div>
  );
}
