import React, { useState, useEffect } from 'react';
import Navbar from '../layout/Navbar';
import axios from 'axios';

//Admin Model
const AdminMenuModel = ({ data, setData, editState, setEditState }) => {

  const handleUpdate = async (event) => {
    event.preventDefault();
    
    const formElements = [
      'token',
      'restaurantName',
      'restaurantCategory',
      'openingHours',
      'location',
      'phoneNumber',
      'photoLink',
      'websiteLink',
      'longitude',
      'latitude',
    ];
    
    const formValues = formElements.reduce((values, element) => {
      const formElement = event.target.elements[element];
    
      if (formElement) {
        values[element] = formElement.value;
      } else {
        console.error(`Form element ${element} is not available.`);
      }
    
      return values;
    }, {});
    
    try {
      const googleIp = process.env.REACT_APP_GOOGLE_GEOCODE_IP
      const geocodingResponse = await axios.get(`${googleIp}`, {
        params: {
          address: formValues.location,
          key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        },
      });
  
      const { results } = geocodingResponse.data;
      const locationCoordinates = results[0]?.geometry?.location;
  
      if (locationCoordinates) {
        formValues.latitude = locationCoordinates.lat;
        formValues.longitude = locationCoordinates.lng;

        formValues.restaurantId = localStorage.getItem('restaurantId');

        const id = localStorage.getItem('restaurantId');
        const serverIP = process.env.REACT_APP_SERVER_IP
        console.log('Form Values:', formValues);
        const response = await axios.patch(`${serverIP}/restaurants/${id}`, formValues, {
          headers: {
            'Authorization': localStorage.getItem('token'),
            'Content-Type': 'application/json',
          },
        });
  
        console.log('Form Values:', formValues);
        console.log('API Response:', response.data);
  
        const updatedData = data.map((d) =>
          d.id === editState ? { ...d, ...response.data } : d
        );
        setEditState(-1);
        setData(updatedData);
      } else {
        console.error('Unable to get coordinates from the address');
      }
    } catch (error) {
      console.error('Error updating data:', error);
    }
};
  

  const handleEdit = (id) => {
    setEditState(id);
  };

  return { handleUpdate, handleEdit};
};


// View
const AdminMenuView = ({ data, editState, handleUpdate, handleEdit, setData }) => (
  <div className="body">

    <div className="h-10 w-10"></div>

    <Navbar />

    <div className="flex flex-col items-center justify-center">
      <h2 className="text-center text-3xl text-secondary font-semibold">Panel administratora</h2>

      <div className="h-4 w-10"></div>

      <div className="inline-flex items-center justify-center">
        <div className="bg-primary h-three w-28 inline-flex order-1"></div>
    
        <div className="h-10 w-8 inline-flex order-2"></div>
        <h3 className="text-center text-3xl text-secondary font-semibold inline-flex order-3">
          Dane restauracji
        </h3>
      
        <div className="h-10 w-8 inline-flex order-4"></div>
        <div className="bg-primary h-three w-28 inline-flex order-5"></div>
      </div>
    </div>

    <div className="tableWrap flex items-center justify-center h-screen">
      <div>
        <form onSubmit={handleUpdate}>
          <table className="border-primary border-b-2 border-collapse text-2xl text-center shadow-md">
            <thead className="text-white border-primary border-b-2">
            <th scope="col" className="px-6 py-4 bg-primary">
                Token
              </th>
              <th scope="col" className="px-6 py-4 bg-primary">
                Nazwa
              </th>
              <th scope="col" className="px-6 py-4 bg-primary">
                Kategoria
              </th>
              <th scope="col" className="px-6 py-4 bg-primary">
                Godziny<br></br>Otwarcia
              </th>
              <th scope="col" className="px-6 py-4 bg-primary">
                Adres
              </th>
              <th scope="col" className="px-6 py-4 bg-primary">
                Telefon
              </th>
              <th scope="col" className="px-6 py-4 bg-primary">
                Zdjęcie
              </th>
              <th scope="col" className="px-6 py-4 bg-primary">
                Strona
              </th>
              <th scope="col" className="px-6 py-4 bg-primary">
                Szerokość<br></br>geograficzna
              </th>
              <th scope="col" className="px-6 py-4 bg-primary">
                Długość<br></br>geograficzna
              </th>
              <th scope="col" className="px-6 py-4 bg-primary">
                Action
              </th>
              </thead>
              <tbody classname="bg-transparent">
                {data.map((restaurant) => (
                  editState === restaurant.id ? (
                    <EditRestaurant current={restaurant} data={data} setData={setData} key={restaurant.id} />
                  ) : (
                    <tr className="" key={restaurant.id}>
                      <td className="px-6 py-4 bg-white">{restaurant.token}</td>
                      <td className="px-6 py-4 bg-white">{restaurant.restaurantName}</td>
                      <td className="px-6 py-4 bg-white">{restaurant.restaurantCategory}</td>
                      <td className="px-6 py-4 bg-white">{restaurant.openingHours}</td>
                      <td className="px-6 py-4 bg-white">{restaurant.location}</td>
                      <td className="px-6 py-4 bg-white">{restaurant.phoneNumber}</td>
                      <td className="px-6 py-4 bg-white">
                        <img src={restaurant.photoLink} alt="" className="h-32"></img>
                      </td>
                      <td className="px-6 py-4 bg-white">{restaurant.websiteLink}</td>
                      <td className="px-6 py-4 bg-white">{restaurant.latitude}</td>
                      <td className="px-6 py-4 bg-white">{restaurant.longitude}</td>
                      <td className="px-6 py-4 bg-white">
                        <button
                          type="button"
                          className="edit text-white hover:text-primary bg-primary hover:bg-gray-800 rounded-full px-4 py-2"
                          onClick={() => handleEdit(restaurant.id)}
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  )
                ))}
              </tbody>  
          </table>
        </form>
      </div>
    </div>
  </div>
);

