import { Formik } from "formik";

export default function SampleMenu() {
    return (
        <div className="sampleMenu">
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
               <a href="AdminMenu">Zakończ</a>
            </div>
            </Formik>
        </div>
    )
  };

  //<button type="submit">Zakończ</button>