import '../App.css';
import logo from '../img/logoLE2.png';
import { Formik } from "formik";
import Dropdown from "./Dropdown"; 

export default function RestaurantForm() {
    const options = [
        { value: "ITALIAN", label: "Włoskie"},
        { value: "CHINESE", label: "Chińskie"},
        { value: "MEXICAN", label: "Meksykańskie"},
        { value: "AMERICAN", label: "Amerykańskie"},
        { value: "INDIAN", label: "Indyjskie"},
        { value: "JAPANESE", label: "Japońskie"},
        { value: "FRENCH", label: "Francuskie"},
        { value: "OTHER", label: "Inne"},
    ]
    return (
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
                type="string"
                name="openingHours"
                placeholder="Godziny otwarcia: np.8AM-10PM"
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
                name="phoneNumber"
                placeholder="numer telefonu"
                className="form-control"
               />
               <br></br>
               <input
                type="string"
                name="photoLink"
                placeholder="Link do zdjęcia restauracji"
                className="form-control"
               />
               <br></br>
               <input
                type="string"
                name="websiteLink"
                placeholder="Link do strony internetowej"
                className="form-control"
               />
               <br></br>
               

                {/* przerwa */}
                <div className="h-10 w-10"></div>

               <a href="AdminMenu">
               <button type= "button" class="bg-primary text-black lg:px-12 md:px-10 sm:px-10 sx:px-10   lg:p-4 md:p-3 sm:p-3 sx:p-3   lg:text-xl md:text-lg sm:text-lg sx:text-lg rounded-full font-extrabold ">
                Zakończ</button>
               </a>

               {/* przerwa */}
                <div className="h-11 w-10"></div>

            </div>
            </Formik>

        </div>

        {/* przerwa */}
        <div className="h-20 w-10"></div>
    
    </div>
    )
  };
  
