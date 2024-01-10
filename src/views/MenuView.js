// MenuView.js
import React from 'react';
import EditDish from '../components/EditDish';
import AddDish from '../components/AddDish';

export function MenuView({ data, editState, handleUpdate, handleEdit, handleDelete }) {
  return (
    <div className='tableWrap flex items-center justify-center h-screen order-3'>
      <div>
        <AddDish />
        <form onSubmit={handleUpdate}>
          <div className="h-10 w-10"></div>
          <table className='border-primary border-b-2 border-collapse text-2xl text-center shadow-md'>
            <thead className='text-secondary border-primary border-b-2'>
              <th scope="col" className="px-6 py-4 bg-inBetween">Nazwa</th>
              <th scope="col" className="px-6 py-4 bg-inBetween">Cena</th>
              <th scope="col" className="px-6 py-4 bg-inBetween">Zdjęcie</th>
              <th scope="col" className="px-6 py-4 bg-inBetween">Action</th>
            </thead>
            {data.map((current) => (
              editState === current.id ? (
                <EditDish
                  key={current.id}
                  current={current}
                  handleUpdate={handleUpdate}
                />
              ) : (
                <tr key={current.id}>
                  <td className="px-6 py-4 bg-lightSecondary">{current.nazwa}</td>
                  <td className="px-6 py-4 bg-lightSecondary">{current.cena}</td>
                  <td className="px-6 py-4 bg-lightSecondary"><img src={current.photo} alt="" className='h-32'></img></td>
                  <td className="px-6 py-4 bg-lightSecondary">
                    <button
                      type='button'
                      className='edit text-white hover:text-primary bg-primary hover:bg-gray-800 rounded-full px-4 py-2'
                      onClick={() => handleEdit(current.id)}
                    >
                      Edit
                    </button>
                    <button
                      type='button'
                      className='delete text-white hover:text-primary bg-red-500 hover:bg-pink-900 rounded-full px-4 py-2'
                      onClick={() => handleDelete(current.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )
            ))}
          </table>
          <div className="h-10 w-10"></div>
        </form>
      </div>
    </div>
  );
}
