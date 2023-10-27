import { Formik } from "formik";

export default function RestaurantForm() {
    return (
        <div className="restaurantForm">
            <p>Wypełnij formularz poniżej, żeby zacząć z nami współpracować</p>
            <p>Krok 1/2</p>
            <Formik>
            <div className="form">
               <input
                type="string"
                name="restaurant-name"
                placeholder="nazwa restauracji"
                className="form-control"
               />
               <br></br>
               <input
                type="string"
                name="restaurant-type"
                placeholder="rodzaj restauracji"
                className="form-control"
               />
               <br></br>
               <input
                type="string"
                name="hours"
                placeholder="godzina otwarcia"
                className="form-control"
               />
               <br></br>
               <input
                type="string"
                name="adress"
                placeholder="adres"
                className="form-control"
               />
               <br></br>
               <input
                type="string"
                name="telephone"
                placeholder="telefon"
                className="form-control"
               />
               <br></br>
               <label>Ilość stolików 2-osobowych :</label>
               <input
                type="number"
                name="2p table"
                placeholder="0"
                className="form-control"
               />
               <br></br>
               <label>Ilość stolików 4-osobowych:</label>
               <input
                type="number"
                name="4p table"
                placeholder="0"
                className="form-control"
               />
               <br></br>
               <label>Ilość stolików 6-osobowych:</label>
               <input
                type="number"
                name="6p table"
                placeholder="0"
                className="form-control"
               />
               <br></br>
               <label>Ilość stolików 8-osobowych:</label>
               <input
                type="number"
                name="8p table"
                placeholder="0"
                className="form-control"
               />
               <br></br>
               <button type="submit">Dalej</button>
            </div>
            </Formik>
        </div>
    )
  };
  
