import { Formik } from "formik";

export default function SampleMenu() {
    return (
        <div className="sampleMenu flex flex-col items-center justify-center">

            
                {/* przerwa */}
                <div className="h-11 w-10"></div>

            <p className="text-3xl text-secondary font-semibold text-center">
                Podaj 2 przykładowe dania
            </p>

            
                {/* przerwa */}
                <div className="h-11 w-10"></div>

            <p className="rounded-full bg-lightSecondary px-12 text-center font-semibold text-primary text-xl">
                Krok 2/2
            </p>

            
                {/* przerwa */}
                <div className="h-8 w-10"></div>

        <div className="border-primary border-2 rounded-3xl px-12 flex">

            <Formik>
            <div className="form">

                {/* przerwa */}
                <div className="h-11 w-10"></div>

            <label className="text-secondary">Danie nr 1</label>
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
               <label className="text-secondary">zł</label>
               <br></br>
               <button type = "button">Dodaj zdjęcie</button>

                {/* przerwa */}
                <div className="h-4 w-10"></div>

               <br></br>
               <label className="text-secondary">Danie nr 2</label>
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
               <label className="text-secondary">zł</label>
               <br></br>
               <button type = "button">Dodaj zdjęcie</button>

                {/* przerwa */}
                <div className="h-4 w-10"></div>

               <br></br>
               <a href="AdminMenu">
               <button type= "button" class="bg-primary text-black lg:px-12 md:px-10 sm:px-10 sx:px-10   lg:p-4 md:p-3 sm:p-3 sx:p-3   lg:text-xl md:text-lg sm:text-lg sx:text-lg rounded-full font-extrabold ">Zakończ</button>
               </a>

               {/* przerwa */}
               <div className="h-11 w-10"></div>

            </div>
            </Formik>

        </div>
        </div>
    )
  };

  //<button type="submit">Zakończ</button>