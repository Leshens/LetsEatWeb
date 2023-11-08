import { Formik } from "formik";

export default function SampleMenu() {
    return (
        <div className="sampleMenu flex flex-col items-center justify-center">
            <p>Podaj 2 przykładowe dania</p>
            <p>Krok 2/2</p>
            <Formik>
            <div className="form">
            <label>Danie nr 1</label>
            <br></br>
               <input
                type="string"
                name="dish"
                placeholder="nazwa"
                className="form-control"
               />
               <br></br>
               <input
                type="number"
                name="dish"
                placeholder="cena"
                className="form-control"
               />
               <label>zł</label>
               <br></br>
               <button type = "button">Dodaj zdjęcie</button>
               <br></br>
               <label>Danie nr 2</label>
               <br></br>
               <input
                type="string"
                name="dish"
                placeholder="nazwa"
                className="form-control"
               />
               <br></br>
               <input
                type="number"
                name="dish"
                placeholder="cena"
                className="form-control"
               />
               <label>zł</label>
               <br></br>
               <button type = "button">Dodaj zdjęcie</button>
               <br></br>
               <a href="AdminMenu">
               <button type= "button" class="bg-primary text-black lg:px-12 md:px-10 sm:px-10 sx:px-10   lg:p-4 md:p-3 sm:p-3 sx:p-3   lg:text-xl md:text-lg sm:text-lg sx:text-lg rounded-full font-extrabold ">Zakończ</button>
               </a>
            </div>
            </Formik>
        </div>
    )
  };

  //<button type="submit">Zakończ</button>