import './App.css'
import NavBar from './components/NavBar/NavBar.jsx'
import Home from './pages/Home'
import Login from './pages/Login';

function App() {

  const items = [ 
    {title: 'Home', url: '/'},
    {title: 'Best Products', url: '/best'},
    {title: 'Offers', url: '/offers'},
    {title: 'Login/Register', url: '/logReg', icon: 'fa-solid fa-right-to-bracket', titleActive: 'false'},
    {title: 'Cart', url: '/cart', icon: 'fa-solid fa-shopping-cart', titleActive: 'false'},
    {title: 'Profile', url: '/profile', icon: 'fa-solid fa-user', titleActive: 'false'},
    
    
]; 

  return (
    <>
    <NavBar items={items}></NavBar>
    <Login></Login>
    </>
     
  )
}

export default App
