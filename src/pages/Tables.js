import { Formik } from "formik";

export default function Tables(){
    return(
        <div className="tables">
        <h2>Panel zarządzania stolikami w restauracji XYZ</h2>
        <h3>Dostępne stoliki:</h3>
        <Formik>
        <div className="form">
            <label>2-osobowe</label>
            <input
                type="number"
                name="2table"
                className="form-control"
                min ="0"
                max = "4"
                placeholder="0"
               />
              <br></br> 
            <label>4-osobowe</label>
            <input
                type="number"
                name="4table"
                className="form-control"
                min ="0"
                max = "2"
                placeholder="0"
               />
                <br></br>
               <label>6-osobowe</label>
            <input
                type="number"
                name="6table"
                className="form-control"
                min ="0"
                max = "0"
                placeholder="0"
               />
                <br></br>
               <label>8-osobowe</label>
            <input
                type="number"
                name="8table"
                className="form-control"
                placeholder="0"
                min ="0"
                max = "3"
               />
            </div>
        </Formik>
    </div>
    )
  };