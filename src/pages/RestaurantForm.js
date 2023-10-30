import { Formik } from "formik";
import Dropdown from "./Dropdown"; 

export default function RestaurantForm() {
    const options = [
        { value: "american", label: "Amerykańskie"},
        { value: "asian", label: "Azjatyckie"},
        { value: "middleeastern", label: "Bliskowschodnie"},
        { value: "burgers", label: "Burgery"},
        { value: "desserts", label: "Desery"},
        { value: "european", label: "Europejskie"},
        { value: "indian", label: "Indyjskie"},
        { value: "mexican", label: "Meksykańskie"},
        { value: "pancake", label: "Naleśniki"},
        { value: "pizza", label: "Pizza"},
        { value: "salads", label: "Sałatki"},
        { value: "sushi", label: "Sushi"},
        { value: "breakfast", label: "Śniadanie"},
        { value: "vegetarian", label: "Wegetariańskie"},
        { value: "italian", label: "Włoskie"},
        { value: "healthy_cuisine", label: "Zdrowa kuchnia"},
    ]
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
               <div className="Dropdown">
                    <Dropdown isMulti placeHolder="Wybierz Rodzaj Restauracji..." options={options} />
                </div>
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
               <label>Ilość stolików 2-osobowych:</label>
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
               <a href="SampleMenu">Dalej</a>
            </div>
            </Formik>
        </div>
    )
  };
  
