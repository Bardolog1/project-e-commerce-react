import "./App.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import HomePage from "./pages/Home/HomePage.jsx";
import Login from "./pages/Login/Login.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Offers from "./pages/Offers/Offers.jsx";
import Cart from "./pages/Cart/Cart";
import BestProducts from "./pages/BestProducts/BestProducts.jsx";

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
  
  const styles = {
      elementsContainer: {
        width: "100vw",
        height: "87vh",
      },
      navBar:{
        width: "100%",
        height: "10vh",
      }
      
    }
  
  

  return (
    <>
     
      <BrowserRouter>
      <NavBar items={items} darkMode={true} searchBar={true} logo={logo} style={styles.navBar}/>
        <Routes >
          <Route path="/" element={<HomePage style={styles.elementsContainer} />}  />
          <Route path="/LogReg" element={<Login style={styles.elementsContainer}/>} />
          <Route path="/offers" element={<Offers style={styles.elementsContainer}/>} />
          <Route path="/register" element={<Login style={styles.elementsContainer}/>} />
          <Route path="/best" element={<BestProducts style={styles.elementsContainer}/>} />
          <Route path="/cart" element={<Cart style={styles.elementsContainer}/>} />
          <Route path="/profile" element={<Login style={styles.elementsContainer}/>} />
        </Routes>
        
      </BrowserRouter>
     
    </>
  );
}

export default App;
