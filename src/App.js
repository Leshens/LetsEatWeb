import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import RestaurantForm from "./pages/RestaurantForm";
import SampleMenu from "./pages/SampleMenu";
import AdminMenu from "./pages/AdminMenu"
import Tables from "./pages/Tables";
import MenuTable from "./pages/MenuTable";
import StolikiTable from "./pages/StolikiTable";


export default function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="/" element={<Home/>}/>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/SignUp' element={<SignUp/>}/>
            <Route path='/RestaurantForm' element={<RestaurantForm/>}/>
            <Route path='/SampleMenu' element={<SampleMenu/>}/>
            <Route path='/AdminMenu' element={<AdminMenu/>}/>
            <Route path='/Tables' element={<Tables/>}/>
            <Route path='/MenuTable' element={<MenuTable/>}/>
            <Route path='/StolikiTable' element={<StolikiTable/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
