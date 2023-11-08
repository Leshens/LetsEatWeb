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

            <h2 className='text-center'>Panel administratora</h2>
            <h3 className='text-center'>Dane restauracji</h3>
            <div className='tableWrap'>
                <div>
                    <form onSubmit={handleUpdate}>
                    <table>
                        <thead>
                            <th>Nazwa</th>
                            <th>Rodzaj</th>
                            <th>Godziny Otwarcia</th>
                            <th>Adres</th>
                            <th>Telefon</th>
                            <th>Action</th>
                        </thead>
                    {
                        data.map((current) => (
                            editState === current.id ? <EditRestaurant current={current} data={data} setData={setData} /> :
                            <tr>
                                <td>{current.nazwa}</td>
                                <td>{current.rodzaj}</td>
                                <td>{current.hours}</td>
                                <td>{current.adres}</td>
                                <td>{current.telefon}</td>
                                <td>
                                    <button type= 'button' className='edit' onClick={() => handleEdit(current.id)}>Edit</button>
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
        <tr>
            <td><input type="text" onChange={handleNazwa} value={current.nazwa} name="nazwa" placeholder="Wpisz nazwę"/></td>
            <td><input type="text" onChange={handleRodzaj} value={current.rodzaj} name="rodzaj" placeholder="Wpisz rodzaj restauracji" /></td>
            <td><input type="text" onChange={handleHours} value={current.hours} name="hours" placeholder="Podaj godziny otwarcia" /></td>
            <td><input type="text" onChange={handleAdres} value={current.adres} name="adres" placeholder="Podaj adres" /></td>
            <td><input type="text" onChange={handleTelefon} value={current.telefon} name="telefon" placeholder="Podaj telefon" /></td>
            <td><button type='submit'>Update</button></td>
        </tr>
    )
  }

