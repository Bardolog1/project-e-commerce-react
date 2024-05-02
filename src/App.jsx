import "./App.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import Login from "./pages/Login/Login.jsx";

function App() {
  const items = [
    { title: "Home", url: "/", titleActive: "true" },
    { title: "Best Products", url: "/best", titleActive: "true" },
    { title: "Offers", url: "/offers", titleActive: "true" },
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
    src: "https://seeklogo.com/images/M/mercado-libre-logo-2322FACE00-seeklogo.com.png",
    alt: "logo",
    redirect: "/",
    }

  return (
    <>
      <NavBar items={items} darkMode={true} searchBar={true} logo={logo}/>
      <Login></Login>
    </>
  );
}

export default App;
