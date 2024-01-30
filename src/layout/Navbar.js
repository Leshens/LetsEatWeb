import React, { useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import logo from '../img/logoLE2.png';
import menu from '../img/menu.png';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  const handleLogOut = async () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      localStorage.removeItem('restaurantId');
      setUser(null);
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
        <nav className="flex items-center justify-between p-5">
          {/* logo */}
          <a href = "/">
          <img src={logo} className="lg:h-36 md:h-28 sm:h-20 sx:h-16 top-4 left-4 absolute" alt="logo" />
          </a>

          {/* Dropdown Menu */}
          <div className=" group absolute left-44 top-4">
          {user && (
            <img src={menu}
              onClick={() => setMenuOpen(!isMenuOpen)}
              className="text-black font-bold focus:outline-none group-hover:text-gray-300 h-10 w-10"
              alt="menu">
            </img>
          )}

            {isMenuOpen && (
              <div className="absolute space-y-2 bg-lightSecondary border-2 border-primary rounded top-12">
                <Link to="/MenuTable" className="block hover:bg-inBetween px-10 py-2 text-secondary font-bold whitespace-nowrap">Menu</Link>
                <Link to="/AdminMenu" className="block hover:bg-inBetween px-10 py-2 text-secondary font-bold whitespace-nowrap">Dane restauracji</Link>
                <Link to="/StolikiTable" className="block hover:bg-inBetween px-10 py-2 text-secondary font-bold whitespace-nowrap">Stoliki</Link>
              </div>
            )}
          </div>
          
            {user && (
            <button onClick={handleLogOut} className="bg-primary hover:bg-teal-500 text-black lg:px-12 md:px-10 sm:px-8 sx:px-6  lg:p-4 md:p-3 sm:p-2 sx:p-1.5 text-center flex lg:text-xl md:text-lg sm:text-base sx:text-xs float-right rounded-full font-extrabold top-2.5 right-5 absolute">LogOut</button>
            )}

            {user && (
            <h2 className="text-primary font-semibold top-6 right-60 absolute">{user && user.email}</h2>
            )}

        </nav>
      </div>

      <Outlet />
    </>
  );
};

export default Navbar;
