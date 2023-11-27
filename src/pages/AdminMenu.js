import React, {useState } from 'react'
import Data from '../restaurantData.json'
import '../Table.css'

export default function AdminMenu() {
    const [data, setData] = useState(Data)
    const [editState, setEditState] = useState(-1)
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
                            <th scope="col" class="px-6 py-4 bg-inBetween">Nazwa</th>
                            <th scope="col" class="px-6 py-4 bg-inBetween">Rodzaj</th>
                            <th scope="col" class="px-6 py-4 bg-inBetween">Godziny<br></br>Otwarcia</th>
                            <th scope="col" class="px-6 py-4 bg-inBetween">Adres</th>
                            <th scope="col" class="px-6 py-4 bg-inBetween">Telefon</th>
                            <th scope="col" class="px-6 py-4 bg-inBetween">Action</th>
                        </thead>
                    {
                        data.map((current) => (
                            editState === current.id ? <EditRestaurant current={current} data={data} setData={setData} /> :
                            <tr className=''>
                                <td class="px-6 py-4 bg-lightSecondary">{current.nazwa}</td>
                                <td class="px-6 py-4 bg-lightSecondary">{current.rodzaj}</td>
                                <td class="px-6 py-4 bg-lightSecondary">{current.hours}</td>
                                <td class="px-6 py-4 bg-lightSecondary">{current.adres}</td>
                                <td class="px-6 py-4 bg-lightSecondary">{current.telefon}</td>
                                <td class="px-6 py-4 bg-lightSecondary">
                                    <button type= 'button' className='edit text-white hover:text-primary bg-primary hover:bg-gray-800 rounded-full px-4 py-2' onClick={() => handleEdit(current.id)}>Edit</button>
                                </td>
                            </tr>

                        ))
                    }
                    </table>
                    </form>
                </div>
            </div>
            <a href="StolikiTable">Panel zarządzania stolikami</a>
            <a href="MenuTable">Panel zarządzania menu</a>
        </div>
    )

    function handleUpdate(event) {
        event.preventDefault();
        const nazwa = event.target.elements.nazwa.value;
        const rodzaj = event.target.elements.rodzaj.value;
        const hours = event.target.elements.hours.value;
        const adres = event.target.elements.adres.value;
        const telefon = event.target.elements.telefon.value;
        const updatedData = data.map((d) => d.id === editState ? { ...d, nazwa: nazwa, rodzaj: rodzaj, hours: hours, adres: adres, telefon: telefon }: d);
        setEditState(-1);
        setData(updatedData);
    }
    

    function handleEdit(id){
        setEditState(id)
    }
  }

  function EditRestaurant({current, data, setData}){
        function handleNazwa(event) {
            const nazwa = event.target.value;
            const updatedData = data.map((d) => d.id === current.id ? {...d, nazwa:nazwa} : d)
            setData(updatedData)
        }

        function handleRodzaj(event) {
            const rodzaj = event.target.value;
            const updatedData = data.map((d) => d.id === current.id ? {...d, rodzaj:rodzaj} : d)
            setData(updatedData)
        }

        function handleHours(event) {
            const hours = event.target.value;
            const updatedData = data.map((d) => d.id === current.id ? {...d, hours:hours} : d)
            setData(updatedData)
        }

        function handleAdres(event) {
            const adres = event.target.value;
            const updatedData = data.map((d) => d.id === current.id ? {...d, adres:adres} : d)
            setData(updatedData)
        }

        function handleTelefon(event) {
            const telefon = event.target.value;
            const updatedData = data.map((d) => d.id === current.id ? {...d, telefon:telefon} : d)
            setData(updatedData)
        }
    return(
        <tr className='bg-green-100'>
            <td><input type="text" className="w-40 py-4 bg-green-100" onChange={handleNazwa} value={current.nazwa} name="nazwa" placeholder="Wpisz nazwę"/></td>
            <td><input type="text" className="w-40 py-4 bg-green-100" onChange={handleRodzaj} value={current.rodzaj} name="rodzaj" placeholder="Wpisz rodzaj restauracji" /></td>
            <td><input type="text" className="w-40 py-4 bg-green-100" onChange={handleHours} value={current.hours} name="hours" placeholder="Podaj godziny otwarcia" /></td>
            <td><input type="text" className="w-40 py-4 bg-green-100 " onChange={handleAdres} value={current.adres} name="adres" placeholder="Podaj adres" /></td>
            <td><input type="text" className="w-40 py-4 bg-green-100" onChange={handleTelefon} value={current.telefon} name="telefon" placeholder="Podaj telefon" /></td>
            <td><button type='submit' className='edit text-primary hover:text-white bg-gray-800 hover:bg-primary rounded-full px-4 py-2'>Update</button></td>
        </tr>
    )
  }

