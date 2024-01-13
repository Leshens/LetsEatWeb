import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../layout/Navbar';
import '../App.css';
import AppStore from '../img/AppStore.png';
import GooglePlay from '../img/GooglePlay.png';
import MainPicture from '../img/main-picture.png';

// View
const HomeView = ({ onLoginClick, onSignupClick }) => (
  <div className="text-center h-full">
    <Navbar />

    {/* przerwa */}
    <div className="h-2 w-10"></div>

    {/* przyciski pobierania */}
    <div className="Download inline-flex items-center justify-center">
      <img src={AppStore} className="lg:h-12 md:h-10 sm:h-8 sx:h-6" alt="AppStore" />
      <div className="lg:w-10 md:w-10 sm:w-8 sx:w-6"></div>
      <img src={GooglePlay} className="lg:h-12 md:h-10 sm:h-8 sx:h-6" alt="GooglePlay" />
    </div>

    <header className="App-header">
      {/* przerwa żeby download byl dalej od main textu */}
      <div className="h-24 w-24"></div>

      {/* przyciski logowania/rejestrowania */}
      <div className="loginButtons">
      <a href = "/Login">
        <button
          type="button"
          className="bg-primary hover:bg-teal-500 text-black lg:px-12 md:px-10 sm:px-8 sx:px-6  lg:p-4 md:p-3 sm:p-2 sx:p-1.5 text-center flex lg:text-xl md:text-lg sm:text-base sx:text-xs float-right rounded-full font-extrabold top-2.5 right-5 absolute"
          onClick={onLoginClick}
        >
         
          Zaloguj się
        </button>
        </a>
        <br />
        <a href = "/Signup">
        <button
          type="button"
          className="bg-primary hover:bg-teal-500 text-black lg:p-3 md:p-2 sm:p-1.5 sx:p-1 text-center flex lg:text-xl md:text-lg sm:text-base sx:text-xs float-right rounded-full font-extrabold lg:top-20 md:top-20 sm:top-16 sx:top-12  right-8 absolute"
          onClick={onSignupClick}
        >
          Zarejestruj się
        </button>
        </a>
      </div>
    </header>

    {/* main text */}
    <div className="lg:text-7xl md:text-6xl sm:text-4xl sx:text-3xl font-bold inline-flex items-center justify-center order-1 ">
      Z nami <br></br>znajdziesz<br></br>wolny stolik
      <img src={MainPicture} className="lg:h-52 md:h-40 sm:h-28 sx:h-20 inline-flex order-2" alt="MainPicture" />
    </div>

    <div className="bg-primary lg:h-1 md:h-three sm:h-three sx:h-three  lg:w-3/4 md:w-3/4 sm:w-3/4 sx:w-3/4 inline-flex items-center justify-center"></div>

    {/* przerwa żeby linia była dalej od dolnego textu */}
    <div className="h-20 w-20"></div>

    {/* dolny text */}
    <div className="text-center lg:text-2xl md:text-xl sm:text-base">
      Chcesz znaleźć wolne miejsce w<br></br>pobliskiej restauracji? Z nami jest<br></br>to banalnie proste!<br></br>
    </div>
    <div className="text-center lg:text-2xl md:text-xl sm:text-base">
      <Link to="/SignUp" className="text-black hover:text-primary font-extrabold">
        Zacznij już teraz.
      </Link>
    </div>
  </div>
);

// Presenter
class HomePresenter extends React.Component {
  handleLoginClick = () => {
    // Handle login click logic
    // You can use this.props.history.push('/Login') to navigate to the login page
  };

  handleSignupClick = () => {
    // Handle signup click logic
    // You can use this.props.history.push('/Signup') to navigate to the signup page
  };

  render() {
    return <HomeView onLoginClick={this.handleLoginClick} onSignupClick={this.handleSignupClick} />;
  }
}

export default HomePresenter;
