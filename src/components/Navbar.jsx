import { useContext, useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import ActiveContext from './ActivePageContext';
import './styles/Navbar.css';
function Navbar() {
  const ActiveBar = useContext(ActiveContext);
  const {handleActiveChange}=ActiveBar;
  const[active, setActive] = useState('Home');
  const { currentUser,logout } = useAuth();
  const navigate = useNavigate();
  async function Signout() {
  try {
    await logout();
    setActive('Home');
    console.log('User logged out successfully');
    navigate('/');
  } catch (error) {
    console.error('Sign out error:', error);
  } finally {
    localStorage.removeItem(currentUser.email);
  }
}
  return (
    // <NavbarContext.Provider value={data}>
       <div>
      <nav className="navigation">
      <div className="logo mt-2" id='logo'>
        <Link to='/Page'><img src="src/components/assets/svgs/Logo.svg" alt="logo" /></Link>
      </div>
      <div className="container">
        <div className={`button ${active === 'Home' ? 'active' : ''}`} id='Home' to='/Home' onClick={ () => {handleActiveChange('Home'),(setActive('Home'))}}>Home</div>
        <div className={`button ${active === 'Book' ? 'active' : ''}`} id='Book' to='/Book' onClick={() => {handleActiveChange('Book'),(setActive('Book'))}}>Book</div>
        <div className={`button ${active === 'UpcomingTrip' ? 'active' : ''}`} id='Upcoming trip'to='/Upcomingtrip' onClick={() => {handleActiveChange('UpcomingTrip'),(setActive('UpcomingTrip'))}}>Upcoming trips</div>
        <div className={`button ${active === 'About' ? 'active' : ''}`} id='About' to='/About' onClick={()=>{handleActiveChange('About'),(setActive('About'))}}>About</div>
        <div className={`button ${active === 'Signout' ? 'active' : ''}`}  onClick={()=>{Signout(),(setActive('Signout'))}}>Signout</div>

      </div>
    </nav>
    </div>
    // </NavbarContext.Provider>
   
  )
}

export default Navbar;