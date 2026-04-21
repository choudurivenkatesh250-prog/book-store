import './index.css'
import {Link} from 'react-router'
import { FaCartArrowDown } from "react-icons/fa";
import { IoHeartOutline } from "react-icons/io5";

import Logo from '../../assets/logo.png'

const Header  = () => {

    return(
        <>
        <header>
            <nav>
            <div className='logo-container'>
                <img src={Logo} />
           <p>Bookle</p>
            </div>
            <ul className='nav-links'>
                <li><Link to="/" className='nav-link'>Home</Link></li>
                <li><Link to="/books" className='nav-link'>Shop</Link></li>
                <li><Link to="/cart" className='nav-link'>Cart</Link></li>
            </ul>
            <div className='icons-container'>
                <div className='icon-bg'>
                <FaCartArrowDown />
                </div>
                <div className='icon-bg'>
                <IoHeartOutline />
                </div>
            </div>
            </nav>
        </header>
        </>
    )
}
export default Header