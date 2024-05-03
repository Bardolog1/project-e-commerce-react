import "./App.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import HomePage from "./pages/Home/HomePage.jsx";
import Login from "./pages/Login/Login.jsx";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Offers from "./pages/Offers/Offers.jsx";
import BeastProducts from "./pages/BestProducts/BeastProducts.jsx";
import Cart from "./pages/Cart/Cart.jsx";

function App() {
  const items = [
    { 
      title: "Home", 
      url: "/", 
      titleActive: "true" 
    },
    { 
      title: "Best Products", 
      url: "/best", 
      titleActive: "true" 
    },
    { 
      title: "Offers", 
      url: "/offers", 
      titleActive: "true" 
    },
    {
      title: "Login/Register",
      url: "/logReg",
      icon: "fa-solid fa-right-to-bracket",
      titleActive: "false",
    },
    {
      title: "Cart",
      url: "/cart",
      icon: "fa-solid fa-shopping-cart",
      titleActive: "false",
    },
    {
      title: "Profile",
      url: "/profile",
      icon: "fa-solid fa-user",
      titleActive: "false",
    },
  ];

  const logo = {
    src: "./public/logo.png",
    alt: "logo",
    redirect: "/",
  };
  
  

  return (
    <>
     
      <BrowserRouter>
      <NavBar items={items} darkMode={true} searchBar={true} logo={logo} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/LogReg" element={<Login />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/register" element={<Login />} />
          <Route path="/best" element={<BeastProducts />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Login />} />
        </Routes>
        
      </BrowserRouter>
     
    </>
  );
}

export default App;
