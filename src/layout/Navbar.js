import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <nav>
              <Link to="/"> Home </Link>

              <Link to="/Tables"> Panel zarządzania stolikami (old) </Link>

              <Link to="/MenuTable"> Panel zarządzania menu </Link>

              <Link to="/StolikiTable"> Panel zarządzania stolikami </Link>
            
        </nav>
      </div>

      <Outlet />
    </>
  )
};

export default Navbar;