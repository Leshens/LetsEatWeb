import React, {useState} from 'react'
import Data from '../stolikiData.json'
import '../Table.css'

export default function StolikiTable() {
    const [data, setData] = useState(Data)
    const [editState, setEditState] = useState(-1)
    return (
        <div className='body'>
            <h2>Panel administratora</h2>
            <h3>Stoliki</h3>
            <div className='tableWrap'>
                <div>
                    <form onSubmit={handleUpdate}>
                    <table>
                        <thead>
                            <th>Nazwa</th>
                            <th>2os</th>
                            <th>4os</th>
                            <th>6os</th>
                            <th>8os</th>
                            <th>Action</th>
                        </thead>
                    {
                        data.map((current) => (
                            editState === current.id ? <EditStolik current={current} data={data} setData={setData} /> :
                            <tr>
                                <td>{current.nazwa}</td>
                                <td>{current.twoSeater}</td>
                                <td>{current.fourSeater}</td>
                                <td>{current.sixSeater}</td>
                                <td>{current.eightSeater}</td>
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
            <a href="AdminMenu">Panel zarządzania danymi restauracji</a>
            <a href="MenuTable">Panel zarządzania menu</a>
        </div> 
    )

    function handleUpdate(event) {
        event.preventDefault();
        const nazwa = event.target.elements.nazwa.value;
        const twoSeater = event.target.elements.twoSeater.value;
        const fourSeater = event.target.elements.fourSeater.value;
        const sixSeater = event.target.elements.sixSeater.value;
        const eightSeater = event.target.elements.eightSeater.value;
        const updatedData = data.map((d) => d.id === editState ? { ...d, nazwa: nazwa, twoSeater: twoSeater, fourSeater: fourSeater, sixSeater: sixSeater, eightSeater: eightSeater }: d);
        setEditState(-1);
        setData(updatedData);
    }
    

    function handleEdit(id){
        setEditState(id)
    }
  }

  function EditStolik({current, data, setData}){
        function handleNazwa(event) {
            const nazwa = event.target.value;
            const updatedData = data.map((d) => d.id === current.id ? {...d, nazwa:nazwa} : d)
            setData(updatedData)
        }

        function handleTwoSeater(event) {
            const twoSeater = event.target.value;
            const updatedData = data.map((d) => d.id === current.id ? {...d, twoSeater:twoSeater} : d)
            setData(updatedData)
        }

        function handleFourSeater(event) {
            const fourSeater = event.target.value;
            const updatedData = data.map((d) => d.id === current.id ? {...d, fourSeater:fourSeater} : d)
            setData(updatedData)
        }

        function handleSixSeater(event) {
            const sixSeater = event.target.value;
            const updatedData = data.map((d) => d.id === current.id ? {...d, sixSeater:sixSeater} : d)
            setData(updatedData)
        }

        function handleEightseater(event) {
            const eightSeater = event.target.value;
            const updatedData = data.map((d) => d.id === current.id ? {...d, eightSeater:eightSeater} : d)
            setData(updatedData)
        }
    return(
        <tr>
            <td><input type="text" onChange={handleNazwa} value={current.nazwa} name="nazwa" placeholder="Wpisz nazwę"/></td>
            <td><input type="number" onChange={handleTwoSeater} value={current.twoSeater} name="twoSeater" placeholder="Podaj ilość dwu-osobowych stolików" /></td>
            <td><input type="number" onChange={handleFourSeater} value={current.fourSeater} name="fourSeater" placeholder="Podaj ilość cztero-osobowych stolików " /></td>
            <td><input type="number" onChange={handleSixSeater} value={current.sixSeater} name="sixSeater" placeholder="Podaj ilość sześcio-osobowych stolików" /></td>
            <td><input type="number" onChange={handleEightseater} value={current.eightSeater} name="eightSeater" placeholder="Podaj ośmio-osobowych stolików" /></td>
            <td><button type='submit'>Update</button></td>
        </tr>
    )
  }


