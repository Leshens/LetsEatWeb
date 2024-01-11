import React from 'react';
import EditStolik from '../components/EditStolik';

export function StolikiView({ data, editState, handleUpdate, handleEdit }) {
  return (
    <div className='tableWrap flex items-center justify-center h-screen'>
      <div>
        <form onSubmit={handleUpdate}>
          <table className='border-primary border-b-2 border-collapse text-2xl text-center shadow-md'>
            <thead className='text-secondary border-primary border-b-2'>
              <th scope='col' className='px-6 py-4 bg-inBetween'>
                Nazwa
              </th>
              <th scope='col' className='px-6 py-4 bg-inBetween'>
                2os
              </th>
              <th scope='col' className='px-6 py-4 bg-inBetween'>
                4os
              </th>
              <th scope='col' className='px-6 py-4 bg-inBetween'>
                6os
              </th>
              <th scope='col' className='px-6 py-4 bg-inBetween'>
                8os
              </th>
              <th scope='col' className='px-6 py-4 bg-inBetween'>
                Action
              </th>
            </thead>
            {data.map((current) => (
              editState === current.id ? (
                <EditStolik
                  key={current.id}
                  current={current}
                  handleUpdate={handleUpdate}
                />
              ) : (
                <tr key={current.id}>
                  <td className='px-6 py-4 bg-lightSecondary'>{current.nazwa}</td>
                  <td className='px-6 py-4 bg-lightSecondary'>{current.twoSeater}</td>
                  <td className='px-6 py-4 bg-lightSecondary'>{current.fourSeater}</td>
                  <td className='px-6 py-4 bg-lightSecondary'>{current.sixSeater}</td>
                  <td className='px-6 py-4 bg-lightSecondary'>{current.eightSeater}</td>
                  <td className='px-6 py-4 bg-lightSecondary'>
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
