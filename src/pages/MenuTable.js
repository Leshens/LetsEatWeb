import React, { useRef, useState} from 'react';
import Data from '../dishData.json';
import '../Table.css';
import Navbar from '../layout/Navbar';

// Model
const MenuTableModel = ({ data, setData, editState, setEditState }) => {
  const handleUpdate = (event) => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const price = event.target.elements.price.value;
    const updatedData = data.map((d) => (d.id === editState ? { ...d, name, price } : d));
    setEditState(-1);
    setData(updatedData);
  };

  const handleEdit = (id) => {
    setEditState(id);
  };

  const handleDelete = (id) => {
    const updatedData = data.filter((d) => id !== d.id);
    setData(updatedData);
  };

  return { handleUpdate, handleEdit, handleDelete };
};

// View
const MenuTableView = ({ data, editState, handleUpdate, handleEdit, handleDelete, setData }) => (
  <div className="body">
    {/* przerwa */}
    <div className="h-10 w-10"></div>

    <Navbar />

    <div className="flex flex-col items-center justify-center order-1">
      <h2 className="text-center text-3xl text-secondary font-semibold">Panel administratora</h2>
      {/* przerwa */}
      <div className="h-4 w-10"></div>

      {/* Main text */}
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
        <AddDish setData={setData} data={data} />
        <form onSubmit={handleUpdate}>
          {/* przerwa */}
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
              editState === current.id ? (
                <EditDish current={current} key={current.id} data={data} setData={setData} handleUpdate={handleUpdate} />
              ) : (
                <tr key={current.id}>
                  <td className="px-6 py-4 bg-lightSecondary">{current.name}</td>
                  <td className="px-6 py-4 bg-lightSecondary">{current.price}</td>
                  <td className="px-6 py-4 bg-lightSecondary">
                    <button
                      type="button"
                      className="edit text-white hover:text-primary bg-primary hover:bg-gray-800 rounded-full px-4 py-2"
                      onClick={() => handleEdit(current.id)}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="delete text-white hover:text-primary bg-red-500 hover:bg-pink-900 rounded-full px-4 py-2"
                      onClick={() => handleDelete(current.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )
            ))}
          </table>

          {/* przerwa */}
          <div className="h-10 w-10"></div>
        </form>
      </div>
    </div>
  </div>
);

// Presenter
const MenuTablePresenter = () => {
  const [data, setData] = useState(Data);
  const [editState, setEditState] = useState(-1);

  const { handleUpdate, handleEdit, handleDelete } = MenuTableModel({ data, setData, editState, setEditState });
  return (
    <MenuTableView
      data={data}
      editState={editState}
      handleUpdate={handleUpdate}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
      setData={setData}
    />
  );
};

export default MenuTablePresenter;

function EditDish({current, data, setData}){
  function handleName(event) {
      const name = event.target.value;
      const updatedData = data.map((d) => d.id === current.id ? {...d, name:name} : d)
      setData(updatedData)
  }

  function handlePrice(event) {
      const price = event.target.value;
      const updatedData = data.map((d) => d.id === current.id ? {...d, price:price} : d)
      setData(updatedData)
  }
return(
  <tr className='bg-green-100'>
      <td><input type="text" className="w-52 py-4 bg-green-100" onChange={handleName} value={current.name} name="name" placeholder="Wpisz nazwę"/></td>
      <td><input type="text" className="w-24 py-4 bg-green-100" onChange={handlePrice} value={current.price} name="price" placeholder="Wpisz cenę" /></td>
      <td><button type='submit' className='edit text-primary hover:text-white bg-gray-800 hover:bg-primary rounded-full px-4 py-2'>Update</button></td>
  </tr>
)
}

function AddDish({setData}) {
const nameRef= useRef()
const priceRef= useRef()

function handleValues(event) {
  event.preventDefault();
  const name =  event.target.elements.name.value;
  const price =  event.target.elements.price.value;
  const newDish = {
      id: 4,
      name,
      price,
  }
  setData(prevData => prevData.concat(newDish))
  nameRef.current.value = ""
  priceRef.current.value = ""
}
return(
  <form className='addForm flex flex-row items-center justify-center order-2' onSubmit={handleValues}>
      <input type="text" className="w-40 text-center focus:outline-none focus:outline-offset-0 focus:border-primary focus:border-3" name="name" placeholder="Wpisz nazwę" ref={nameRef}/>
      <input type="text" className="w-24 text-center focus:outline-none focus:outline-offset-0 focus:border-primary focus:border-3" name="price" placeholder="Podaj cenę" ref={priceRef}/>
      <button className='add text-white hover:text-primary bg-primary hover:bg-gray-800 rounded-full px-6 py-2'>Add</button>
  </form>
)
}
