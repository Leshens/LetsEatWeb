import React, { useState } from 'react';
import Data from '../stolikiData.json';
import '../Table.css';
import Navbar from '../layout/Navbar';

// Model
const StolikiTableModel = ({ data, setData, editState, setEditState }) => {
  const handleUpdate = (event) => {
    event.preventDefault();
    const nazwa = event.target.elements.nazwa.value;
    const twoSeater = event.target.elements.twoSeater.value;
    const fourSeater = event.target.elements.fourSeater.value;
    const sixSeater = event.target.elements.sixSeater.value;
    const eightSeater = event.target.elements.eightSeater.value;
    const updatedData = data.map((d) => (d.id === editState ? { ...d, nazwa, twoSeater, fourSeater, sixSeater, eightSeater } : d));
    setEditState(-1);
    setData(updatedData);
  };

  const handleEdit = (id) => {
    setEditState(id);
  };

  return { handleUpdate, handleEdit };
};

// View
const StolikiTableView = ({ data, editState, handleUpdate, handleEdit, setData }) => (
  <div className='body'>
    <div className='h-10 w-10'></div>

    <Navbar></Navbar>

    <div className='flex flex-col items-center justify-center'>
      <h2 className='text-center text-3xl text-secondary font-semibold'>Panel administratora</h2>
      <div className='h-4 w-10'></div>

      <div className='inline-flex items-center justify-center'>
        <div className='bg-primary h-three w-28 inline-flex order-1'></div>
        <div className='h-10 w-8 inline-flex order-2'></div>
        <h3 className='text-center text-3xl text-secondary font-semibold inline-flex order-3'>Stoliki</h3>
        <div className='h-10 w-8 inline-flex order-4'></div>
        <div className='bg-primary h-three w-28 inline-flex order-5'></div>
      </div>
    </div>

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
                <EditStolik current={current} key={current.id} data={data} setData={setData} />
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
  </div>
);

// Presenter
const StolikiTablePresenter = () => {
  const [data, setData] = useState(Data);
  const [editState, setEditState] = useState(-1);

  const { handleUpdate, handleEdit } = StolikiTableModel({ data, setData, editState, setEditState });
  return <StolikiTableView data={data} editState={editState} handleUpdate={handleUpdate} handleEdit={handleEdit} setData={setData} />;
};

export default StolikiTablePresenter;

function EditStolik({ current, data, setData }) {
  const handleNazwa = (event) => {
    const nazwa = event.target.value;
    const updatedData = data.map((d) => (d.id === current.id ? { ...d, nazwa } : d));
    setData(updatedData);
  };

  const handleTwoSeater = (event) => {
    const twoSeater = event.target.value;
    const updatedData = data.map((d) => (d.id === current.id ? { ...d, twoSeater } : d));
    setData(updatedData);
  };

  const handleFourSeater = (event) => {
    const fourSeater = event.target.value;
    const updatedData = data.map((d) => (d.id === current.id ? { ...d, fourSeater } : d));
    setData(updatedData);
  };

  const handleSixSeater = (event) => {
    const sixSeater = event.target.value;
    const updatedData = data.map((d) => (d.id === current.id ? { ...d, sixSeater } : d));
    setData(updatedData);
  };

  const handleEightseater = (event) => {
    const eightSeater = event.target.value;
    const updatedData = data.map((d) => (d.id === current.id ? { ...d, eightSeater } : d));
    setData(updatedData);
  };

  return (
    <tr className='bg-green-100'>
      <td><input type="text" className="w-20 py-4 bg-green-100" onChange={handleNazwa} value={current.nazwa} name="nazwa" placeholder="Wpisz nazwę"/></td>
      <td><input type="number" className="w-20 py-4 bg-green-100" onChange={handleTwoSeater} value={current.twoSeater} name="twoSeater" placeholder="Podaj ilość dwu-osobowych stolików" /></td>
      <td><input type="number" className="w-20 py-4 bg-green-100" onChange={handleFourSeater} value={current.fourSeater} name="fourSeater" placeholder="Podaj ilość cztero-osobowych stolików " /></td>
      <td><input type="number" className="w-20 py-4 bg-green-100" onChange={handleSixSeater} value={current.sixSeater} name="sixSeater" placeholder="Podaj ilość sześcio-osobowych stolików" /></td>
      <td><input type="number" className="w-20 py-4 bg-green-100" onChange={handleEightseater} value={current.eightSeater} name="eightSeater" placeholder="Podaj ośmio-osobowych stolików" /></td>
      <td><button type='submit' className='text-primary hover:text-white bg-gray-800 hover:bg-primary rounded-full px-4 py-2'>Update</button></td>
    </tr>
  );
}
