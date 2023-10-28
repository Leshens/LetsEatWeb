import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <nav>
              <Link to="/"> Home </Link>

              <Link to="/RestaurantForm"> Formularz Restauracji </Link>

              <Link to="/SampleMenu"> Przykładowe dania </Link>

              <Link to="/AdminMenu"> Panel administratora </Link>

              <Link to="/Tables"> Panel zarządzania stolikami </Link>
            
        </nav>
      </div>

      <Outlet />
    </>
  )
};

export default Navbar;