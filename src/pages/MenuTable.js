import React, { useRef, useState } from 'react'
import Data from '../dishData.json'
import '../Table.css'

export default function MenuTable() {
    const [data, setData] = useState(Data)
    const [editState, setEditState] = useState(-1)
    return (
        <div className='body flex flex-col items-center justify-center'>
            {/* przerwa */}
            <div className="h-10 w-10"></div>

        <div className='flex flex-col items-center justify-center order-1'>

            <h2 className='text-center text-3xl text-secondary font-semibold'>Panel administratora</h2>

            {/* przerwa */}
            <div className="h-4 w-10"></div>

            {/* Main text */}
            <div className='inline-flex items-center justify-center'>
            <div className="bg-primary h-three w-28 inline-flex order-1"></div>
            {/* przerwa */}
            <div className="h-10 w-8 inline-flex order-2"></div>
                <h3 className='text-center text-3xl text-secondary font-semibold inline-flex order-3'>
                Menu restauracji 
                </h3>
            {/* przerwa */}
            <div className="h-10 w-8 inline-flex order-4"></div>
            <div className="bg-primary h-three w-28 inline-flex order-5"></div>
            </div>

            {/* przerwa */}
            <div className="h-10 w-10"></div>

        </div>


            <div className='tableWrap flex items-center justify-center h-screen order-3'>
                <div>
                    <AddDish setData={setData}/>
                    <form onSubmit={handleUpdate}>
                    <table className='border-primary border-b-2 border-collapse text-2xl text-center shadow-md'>
                        <thead className='text-secondary border-primary border-b-2'>
                            <th scope="col" class="px-6 py-4 bg-inBetween">Nazwa</th>
                            <th scope="col" class="px-6 py-4 bg-inBetween">Cena</th>
                            <th scope="col" class="px-6 py-4 bg-inBetween">Zdjęcie</th>
                            <th scope="col" class="px-6 py-4 bg-inBetween">Action</th>
                        </thead>
                    {
                        data.map((current) => (
                            editState === current.id ? <EditDish current={current} data={data} setData={setData} /> :
                            <tr>
                                <td class="px-6 py-4 bg-lightSecondary">{current.nazwa}</td>
                                <td class="px-6 py-4 bg-lightSecondary">{current.cena}</td>
                                <td class="px-6 py-4 bg-lightSecondary"><img src={current.photo} alt="" className='h-32'></img></td>
                                <td class="px-6 py-4 bg-lightSecondary">
                                    <button type= 'button' className='edit text-white hover:text-primary bg-primary hover:bg-gray-800 rounded-full px-4 py-2' onClick={() => handleEdit(current.id)}>Edit</button>
                                    <button type= 'button' className='delete text-white hover:text-primary bg-red-500 hover:bg-pink-900 rounded-full px-4 py-2' onClick={() => handleDelete(current.id)}>Delete</button>
                                </td>
                            </tr>

                        ))
                    }
                    </table>

                    {/* przerwa */}
                    <div className="h-10 w-10"></div>

                    </form>
                </div>
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
        <tr className='bg-green-100'>
            <td><input type="text" className="w-52 py-4 bg-green-100" onChange={handleNazwa} value={current.nazwa} name="nazwa" placeholder="Wpisz nazwę"/></td>
            <td><input type="text" className="w-24 py-4 bg-green-100" onChange={handleCena} value={current.cena} name="cena" placeholder="Wpisz cenę" /></td>
            <td><input type="text" className="w-64 py-4 bg-green-100" onChange={handlePhoto} value={current.photo} name="photo" placeholder="Wyślij zdjęcie" /></td>
            <td><button type='submit' className='edit text-primary hover:text-white bg-gray-800 hover:bg-primary rounded-full px-4 py-2'>Update</button></td>
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
        <form className='addForm flex flex-row items-center justify-center order-2' onSubmit={handleValues}>

            {/* przerwa */}
            <div className="h-10 w-10"></div>

            <input type="text" className="w-40 text-center" name="nazwa" placeholder="Wpisz nazwę" ref={nazwaRef}/>
            <input type="text" className="w-24 text-center" name="cena" placeholder="Podaj cenę" ref={cenaRef}/>
            <input type="text" className="w-40 text-center" name="photo" placeholder="Dodaj zdjęcie" ref={photoRef}/>
            <button className='add text-white hover:text-primary bg-primary hover:bg-gray-800 rounded-full px-6 py-2'>Add</button>

            
            {/* przerwa */}
            <div className="h-10 w-10"></div>

        </form>
    )
  }

