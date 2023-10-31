import React, { useRef, useState } from 'react'
import Data from '../dishData.json'
import '../Table.css'

export default function MenuTable() {
    const [data, setData] = useState(Data)
    const [editState, setEditState] = useState(-1)
    return ( 
        <div className='tableWrap'>
            <div>
                <AddDish setData={setData}/>
                <form onSubmit={handleUpdate}>
                <table>
                    <thead>
                        <th>Nazwa</th>
                        <th>Cena</th>
                        <th>Zdjęcie</th>
                        <th>Action</th>
                    </thead>
                {
                    data.map((current) => (
                        editState === current.id ? <EditDish current={current} data={data} setData={setData} /> :
                        <tr>
                            <td>{current.nazwa}</td>
                            <td>{current.cena}</td>
                            <td>{current.photo}</td>
                            <td>
                                <button type= 'button' className='edit' onClick={() => handleEdit(current.id)}>Edit</button>
                                <button type= 'button' className='delete' onClick={() => handleDelete(current.id)}>Delete</button>
                            </td>
                        </tr>

                    ))
                }
                </table>
                </form>
            </div>
        </div>
    )

    function handleUpdate(event) {
        event.preventDefault();
        const nazwa = event.target.elements.nazwa.value;
        const cena = event.target.elements.cena.value;
        const photo = event.target.elements.photo.value;
        const updatedData = data.map((d) => d.id === editState ? { ...d, nazwa: nazwa, cena: cena, photo: photo }: d);
        setEditState(-1);
        setData(updatedData);
    }
    

    function handleEdit(id){
        setEditState(id)
    }

    function handleDelete(id){
        const updatedData = data.filter((d) => id !== d.id)
        setData(updatedData)
    }
  }

  function EditDish({current, data, setData}){
        function handleNazwa(event) {
            const nazwa = event.target.value;
            const updatedData = data.map((d) => d.id === current.id ? {...d, nazwa:nazwa} : d)
            setData(updatedData)
        }

        function handleCena(event) {
            const cena = event.target.value;
            const updatedData = data.map((d) => d.id === current.id ? {...d, cena:cena} : d)
            setData(updatedData)
        }

        function handlePhoto(event) {
            const photo = event.target.value;
            const updatedData = data.map((d) => d.id === current.id ? {...d, photo:photo} : d)
            setData(updatedData)
        }

    return(
        <tr>
            <td><input type="text" onChange={handleNazwa} value={current.nazwa} name="nazwa" placeholder="Wpisz nazwę"/></td>
            <td><input type="text" onChange={handleCena} value={current.cena} name="cena" placeholder="Wpisz cenę" /></td>
            <td><input type="text" onChange={handlePhoto} value={current.photo} name="photo" placeholder="Wyślij zdjęcie" /></td>
            <td><button type='submit'>Update</button></td>
        </tr>
    )
  }

  function AddDish({setData}) {
    const nazwaRef= useRef()
    const cenaRef= useRef()
    const photoRef= useRef()

    function handleValues(event) {
        event.preventDefault();
        const nazwa =  event.target.elements.nazwa.value;
        const cena =  event.target.elements.cena.value;
        const photo =  event.target.elements.photo.value;
        const newDish = {
            id: 4,
            nazwa,
            cena,
            photo,
        }
        setData(prevData => prevData.concat(newDish))
        nazwaRef.current.value = ""
        cenaRef.current.value = ""
        photoRef.current.value = ""
    }
    return(
        <form className='addForm' onSubmit={handleValues}>
            <input type="text" name="nazwa" placeholder="Wpisz nazwę" ref={nazwaRef}/>
            <input type="text" name="cena" placeholder="Podaj cenę" ref={cenaRef}/>
            <input type="text" name="photo" placeholder="Dodaj zdjęcie" ref={photoRef}/>
            <button>Add</button>
        </form>
    )
  }

