import logo from '../img/logoLE2.png';
import MainPicture from '../img/main-picture.png';
import AppStore from '../img/AppStore.png';
import GooglePlay from '../img/GooglePlay.png';
import '../App.css';


const Home = () => {
  return <div className="text-center h-full">
  <header className="App-header">
    <img src={logo} className="lg:h-36 md:h-28 sm:h-20 sx:h-16 top-4 left-4 absolute" alt="logo" />
  <div className="loginButtons">
    <a href = "/Login">
    <button type= "button" class="bg-primary text-black p-4 text-center flex lg:text-xl md:text-lg sm:text-base sx:text-xs float-right rounded-3xl font-extrabold top-2.5 right-5 absolute">Zaloguj się</button>
    </a>
    <br></br>
    <a href = "/Signup">
    <button type="button" class="bg-primary text-black p-3 text-center flex lg:text-xl md:text-lg sm:text-base sx:text-xs float-right rounded-3xl font-extrabold top-20 right-9 absolute">Zarejestruj się</button>
    </a>
  </div>
  <div className="Download">
    <img src={AppStore} className="lg:h-12 md:h-10 sm:h-8 sx:h-6 top-2.5 right-1/4 inline-flex items-end justify-end"  alt="AppStore" />
    <img src={GooglePlay} className="lg:h-12 md:h-10 sm:h-8 sx:h-6 top-2.5 right-1/8 inline-flex items-end justify-end" alt="GooglePlay" />
  </div>
  </header>
    <div className="lg:text-7xl md:text-6xl sm:text-4xl sx:text-3xl font-bold inline-flex items-center justify-center order-1 ">
      Z nami <br></br>znajdziesz<br></br>wolny stolik
      <img src={MainPicture} className="lg:h-52 md:h-40 sm:h-28 sx:h-20 inline-flex order-2" alt="MainPicture" />
    </div>


    <div className="bg-primary lg:h-1 md:h-three sm:h-0.5 md:w-3/4 sm:w-3/4 sx: inline-flex items-center justify-center"></div>

    <div className="text-center lg:text-2xl md:text-xl sm:text-base">
      Chcesz znaleźć wolne miejsce w<br></br>pobliskiej restauracji? Z nami jest<br></br>to banalnie proste!<br></br>
    </div>

    <div className="text-center lg:text-2xl md:text-xl sm:text-base font-bold">
    Zacznij już teraz.
    </div>
  </div>;
};

export default Home;

