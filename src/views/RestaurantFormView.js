// RestaurantFormView.js
import React from 'react';
import '../App.css';
import logo from '../img/logoLE2.png';
import Dropdown from '../pages/Dropdown'
import { Formik, Field } from 'formik';

const RestaurantFormView = ({ formData, updateFormData, handleNextClick }) => {
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

  return (
    <div className="restaurantForm flex flex-col items-center justify-center">
      <div className="h-10 w-10"></div>

      <p className="text-3xl text-secondary font-semibold text-center">
        Wypełnij formularz poniżej, żeby zacząć z nami współpracować
      </p>

      <a href="/">
        <img src={logo} className="lg:h-36 md:h-28 sm:h-20 sx:h-16 top-4 left-4 absolute" alt="logo" />
      </a>

      <div className="h-10 w-10"></div>

      <p className="rounded-full bg-lightSecondary px-12 text-center font-semibold text-primary text-xl">
        Krok 1/2
      </p>

      <div className="border-primary border-2 rounded-3xl px-12 flex">
        <Formik initialValues={formData} onSubmit={() => {}}>
          <div className="form">
            <div className="h-8 w-10"></div>

            <Field
              type="string"
              name="restaurantName"
              placeholder="nazwa restauracji"
              className="form-control"
            />
            <br></br>

            <div className="Dropdown text-secondary">
              <Dropdown isMulti placeHolder="Wybierz Rodzaj Restauracji..." options={options} />
            </div>

            <Field
              type="time"
              name="hourStart"
              placeholder="10:00"
              className="form-control"
            />
            <Field
              type="time"
              name="hourEnd"
              placeholder="10:00"
              className="form-control"
            />
            <br></br>

            <Field
              type="string"
              name="address"
              placeholder="adres"
              className="form-control"
            />
            <br></br>

            <Field
              type="string"
              name="telephone"
              placeholder="telefon"
              className="form-control"
            />
            <br></br>

            <label className="">Ilość stolików 2-osobowych: </label>
            <Field
              type="number"
              name="tables.2p"
              placeholder="0"
              className="form-control w-12"
            />
            <br></br>

            <div className="h-2 w-10"></div>

            <label className="">Ilość stolików 4-osobowych: </label>
            <Field
              type="number"
              name="tables.4p"
              placeholder="0"
              className="form-control w-12"
            />
            <br></br>

            <div className="h-2 w-10"></div>

            <label className="">Ilość stolików 6-osobowych: </label>
            <Field
              type="number"
              name="tables.6p"
              placeholder="0"
              className="form-control w-12"
            />
            <br></br>

            <label className="">Ilość stolików 8-osobowych: </label>
            <Field
              type="number"
              name="tables.8p"
              placeholder="0"
              className="form-control w-12"
            />
            <br></br>

            <div className="h-10 w-10"></div>

            <a href="SampleMenu">
              <button
                type="button"
                className="bg-primary text-black lg:px-12 md:px-10 sm:px-10 sx:px-10 lg:p-4 md:p-3 sm:p-3 sx:p-3 lg:text-xl md:text-lg sm:text-lg sx:text-lg rounded-full font-extrabold"
                onClick={handleNextClick}
              >
                Dalej
              </button>
            </a>

            <div className="h-11 w-10"></div>
          </div>
        </Formik>
      </div>

      <div className="h-20 w-10"></div>
    </div>
  );
};

export default RestaurantFormView;
