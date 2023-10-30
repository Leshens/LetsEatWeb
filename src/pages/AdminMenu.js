import React, { useRef, useState } from 'react'
import Data from '../data.json'
import '../Table.css'

export default function AdminMenu() {
    const [data, setData] = useState(Data)
    return ( 
        <div className='tableWrap'>
            <div>
                <AddRestaurant setData={setData}/>
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
                        <tr>
                            <td>{current.nazwa}</td>
                            <td>{current.rodzaj}</td>
                            <td>{current.godzinyOtwarcia}</td>
                            <td>{current.adres}</td>
                            <td>{current.telefon}</td>
                            <td>
                                <button className='edit'>Edit</button>
                                <button className='delete'>Delete</button>
                            </td>
                        </tr>

                    ))
                }
                </table>
            </div>
        </div>
    )
  }

  function AddRestaurant({setData}) {
    const nazwaRef= useRef()
    const rodzajRef= useRef()
    const hoursRef= useRef()
    const adresRef= useRef()
    const telefonRef= useRef()

    function handleValues(event) {
        event.preventDefault();
        const nazwa =  event.target.elements.nazwa.value;
        const rodzaj =  event.target.elements.rodzaj.value;
        const hours =  event.target.elements.hours.value;
        const adres =  event.target.elements.adres.value;
        const telefon =  event.target.elements.telefon.value;
        const newRestaurant = {
            id: 4,
            nazwa,
            rodzaj,
            hours,
            adres,
            telefon,
        }
        setData(prevData => prevData.concat(newRestaurant))
        nazwaRef.current.value = ""
        rodzajRef.current.value = ""
        hoursRef.current.value = ""
        adresRef.current.value = ""
        telefonRef.current.value = ""
    }
    return(
        <form className='addForm' onSubmit={handleValues}>
            <input type="text" name="nazwa" placeholder="Wpisz nazwę" ref={nazwaRef}/>
            <input type="text" name="rodzaj" placeholder="Wpisz rodzaj restauracji" ref={rodzajRef}/>
            <input type="text" name="hours" placeholder="Podaj godziny otwarcia" ref={hoursRef}/>
            <input type="text" name="adres" placeholder="Podaj adres" ref={adresRef}/>
            <input type="text" name="telefon" placeholder="Podaj telefon" ref={telefonRef}/>
            <button>Add</button>
        </form>
    )
  }

