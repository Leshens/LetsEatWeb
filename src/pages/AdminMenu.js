import React, { useState } from 'react';
import Data from '../restaurantData.json';
//import '../Table.css';
import Navbar from '../layout/Navbar';

// Model
const AdminMenuModel = ({ data, setData, editState, setEditState }) => {
  const handleUpdate = (event) => {
    event.preventDefault();
    const restaurantName = event.target.elements.restaurantName.value;
    const restaurantCategory = event.target.elements.restaurantCategory.value;
    const openingHours = event.target.elements.openingHours.value;
    const location = event.target.elements.location.value;
    const phoneNumber = event.target.elements.phoneNumber.value;
    const photoLink = event.target.elements.photoLink.value;
    const websiteLink = event.target.elements.websiteLink.value;
    const longitude = event.target.elements.longitude.value;
    const latitude = event.target.elements.latitude.value;
    const updatedData = data.map((d) => (d.id === editState ? { ...d, restaurantName, restaurantCategory, openingHours, location, phoneNumber, photoLink, websiteLink, longitude, latitude } : d));
    setEditState(-1);
    setData(updatedData);
  };

  const handleEdit = (id) => {
    setEditState(id);
  };

  return { handleUpdate, handleEdit };
};

// View
const AdminMenuView = ({ data, editState, handleUpdate, handleEdit, setData }) => (
  <div className="body">
    {/* przerwa */}
    <div className="h-10 w-10"></div>

    <Navbar />

    <div className="flex flex-col items-center justify-center">
      <h2 className="text-center text-3xl text-secondary font-semibold">Panel administratora</h2>

      {/* przerwa */}
      <div className="h-4 w-10"></div>

      {/* Main text */}
      <div className="inline-flex items-center justify-center">
        <div className="bg-primary h-three w-28 inline-flex order-1"></div>
        {/* przerwa */}
        <div className="h-10 w-8 inline-flex order-2"></div>
        <h3 className="text-center text-3xl text-secondary font-semibold inline-flex order-3">
          Dane restauracji
        </h3>
        {/* przerwa */}
        <div className="h-10 w-8 inline-flex order-4"></div>
        <div className="bg-primary h-three w-28 inline-flex order-5"></div>
      </div>
    </div>

    <div className="tableWrap flex items-center justify-center h-screen">
      <div>
        <form onSubmit={handleUpdate}>
          <table className="border-primary border-b-2 border-collapse text-2xl text-center shadow-md">
            <thead className="text-secondary border-primary border-b-2">
              <th scope="col" className="px-6 py-4 bg-inBetween">
                Nazwa
              </th>
              <th scope="col" className="px-6 py-4 bg-inBetween">
                Kategoria
              </th>
              <th scope="col" className="px-6 py-4 bg-inBetween">
                Godziny<br></br>Otwarcia
              </th>
              <th scope="col" className="px-6 py-4 bg-inBetween">
                Adres
              </th>
              <th scope="col" className="px-6 py-4 bg-inBetween">
                Telefon
              </th>
              <th scope="col" className="px-6 py-4 bg-inBetween">
                Zdjęcie
              </th>
              <th scope="col" className="px-6 py-4 bg-inBetween">
                Strona
              </th>
              <th scope="col" className="px-6 py-4 bg-inBetween">
                Długość<br></br>geograficzna
              </th>
              <th scope="col" className="px-6 py-4 bg-inBetween">
                Szerokość<br></br>geograficzna
              </th>
              <th scope="col" className="px-6 py-4 bg-inBetween">
                Action
              </th>
            </thead>
            {data.map((current) => (
              editState === current.id ? (
                <EditRestaurant current={current} data={data} setData={setData} key={current.id} />
              ) : (
                <tr className="" key={current.id}>
                  <td className="px-6 py-4 bg-lightSecondary">{current.restaurantName}</td>
                  <td className="px-6 py-4 bg-lightSecondary">{current.restaurantCategory}</td>
                  <td className="px-6 py-4 bg-lightSecondary">{current.openingHours}</td>
                  <td className="px-6 py-4 bg-lightSecondary">{current.location}</td>
                  <td className="px-6 py-4 bg-lightSecondary">{current.phoneNumber}</td>
                  <td className="px-6 py-4 bg-lightSecondary">{current.photoLink}</td>
                  <td className="px-6 py-4 bg-lightSecondary">{current.websiteLink}</td>
                  <td className="px-6 py-4 bg-lightSecondary">{current.longitude}</td>
                  <td className="px-6 py-4 bg-lightSecondary">{current.latitude}</td>
                  <td className="px-6 py-4 bg-lightSecondary">
                    <button
                      type="button"
                      className="edit text-white hover:text-primary bg-primary hover:bg-gray-800 rounded-full px-4 py-2"
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
const AdminMenuPresenter = () => {
  const [data, setData] = useState(Data);
  const [editState, setEditState] = useState(-1);

  const { handleUpdate, handleEdit } = AdminMenuModel({ data, setData, editState, setEditState });
  return <AdminMenuView data={data} editState={editState} handleUpdate={handleUpdate} handleEdit={handleEdit} setData={setData} />;
};

export default AdminMenuPresenter;

function EditRestaurant({ current, data, setData }) {
  function handleRestaurantName(event) {
    const restaurantName = event.target.value;
    const updatedData = data.map((d) => (d.id === current.id ? { ...d, restaurantName: restaurantName } : d));
    setData(updatedData);
  }

  function handleRestaurantCategory(event) {
    const restaurantCategory = event.target.value;
    const updatedData = data.map((d) => (d.id === current.id ? { ...d, restaurantCategory: restaurantCategory } : d));
    setData(updatedData);
  }

  function handleOpeningHours(event) {
    const openingHours = event.target.value;
    const updatedData = data.map((d) => (d.id === current.id ? { ...d, openingHours: openingHours } : d));
    setData(updatedData);
  }

  function handleLocation(event) {
    const location = event.target.value;
    const updatedData = data.map((d) => (d.id === current.id ? { ...d, location: location } : d));
    setData(updatedData);
  }

  function handlePhoneNumber(event) {
    const phoneNumber = event.target.value;
    const updatedData = data.map((d) => (d.id === current.id ? { ...d, phoneNumber: phoneNumber } : d));
    setData(updatedData);
  }

  function handlePhotoLink(event) {
    const photoLink = event.target.value;
    const updatedData = data.map((d) => (d.id === current.id ? { ...d, photoLink: photoLink } : d));
    setData(updatedData);
  }
  function handleWebsiteLink(event) {
    const websiteLink = event.target.value;
    const updatedData = data.map((d) => (d.id === current.id ? { ...d, websiteLink: websiteLink } : d));
    setData(updatedData);
  }
  function handleLongitude(event) {
    const longitude = event.target.value;
    const updatedData = data.map((d) => (d.id === current.id ? { ...d, longitude: longitude } : d));
    setData(updatedData);
  }
  function handleLatitude(event) {
    const latitude = event.target.value;
    const updatedData = data.map((d) => (d.id === current.id ? { ...d, latitude: latitude } : d));
    setData(updatedData);
  }

  return (
    <tr className='bg-green-100'>
      <td><input type="text" className="w-40 py-4 bg-green-100" onChange={handleRestaurantName} value={current.restaurantName} name="restaurantName" placeholder="Wpisz nazwę" /></td>
      <td><input type="text" className="w-40 py-4 bg-green-100" onChange={handleRestaurantCategory} value={current.restaurantCategory} name="restaurantCategory" placeholder="Wpisz kategorię restauracji" /></td>
      <td><input type="text" className="w-40 py-4 bg-green-100" onChange={handleOpeningHours} value={current.openingHours} name="openingHours" placeholder="Podaj godziny otwarcia" /></td>
      <td><input type="text" className="w-40 py-4 bg-green-100 " onChange={handleLocation} value={current.location} name="location" placeholder="Podaj location" /></td>
      <td><input type="text" className="w-40 py-4 bg-green-100" onChange={handlePhoneNumber} value={current.phoneNumber} name="phoneNumber" placeholder="Podaj numer telefonu" /></td>
      <td><input type="text" className="w-40 py-4 bg-green-100" onChange={handlePhotoLink} value={current.photoLink} name="photoLink" placeholder="Podaj link do zdjęcia" /></td>
      <td><input type="text" className="w-40 py-4 bg-green-100" onChange={handleWebsiteLink} value={current.websiteLink} name="websiteLink" placeholder="Podaj link do strony restauracji" /></td>
      <td><input type="text" className="w-40 py-4 bg-green-100" onChange={handleLongitude} value={current.longitude} name="longitude" placeholder="Podaj długość geograficzną restauracji" /></td>
      <td><input type="text" className="w-40 py-4 bg-green-100" onChange={handleLatitude} value={current.latitude} name="latitude" placeholder="Podaj szerokość geograficzną restauracji" /></td>
      <td><button type='submit' className='edit text-primary hover:text-white bg-gray-800 hover:bg-primary rounded-full px-4 py-2'>Update</button></td>
    </tr>
  )
}
