import '../App.css';
import logo from '../img/logoLE2.png';
import { Link } from 'react-router-dom';
import { Formik } from "formik";
import Dropdown from "./Dropdown";
import axios from 'axios';

// Model
const RestaurantFormModel = {
  handleFormSubmit: async (values) => {
    const token = localStorage.getItem('token');
    try {
      const googleIp = process.env.REACT_APP_GOOGLE_GEOCODE_IP;
      const geocodingResponse = await axios.get(`${googleIp}`, {
        params: {
          address: values.location,
          key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        },
      });

      const { results } = geocodingResponse.data;
      const locationCoordinates = results[0]?.geometry?.location;

      if (locationCoordinates) {
        values.latitude = locationCoordinates.lat;
        values.longitude = locationCoordinates.lng;

        // Dodajemy token jako część body zapytania
        values.token = token;

        const serverIP = process.env.REACT_APP_SERVER_IP;
        const response = await axios.post(`${serverIP}/restaurants`, values);

        console.log(response.data);
        console.log('Restaurant added successfully:', response.data);
      } else {
        console.error('Unable to get coordinates from the address');
      }
    } catch (error) {
      console.error('Error adding restaurant:', error);
    }
  },
};

// View
const RestaurantFormView = ({ handleFormSubmit }) => {
  const options = [
    { value: "ITALIAN", label: "Włoskie" },
    { value: "CHINESE", label: "Chińskie" },
    { value: "MEXICAN", label: "Meksykańskie" },
    { value: "AMERICAN", label: "Amerykańskie" },
    { value: "INDIAN", label: "Indyjskie" },
    { value: "JAPANESE", label: "Japońskie" },
    { value: "FRENCH", label: "Francuskie" },
    { value: "OTHER", label: "Inne" },
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

      <div className="h-4 w-10"></div>

      <div className="border-primary border-2 rounded-3xl px-12 flex">
        <Formik
          initialValues={{
            'restaurantName': '',
            'restaurantCategory': '',
            'openingHours': '',
            'location': '',
            'phoneNumber': '',
            'photoLink': '',
            'websiteLink': '',
          }}
          onSubmit={handleFormSubmit}
        >
          {({ values, handleChange, handleSubmit }) => (
            <div className="form">
              <div className="h-8 w-10"></div>

              <input
                type="string"
                name="restaurantName"
                placeholder="nazwa restauracji"
                className="form-control bg-transparent text-xl w-52 focus:outline-none focus:outline-offset-0 focus:border-primary focus:border-3 focus:rounded focus:shadow-primaryShadow"
                value={values['restaurantName']}
                onChange={handleChange}
              />
              <br></br>
              <div className="Dropdown text-secondary">
                <Dropdown
                  placeHolder="Wybierz Rodzaj Restauracji..."
                  options={options}
                  value={values['restaurantCategory']}
                  onChange={(selectedValue) => {
                    handleChange({ target: { name: 'restaurantCategory', value: selectedValue } });
                  }}
                />
              </div>
              <br></br>
              <input
                type="string"
                name="openingHours"
                placeholder="Godziny otwarcia"
                className="form-control bg-transparent text-xl w-52 focus:outline-none focus:outline-offset-0 focus:border-primary focus:border-3 focus:rounded focus:shadow-primaryShadow"
                value={values['openingHours']}
                onChange={handleChange}
              />
              <br></br>
              <input
                type="string"
                name="location"
                placeholder="adres"
                className="form-control bg-transparent text-xl w-52 focus:outline-none focus:outline-offset-0 focus:border-primary focus:border-3 focus:rounded focus:shadow-primaryShadow"
                value={values['location']}
                onChange={handleChange}
              />
              <br></br>
              <input
                type="string"
                name="phoneNumber"
                placeholder="numer telefonu"
                className="form-control bg-transparent text-xl w-52 focus:outline-none focus:outline-offset-0 focus:border-primary focus:border-3 focus:rounded focus:shadow-primaryShadow"
                value={values['phoneNumber']}
                onChange={handleChange}
              />
              <br></br>
              <input
                type="string"
                name="photoLink"
                placeholder="Link do zdjęcia restauracji"
                className="form-control bg-transparent text-xl w-52 focus:outline-none focus:outline-offset-0 focus:border-primary focus:border-3 focus:rounded focus:shadow-primaryShadow"
                value={values['photoLink']}
                onChange={handleChange}
              />
              <br></br>
              <input
                type="string"
                name="websiteLink"
                placeholder="Link do strony internetowej"
                className="form-control bg-transparent text-xl w-52 focus:outline-none focus:outline-offset-0 focus:border-primary focus:border-3 focus:rounded focus:shadow-primaryShadow"
                value={values['websiteLink']}
                onChange={handleChange}
              />
              <br></br>

              <div className="h-10 w-10"></div>

              <button
                type="button"
                className="bg-primary text-black lg:px-12 md:px-10 sm:px-10 sx:px-10 lg:p-4 md:p-3 sm:p-3 sx:p-3 lg:text-xl md:text-lg sm:text-lg sx:text-lg rounded-full font-extrabold"
                onClick={handleSubmit}
              >
                <Link to="/AdminMenu" style={{ textDecoration: 'none', color: 'inherit' }}>
                  Zakończ
                </Link>
              </button>

              <div className="h-11 w-10"></div>
            </div>
          )}
        </Formik>
      </div>

      <div className="h-20 w-10"></div>
    </div>
  );
};

// Presenter
const RestaurantFormPresenter = () => {
  const handleFormSubmit = RestaurantFormModel.handleFormSubmit;

  return <RestaurantFormView handleFormSubmit={handleFormSubmit} />;
};

export default RestaurantFormPresenter;
