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
      id: 1,
      title: "Home", 
      url: "/", 
      titleActive: "true" 
    },
    { 
      id: 2,
      title: "Best Products", 
      url: "/best", 
      titleActive: "true" 
    },
    { 
      id: 3,
      title: "Offers", 
      url: "/offers", 
      titleActive: "true" 
    },
    {
      id: 4,
      title: "Login/Register",
      url: "/logReg",
      icon: "fa-solid fa-right-to-bracket",
      titleActive: "false",
    },
    {
      id: 5,
      title: "Cart",
      url: "/cart",
      icon: "fa-solid fa-shopping-cart",
      titleActive: "false",
    },
    {
      id: 5,
      title: "Profile",
      url: "/profile",
      icon: "fa-solid fa-user",
      titleActive: "false",
    },
  ];

  const logo = {
    src: "./public/images/logo.png",
    alt: "logo",
    redirect: "/",
  };
  
  const styles = {
      elementsContainer: {
        width: "100vw",
        height: "90vh",
      },
      
      elementWithMarginTop:{
        marginTop: "20vh",
        width: "100vw",
        height: "80vh",
      },
      
      navBar:{
        width: "100%",
        height: "10vh",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1
      }
      
    }
  
  

  return (
    <>
     
      <BrowserRouter>
      <NavBar items={items} darkMode={true} searchBar={true} logo={logo} style={styles.navBar}/>
        <Routes >
          <Route path="/" element={<HomePage style={styles.elementsContainer} />}  />
          <Route path="/LogReg" element={<Login style={ styles.elementWithMarginTop} />} />
          <Route path="/offers" element={<Offers style={styles.elementsContainer}/>} />
          <Route path="/register" element={<Login style={styles.elementWithMarginTop} />} />
          <Route path="/best" element={<BestProducts style={styles.elementsContainer}/>} />
          <Route path="/cart" element={<Cart style={styles.elementsContainer}/>} />
          <Route path="/profile" element={<Login style={styles.elementWithMarginTop}/>} />
        </Routes>
        
      </BrowserRouter>
     
    </>
  );
}

export default App;
