import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import HomePresenter from "./pages/Home";
import LoginPresenter from "./pages/Login";
import SignupPresenter from "./pages/SignUp";
import RestaurantFormPresenter from "./pages/RestaurantForm";
import AdminMenuPresenter from "./pages/AdminMenu"
import MenuTablePresenter from "./pages/MenuTable";
import Protected from "./components/Protected";
import StolikiTablePresenter from "./pages/StolikiTable";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<HomePresenter/>}/>
        <Route path='/Login' element={<LoginPresenter/>}/>
        <Route path='/SignUp' element={<SignupPresenter/>}/>
          <Route path="/" element={<Protected/>}>
              <Route path='/' element={<Navbar />}/>
              <Route path='/RestaurantForm' element={<RestaurantFormPresenter/>}/>
              <Route path='/AdminMenu' element={<AdminMenuPresenter/>}/>
              <Route path='/MenuTable' element={<MenuTablePresenter/>}/>
              <Route path='/StolikiTable' element={<StolikiTablePresenter/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
