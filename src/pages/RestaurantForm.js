import React from 'react';
import '../App.css';
import logo from '../img/logoLE2.png';
import { Formik } from "formik";
import Dropdown from "./Dropdown"; 

// View
const RestaurantFormView = ({ options }) => (
  <div className="restaurantForm flex flex-col items-center justify-center">
    {/* przerwa */}
    <div className="h-10 w-10"></div>
    
    <p className="text-3xl text-secondary font-semibold text-center">
      Wypełnij formularz poniżej, żeby zacząć z nami współpracować
    </p>

    {/* logo */}
    <a href="/">
      <img src={logo} className="lg:h-36 md:h-28 sm:h-20 sx:h-16 top-4 left-4 absolute" alt="logo" />
    </a>

    {/* przerwa */}
    <div className="h-10 w-10"></div>

    <p className="rounded-full bg-lightSecondary px-12 text-center font-semibold text-primary text-xl">
      Krok 1/2
    </p>

    {/* przerwa */}
    <div className="h-4 w-10"></div>

    <div className="border-primary border-2 rounded-3xl px-12 flex">
      <Formik>
        <div className="form">
          {/* przerwa */}
          <div className="h-8 w-10"></div>

          <input
            type="string"
            name="restaurant-name"
            placeholder="nazwa restauracji"
            className="form-control"
          />
          <br></br>
          <div className="Dropdown text-secondary">
            <Dropdown isMulti placeHolder="Wybierz Rodzaj Restauracji..." options={options} />
          </div>

          <input
            type="time"
            name="hourStart"
            placeholder="10:00"
            className="form-control"
          />
          <input
            type="time"
            name="hourEnd"
            placeholder="10:00"
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
          <label className="">Ilość stolików 2-osobowych: </label>
          <input
            type="number"
            name="2p table"
            placeholder="0"
            className="form-control w-12"
          />
          <br></br>

          {/* przerwa */}
          <div className="h-2 w-10"></div>

          <label className="">Ilość stolików 4-osobowych: </label>
          <input
            type="number"
            name="4p table"
            placeholder="0"
            className="form-control w-12"
          />
          <br></br>

          {/* przerwa */}
          <div className="h-2 w-10"></div>

          <label className="">Ilość stolików 6-osobowych: </label>
          <input 
            type="number"
            name="6p table"
            placeholder="0"
            className="form-control w-12"
          />
          <br></br>

          {/* przerwa */}
          <div className="h-2 w-10"></div>

          <label className="">Ilość stolików 8-osobowych: </label>
          <input
            type="number"
            name="8p table"
            placeholder="0"
            className="form-control w-12"
          />
          <br></br>

          {/* przerwa */}
          <div className="h-2 w-10"></div>

          <a href="SampleMenu">
            <button type="button" className="bg-primary text-black lg:px-12 md:px-10 sm:px-10 sx:px-10 lg:p-4 md:p-3 sm:p-3 sx:p-3 lg:text-xl md:text-lg sm:text-lg sx:text-lg rounded-full font-extrabold">
              Dalej
            </button>
          </a>

          {/* przerwa */}
          <div className="h-11 w-10"></div>
        </div>
      </Formik>
    </div>

    {/* przerwa */}
    <div className="h-20 w-10"></div>
  </div>
);

// Presenter
const RestaurantFormPresenter = () => {
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
  ];

  return <RestaurantFormView options={options} />;
};

export default RestaurantFormPresenter;
