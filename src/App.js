import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import RestaurantForm from "./pages/RestaurantForm";
import SampleMenu from "./pages/SampleMenu";
import Admin from "./pages/Admin"


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
            <Route path='/Admin' element={<Admin/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