// Presenter
const AdminMenuPresenter = () => {
  const [data, setData] = useState([]);
  const [editState, setEditState] = useState(-1);

  const { handleUpdate, handleEdit } = AdminMenuModel({ data, setData, editState, setEditState });

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      console.log("user.uid",token);
      try {
        const serverIP = process.env.REACT_APP_SERVER_IP
        const response = await axios.get(`${serverIP}/restaurants/token/${token}`);

        if (Array.isArray(response.data)) {
          setData(response.data);
        } else if (response.data && typeof response.data === 'object') {
          setData([response.data]);
          localStorage.setItem('restaurantId', response.data.restaurantId);
        } else {
          console.error('Invalid data structure from API:', response.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);

  return <AdminMenuView data={data} editState={editState} handleUpdate={handleUpdate} handleEdit={handleEdit} setData={setData} />;
};

export default AdminMenuPresenter;

function EditRestaurant({ current, data, setData }) {
  

  function handleToken(event) {
    const token = event.target.value;
    const updatedData = data.map((d) => (d.id === current.id ? { ...d, token: token } : d));
    setData(updatedData);
  }

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
      <td><input type="text" className="w-40 py-4 bg-green-100" onChange={handleToken} value={current.token} name="token" placeholder="Wpisz nazwę" disabled /></td>
      <td><input type="text" className="w-40 py-4 bg-green-100" onChange={handleRestaurantName} value={current.restaurantName} name="restaurantName" placeholder="Wpisz nazwę" /></td>
      <td><input type="text" className="w-40 py-4 bg-green-100" onChange={handleRestaurantCategory} value={current.restaurantCategory} name="restaurantCategory" placeholder="Wpisz kategorię restauracji" /></td>
      <td><input type="text" className="w-40 py-4 bg-green-100" onChange={handleOpeningHours} value={current.openingHours} name="openingHours" placeholder="Podaj godziny otwarcia" /></td>
      <td><input type="text" className="w-40 py-4 bg-green-100 " onChange={handleLocation} value={current.location} name="location" placeholder="Podaj location" /></td>
      <td><input type="text" className="w-40 py-4 bg-green-100" onChange={handlePhoneNumber} value={current.phoneNumber} name="phoneNumber" placeholder="Podaj numer telefonu" /></td>
      <td><input type="text" className="w-40 py-4 bg-green-100" onChange={handlePhotoLink} value={current.photoLink} name="photoLink" placeholder="Podaj link do zdjęcia" /></td>
      <td><input type="text" className="w-40 py-4 bg-green-100" onChange={handleWebsiteLink} value={current.websiteLink} name="websiteLink" placeholder="Podaj link do strony restauracji" /></td>
      <td><input type="text" className="w-40 py-4 bg-green-100" onChange={handleLatitude} value={current.latitude} name="latitude" placeholder="Podaj szerokość geograficzną restauracji" disabled  /></td>
      <td><input type="text" className="w-40 py-4 bg-green-100" onChange={handleLongitude} value={current.longitude} name="longitude" placeholder="Podaj długość geograficzną restauracji" disabled  /></td>
      <td><button type='submit' className='edit text-primary hover:text-white bg-gray-800 hover:bg-primary rounded-full px-4 py-2'>Update</button></td>
    </tr>
  )
}