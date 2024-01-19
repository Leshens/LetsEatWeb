import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Navbar from '../layout/Navbar';

// Model dla Stolików
const StolikiTableModel = ({ data, setData, editState, setEditState }) => {
  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get('http://31.179.139.182:690/api/tables');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching model data:', error);
    }
  }, [setData]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleDelete = async (id) => {
    try {
      const token = 11234567899009;
      //const token = localStorage.getItem('token');
      const deleteUrl = `http://31.179.139.182:690/api/tables/${id}`;
      await axios.delete(deleteUrl, {
        headers: {
          'Authorization': `${token}`
        }
      });
      console.log('Deleting table with ID:', id, 'and token:', token);
      const updatedData = data.filter((d) => d.tableId !== id);
      setData(updatedData);
    } catch (error) {
      console.error('Error deleting table:', error);
    }
  };

  const handleAddTableSubmit = async (size) => {
    try {
      const token = 11234567899009;
      const restaurantId = 1;
      // const token = localStorage.getItem('token');
      // const restaurantId = localStorage.getItem('restaurantId');

      const postData = {
        token,
        size,
        restaurantId,
      };

      // Log the data before making the POST request
      console.log('POST Data:', postData);

      await axios.post('http://31.179.139.182:690/api/tables', postData);

      fetchData();
    } catch (error) {
      console.error('Error adding table:', error);
    }
  };

  return { handleDelete, handleAddTableSubmit };
};

// Widok dla Stolików
const StolikiTableView = ({ data, handleDelete, handleAddTableSubmit }) => {
  const [newTableSize, setNewTableSize] = useState(2);

  const handleSizeChange = (event) => {
    const newSize = Math.max(1, Math.min(Number(event.target.value), 100));
    setNewTableSize(newSize);
  };

  const handleSubmit = () => {
    console.log({ size: newTableSize });
    handleAddTableSubmit(newTableSize);
    setNewTableSize(2);
  };



  return (
    <div className='body'>
      <Navbar />
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

      <div className='tablesContainer flex items-center justify-center h-screen'>
        <div>
          {/* Card for adding a new table (always visible) */}
          <div className='bg-lightSecondary p-4 rounded-md cursor-pointer text-center border border-primary shadow-md'>
            <p className='text-xl font-semibold mb-2'>Add Table</p>
            <div className='flex items-center justify-center'>
              <input
                type='number'
                value={newTableSize}
                onChange={handleSizeChange}
                className='w-16 py-2 text-center border border-gray-400 rounded-md mr-2'
              />
              <button
                type='button'
                onClick={handleSubmit}
                className='text-primary hover:text-white bg-gray-800 hover:bg-primary rounded-full px-4 py-2'
              >
                Add
              </button>
            </div>
          </div>

          {/* Existing table cards */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4'>
            {data.map((current) => (
              <div key={current.tableId} className='bg-lightSecondary p-4 rounded-md'>
                <p className='text-xl font-semibold mb-2'>Size: {current.size}</p>
                <button
                  type='button'
                  className='text-primary hover:text-white bg-gray-800 hover:bg-primary rounded-full px-4 py-2'
                  onClick={() => handleDelete(current.tableId)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};



// Prezenter dla Stolików
const StolikiTablePresenter = () => {
  const [data, setData] = useState([]);
  const [editState, setEditState] = useState(-1);

  const stolikiTableModel = StolikiTableModel({ data, setData, editState, setEditState });

  useEffect(() => {
    axios.get('http://31.179.139.182:690/api/tables')
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return <StolikiTableView data={data} editState={editState} {...stolikiTableModel} />;
};

export default StolikiTablePresenter;