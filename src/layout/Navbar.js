import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <nav>
              <Link to="/"> Home </Link>
            
              <Link to="/Login"> Zaloguj się </Link>

              <Link to="/SignUp"> Zarejestruj się </Link>

              <Link to="/RestaurantForm"> Formularz Restauracji </Link>

              <Link to="/SampleMenu"> Przykładowe dania </Link>

              <Link to="/Admin"> Panel administratora </Link>
            
        </nav>
      </div>

      <Outlet />
    </>
  )
};

export default Navbar;