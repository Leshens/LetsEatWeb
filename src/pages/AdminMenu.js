import React, {useEffect, useState } from 'react'
import Data from '../restaurantData.json'
import '../Table.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function AdminMenu() {
    const [restaurant, setRestaurant] = useState([])
    const [data, setData] = useState(Data)
    const [editState, setEditState] = useState(-1)

    const {restaurantId} = useParams()

    useEffect(() => {
        loadRestaurant();
    },[]);

    const onSubmit=async(e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:8080/updateRestaurant/${restaurantId}`,restaurant)
    }

    const loadRestaurant=async()=>{
        const result= await axios.get("http://localhost:8080/restaurants")
        setRestaurant(result.data);
    }
    
    return ( 
        <div className='body'>
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
            

            <div className='tableWrap flex items-center justify-center h-screen'>
                <div>
                    <form onSubmit={handleUpdate}>
                    <table className='border-primary border-b-2 border-collapse text-2xl text-center shadow-md'>
                        <thead className='text-secondary border-primary border-b-2'>
                            <th scope="col" class="px-6 py-4 bg-inBetween">ID</th>
                            <th scope="col" class="px-6 py-4 bg-inBetween">Nazwa</th>
                            <th scope="col" class="px-6 py-4 bg-inBetween">Rodzaj</th>
                            {/* <th scope="col" class="px-6 py-4 bg-inBetween">Godziny<br></br>Otwarcia</th> */}
                            <th scope="col" class="px-6 py-4 bg-inBetween">Adres</th>
                            {/* <th scope="col" class="px-6 py-4 bg-inBetween">Telefon</th> */}
                            <th scope="col" class="px-6 py-4 bg-inBetween">Action</th>
                        </thead>
                    {
                        // data.map((current) => (
                        //     
                        //     {
                                restaurant.map((restaurant,index)=>(
                                editState === restaurant.restaurantId ? <EditRestaurant restaurant={restaurant} data={restaurant} setData={setRestaurant} /> :
                                <tr className=''>
                                <th scope="row" key={index}>{index+1}</th>
                                <td class="px-6 py-4 bg-lightSecondary">{restaurant.restaurantName}</td>
                                <td class="px-6 py-4 bg-lightSecondary">{restaurant.restaurantCategory}</td>
                                {/* <td class="px-6 py-4 bg-lightSecondary">{current.hours}</td> */}
                                <td class="px-6 py-4 bg-lightSecondary">{restaurant.location}</td>
                                {/* <td class="px-6 py-4 bg-lightSecondary">{current.telefon}</td> */}
                                <td class="px-6 py-4 bg-lightSecondary">
                                    <button type= 'button' className='edit text-white hover:text-primary bg-primary hover:bg-gray-800 rounded-full px-4 py-2' onClick={() => onSubmit( restaurant.restaurantId)}>Edit</button>
                                </td>
                            </tr>

                                ))
                    //}
                            

                      //))
                    }
                    </table>
                    </form>
                </div>
            </div>
            <a href="StolikiTable">Panel zarządzania stolikami</a>
            <a href="MenuTable">Panel zarządzania menu</a>
        </div>
    )

    async function handleUpdate(event) {
        event.preventDefault();
        await axios.put('http://localhost:8080/updateRestaurant/${id}',);
        const restaurantName = event.target.elements.restaurantName.value;
        const restaurantCategory = event.target.elements.restaurantCategory.value;
        // const hours = event.target.elements.hours.value;
        const location = event.target.elements.location.value;
        // const telefon = event.target.elements.telefon.value;
        const updatedData = data.map((d) => d.id === editState ? { ...d, restaurantName: restaurantName, restaurantCategory: restaurantCategory, 
            // hours: hours, 
            location: location, 
            // telefon: telefon
         }: d);
        setEditState(-1);
        setData(updatedData);
    }
    

    function handleEdit(id){
        setEditState(id)
    }
  }

  function EditRestaurant({current, data, setData}){
        function handleNazwa(event) {
            const restaurantName = event.target.value;
            const updatedData = data.map((d) => d.id === current.id ? {...d, restaurantName:restaurantName} : d)
            setData(updatedData)
        }

        function handleRodzaj(event) {
            const restaurantCategory = event.target.value;
            const updatedData = data.map((d) => d.id === current.id ? {...d, restaurantCategory:restaurantCategory} : d)
            setData(updatedData)
        }

        // function handleHours(event) {
        //     const hours = event.target.value;
        //     const updatedData = data.map((d) => d.id === current.id ? {...d, hours:hours} : d)
        //     setData(updatedData)
        // }

        function handleAdres(event) {
            const location = event.target.value;
            const updatedData = data.map((d) => d.id === current.id ? {...d, location:location} : d)
            setData(updatedData)
        }

        // function handleTelefon(event) {
        //     const telefon = event.target.value;
        //     const updatedData = data.map((d) => d.id === current.id ? {...d, telefon:telefon} : d)
        //     setData(updatedData)
        // }
    return(
        <tr className='bg-green-100'>
            <td><input type="text" className="w-40 py-4 bg-green-100" onChange={handleNazwa} value={current.restaurantName} name="restaurantName" placeholder="Wpisz nazwę"/></td>
            <td><input type="text" className="w-40 py-4 bg-green-100" onChange={handleRodzaj} value={current.restaurantCategory} name="restaurantCategory" placeholder="Wpisz rodzaj restauracji" /></td>
            {/* <td><input type="text" className="w-40 py-4 bg-green-100" onChange={handleHours} value={current.hours} name="hours" placeholder="Podaj godziny otwarcia" /></td> */}
            <td><input type="text" className="w-40 py-4 bg-green-100 " onChange={handleAdres} value={current.location} name="location" placeholder="Podaj adres" /></td>
            {/* <td><input type="text" className="w-40 py-4 bg-green-100" onChange={handleTelefon} value={current.telefon} name="telefon" placeholder="Podaj telefon" /></td> */}
            <td><button type='submit' className='edit text-primary hover:text-white bg-gray-800 hover:bg-primary rounded-full px-4 py-2'>Update</button></td>
        </tr>
    )
  }

