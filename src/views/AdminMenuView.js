// AdminMenuView.js
import React from 'react';
import EditRestaurant from '../components/EditRestaurant';

export function AdminMenuView({ data, editState, handleUpdate, handleEdit }) {
  return (
    <div className='tableWrap flex items-center justify-center h-screen'>
      <div>
        <form onSubmit={handleUpdate}>
          <table className='border-primary border-b-2 border-collapse text-2xl text-center shadow-md'>
            <thead className='text-secondary border-primary border-b-2'>
              <th scope='col' class='px-6 py-4 bg-inBetween'>
                Nazwa
              </th>
              <th scope='col' class='px-6 py-4 bg-inBetween'>
                Rodzaj
              </th>
              <th scope='col' class='px-6 py-4 bg-inBetween'>
                Godziny<br></br>Otwarcia
              </th>
              <th scope='col' class='px-6 py-4 bg-inBetween'>
                Adres
              </th>
              <th scope='col' class='px-6 py-4 bg-inBetween'>
                Telefon
              </th>
              <th scope='col' class='px-6 py-4 bg-inBetween'>
                Action
              </th>
            </thead>
            {data.map((current) => (
              editState === current.id ? (
                <EditRestaurant
                  key={current.id}
                  current={current}
                  handleUpdate={handleUpdate}
                />
              ) : (
                <tr className='' key={current.id}>
                  <td class='px-6 py-4 bg-lightSecondary'>{current.nazwa}</td>
                  <td class='px-6 py-4 bg-lightSecondary'>{current.rodzaj}</td>
                  <td class='px-6 py-4 bg-lightSecondary'>{current.hours}</td>
                  <td class='px-6 py-4 bg-lightSecondary'>{current.adres}</td>
                  <td class='px-6 py-4 bg-lightSecondary'>{current.telefon}</td>
                  <td class='px-6 py-4 bg-lightSecondary'>
                    <button
                      type='button'
                      className='edit text-white hover:text-primary bg-primary hover:bg-gray-800 rounded-full px-4 py-2'
                      onClick={() => handleEdit(current.id)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              )
            ))}
          </table>
        </form>
      </div>
    </div>
  );
}
