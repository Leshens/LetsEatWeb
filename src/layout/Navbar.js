import { Outlet, Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const Navbar = () => {
const navigate = useNavigate();
const user = JSON.parse(localStorage.getItem('user'));
const handleLogOut = async () =>{
  signOut(auth).then(() => {
    // Sign-out successful.
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate("/");
  }).catch((error) => {
    console.error(error);
    console.log(error.code);
    console.log(error.message);
  });

  }
  return (
    <>
      <div className="navbar">
        <nav>
              <Link to="/"> Home </Link>

              <Link to="/Tables"> Panel zarządzania stolikami (old) </Link>

              <Link to="/MenuTable"> Panel zarządzania menu </Link>

              <Link to="/StolikiTable"> Panel zarządzania stolikami </Link>

              <button onClick={handleLogOut}>LogOut</button>

              <h2>{user && user.email}</h2>
            
        </nav>
      </div>

      <Outlet />
    </>
  )
};

export default Navbar;