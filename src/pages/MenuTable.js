import React, { useRef, useState, useEffect } from 'react';
import Data from '../dishData.json';
import '../Table.css';
import Navbar from '../layout/Navbar';
import axios from 'axios';

// Model
const MenuTableModel = ({ data, setData, editState, setEditState }) => {
  
  const handleUpdate = async (event, menuId, name, price) => {
    event.preventDefault();
    const serverIP = process.env.REACT_APP_SERVER_IP;
    const restaurantId = localStorage.getItem('restaurantId');
    const token = localStorage.getItem('token');
  
    try {
      const response = await axios.patch(`${serverIP}/menus/${menuId}`,{ name, price, restaurantId },{
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      const updatedData = data.map((d) => (d.menuId === menuId ? response.data : d));
      setEditState(-1);
      setData(updatedData);
    } catch (error) {
      console.error('Error updating dish:', error);
    }
  };
  

  const handleEdit = (id) => {
    setEditState(id);
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem('token');
    const serverIP = process.env.REACT_APP_SERVER_IP
    try {
      await axios.delete(`${serverIP}/menus/${id}`, {
        headers: {
          Authorization: `${token}`,
        },
      });

      const updatedData = data.filter((d) => d.menuId !== id);
      setData(updatedData);
    } catch (error) {
      console.error('Error deleting dish:', error);
    }
  };

  const handleAdd = async (newDish) => {
    const serverIP = process.env.REACT_APP_SERVER_IP
    try {
      console.log('Adding dish:', newDish);
      const response = await axios.post(`${serverIP}/menus`, newDish);
      console.log('Response:', response.data);
      setData((prevData) => [...prevData, response.data]);
    } catch (error) {
      console.error('Error adding dish:', error);
    }
  };
  

  const handleGetDish = async () => {
    const restaurantId = localStorage.getItem('restaurantId');
    const serverIP = process.env.REACT_APP_SERVER_IP
    try {
      const response = await axios.get(`${serverIP}/menus/restaurant/${restaurantId}`);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching dishes:', error);
    }
  };

  return { handleUpdate, handleEdit, handleDelete, handleAdd, handleGetDish };
};

// View
const MenuTableView = ({ data, editState, handleUpdate, handleEdit, handleDelete, handleAdd, handleGetDish, setData }) => {
  useEffect(() => {
    handleGetDish(1);
  }, [handleGetDish]);

  return (
    <div className="body">

    <div className="h-10 w-10"></div>

    <Navbar />

    <div className="flex flex-col items-center justify-center order-1">
      <h2 className="text-center text-3xl text-secondary font-semibold">Panel administratora</h2>
      <div className="h-4 w-10"></div>

      <div className="inline-flex items-center justify-center">
        <div className="bg-primary h-three w-28 inline-flex order-1"></div>
        <div className="h-10 w-8 inline-flex order-2"></div>
        <h3 className="text-center text-3xl text-secondary font-semibold inline-flex order-3">
          Menu restauracji
        </h3>
        <div className="h-10 w-8 inline-flex order-4"></div>
        <div className="bg-primary h-three w-28 inline-flex order-5"></div>
      </div>
    </div>

    <div className="tableWrap flex items-center justify-center h-screen order-3">
        <div>
          <AddDish handleAdd={handleAdd} />
          <form onSubmit={(event) => handleAddDish(event, handleAdd)}>
          <div className="h-10 w-10"></div>

          <table className="border-primary border-b-2 border-collapse text-2xl text-center shadow-md">
            <thead className="text-secondary border-primary border-b-2">
              <tr>
                <th scope="col" className="px-6 py-4 bg-inBetween">
                  Nazwa
                </th>
                <th scope="col" className="px-6 py-4 bg-inBetween">
                  Cena
                </th>
                <th scope="col" className="px-6 py-4 bg-inBetween">
                  Action
                </th>
              </tr>
            </thead>
            {data.map((current) => (
                editState === current.menuId ? (
                  <EditDish key={current.menuId} current={current} data={data} setData={setData} handleUpdate={handleUpdate} />
                ) : (
                  <tr key={current.menuId}>
                    <td className="px-6 py-4 bg-lightSecondary">{current.name}</td>
                    <td className="px-6 py-4 bg-lightSecondary">{current.price}</td>
                    <td className="px-6 py-4 bg-lightSecondary">
                    <button
                      type="button"
                      className="edit text-white hover:text-primary bg-primary hover:bg-gray-800 rounded-full px-4 py-2"
                      onClick={() => handleEdit(current.menuId)}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="delete text-white hover:text-primary bg-red-500 hover:bg-pink-900 rounded-full px-4 py-2"
                      onClick={() => handleDelete(current.menuId)}
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
    </div>
  );
};

// Presenter
const MenuTablePresenter = () => {
  const [data, setData] = useState(Data);
  const [editState, setEditState] = useState(-1);

  const { handleUpdate, handleEdit, handleDelete, handleAdd, handleGetDish } = MenuTableModel({ data, setData, editState, setEditState });
  return (
    <MenuTableView
      data={data}
      editState={editState}
      handleUpdate={handleUpdate}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
      handleAdd={handleAdd}
      handleGetDish={handleGetDish}
      setData={setData}
    />
  );
};

export default MenuTablePresenter;

function EditDish({ current, handleUpdate }) {
  const [name, setName] = useState(current.name);
  const [price, setPrice] = useState(current.price);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  return (
    <tr className="bg-green-100">
      <td>
        <input
          type="text"
          className="w-52 py-4 bg-green-100"
          onChange={handleNameChange}
          value={name}
          name="name"
          placeholder="Wpisz nazwę"
        />
      </td>
      <td>
        <input
          type="float"
          className="w-24 py-4 bg-green-100"
          onChange={handlePriceChange}
          value={price}
          name="price"
          placeholder="Wpisz cenę"
        />
      </td>
      <td>
      <button
  type="button"
  className="edit text-primary hover:text-white bg-gray-800 hover:bg-primary rounded-full px-4 py-2"
  onClick={(event) => {
    console.log('Event:', event);
    console.log('Current:', current);
    console.log('Name:', name);
    console.log('Price:', price);
    handleUpdate(event, current.menuId, name, price);
  }}
>
  Update
</button>
      </td>
    </tr>
  );
}


const handleAddDish = async (event, handleAdd) => {
  event.preventDefault();

  const name = event.target.elements.name.value;
  const price = event.target.elements.price.value;

  const newDish = {
    name,
    price,
  };

  handleAdd(newDish);
};

function AddDish({ handleAdd }) {
  const nameRef = useRef();
  const priceRef = useRef();

  function handleValues(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const price = event.target.elements.price.value;

    const newDish = {
      name,
      price,
      restaurantId: localStorage.getItem('restaurantId'),
      token:localStorage.getItem('token'),
    };

    handleAdd(newDish);

    nameRef.current.value = '';
    priceRef.current.value = '';
  }
return(
  <form className='addForm flex flex-row items-center justify-center order-2' onSubmit={handleValues}>
  <input type="text" className="w-40 text-center focus:outline-none focus:outline-offset-0 focus:border-primary focus:border-3" name="name" placeholder="Wpisz nazwę" ref={nameRef}/>
  <input type="text" className="w-24 text-center focus:outline-none focus:outline-offset-0 focus:border-primary focus:border-3" name="price" placeholder="Podaj cenę" ref={priceRef}/>
  <button className='add text-white hover:text-primary bg-primary hover:bg-gray-800 rounded-full px-6 py-2' type="submit">Add</button>
</form>
)
}