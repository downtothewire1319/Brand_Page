import './navbar.css';
import brand_logo from "../../assets/brand_logo.png"
import Card from '../card/Card';

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className='navbar'>


          <div className="logo">
            <img src={brand_logo} alt="barnd_logo" />

          </div>
          <div className="menu_item">
            <ul>
              <li>MENU</li>
              <li>LOCATION</li>
              <li>ABOUT</li>
              <li>CONTACT</li>
            </ul>


          </div>

          <div className="button">
            Login
          </div>
        </div>
      </nav>
      <Card />
    </div>
  )
}

export default Navbar