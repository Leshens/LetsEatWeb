import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import EditRestaurant from '../components/EditRestaurant'; // Import the EditRestaurant component
import '../Table.css';

export default function AdminMenu() {
  const [restaurant, setRestaurant] = useState([]);
  const [editState, setEditState] = useState(-1);

  const { restaurantId } = useParams();

  useEffect(() => {
    loadRestaurant();
  }, []);

  const onSubmit = async (index, editedData) => {
    const authToken = '4435615320'; // Replace with your actual authentication token
  
    try {
      await axios.put(
        `http://localhost:8080/updateRestaurant/${index}`,
        editedData,
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`, // Include your token here
          },
        }
      );
  
      setEditState(-1);
      loadRestaurant(); // Refresh the data after update
    } catch (error) {
      console.error('Error updating restaurant:', error);
    }
  };

  const loadRestaurant = async () => {
    const result = await axios.get('http://localhost:8080/restaurants');
    setRestaurant(result.data);
  };

  return (
    <div className="body">
       {/* przerwa */}
       <div className="h-10 w-10"></div>

<div className='flex flex-col items-center justify-center'>

    <h2 className='text-center text-3xl text-secondary font-semibold'>Panel administratora</h2>

    {/* przerwa */}
    <div className="h-4 w-10"></div>

    {/* Main text */}
    <div className='inline-flex items-center justify-center'>
    <div className="bg-primary h-three w-28 inline-flex order-1"></div>
    {/* przerwa */}
    <div className="h-10 w-8 inline-flex order-2"></div>
        <h3 className='text-center text-3xl text-secondary font-semibold inline-flex order-3'>
        Dane restauracji 
        </h3>
    {/* przerwa */}
    <div className="h-10 w-8 inline-flex order-4"></div>
    <div className="bg-primary h-three w-28 inline-flex order-5"></div>
    </div>

</div>

      <div className="tableWrap flex items-center justify-center h-screen">
        <div>
          <table className="border-primary border-b-2 border-collapse text-2xl text-center shadow-md">
            <thead className="text-secondary border-primary border-b-2">
            {/* <th scope="col" class="px-6 py-4 bg-inBetween">ID</th> */}
                            <th scope="col" class="px-6 py-4 bg-inBetween">Nazwa</th>
                            <th scope="col" class="px-6 py-4 bg-inBetween">Rodzaj</th>
                            {/* <th scope="col" class="px-6 py-4 bg-inBetween">Godziny<br></br>Otwarcia</th> */}
                            <th scope="col" class="px-6 py-4 bg-inBetween">Adres</th>
                            {/* <th scope="col" class="px-6 py-4 bg-inBetween">Telefon</th> */}
                            <th scope="col" class="px-6 py-4 bg-inBetween">Action</th>
            </thead>
            <tbody>
              {restaurant.map((restaurant, index) => (
                <React.Fragment key={index}>
                  {editState === index ? (
                    <EditRestaurant
                      current={restaurant}
                      index={index}
                      onSubmit={editedData => onSubmit(index, editedData)}
                    />
                  ) : (
                    <tr className="">
                       {/* <th scope="row" key={index}>{index+1}</th> */}
                                <td class="px-6 py-4 bg-lightSecondary">{restaurant.restaurantName}</td>
                                <td class="px-6 py-4 bg-lightSecondary">{restaurant.restaurantCategory}</td>
                                {/* <td class="px-6 py-4 bg-lightSecondary">{current.hours}</td> */}
                                <td class="px-6 py-4 bg-lightSecondary">{restaurant.location}</td>
                                {/* <td class="px-6 py-4 bg-lightSecondary">{current.telefon}</td> */}
                      <td className="px-6 py-4 bg-lightSecondary">
                        <button type="button" className="edit text-white hover:text-primary bg-primary hover:bg-gray-800 rounded-full px-4 py-2" onClick={() => setEditState(index)}>Edit</button>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <a href="StolikiTable">Panel zarządzania stolikami</a>
      <a href="MenuTable">Panel zarządzania menu</a>
    </div>
  );
}
