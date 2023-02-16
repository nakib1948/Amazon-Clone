import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from '../StateProvider';
import { Usercontext } from '../../App';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
function Header() {
 const [state,dispatch]=useContext(Usercontext)
 
 const login=()=>{
    if(state.user)
    {
        signOut(auth)
    }
 }

  return (
    <nav className='header'>
        <Link to='/'>
        <img className='header_logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
        </Link>
        <div className='header_search'>
            <input type="text" className="header_searchInput" />
            <SearchIcon className='header_searchIcon'></SearchIcon>
        </div>

        <div className='header_nav'>
            <Link to={!state.user && "/login"} className='header_link' >
                <div onClick={login} className="header_option">
                    <span className='header_optionLineOne'>Hello {state.user && state.user.email}</span>
                    <span className='header_optionLineTwo'>{state.user ? 'Sign out': 'Sign In'}</span>
                </div>
            </Link>
       
            <Link to="/" className='header_link' >
                <div className="header_option">
                    <span className='header_optionLineOne'>Returns</span>
                    <span className='header_optionLineTwo'>orders</span>
                </div>
            </Link>
      
            <Link to="/" className='header_link' >
                <div className="header_option">
                    <span className='header_optionLineOne'>Your</span>
                    <span className='header_optionLineTwo'>Prime</span>
                </div>
            </Link>
            <Link to="/checkout" className='header_link' >
                <div className="header_optionBasket">
                    <ShoppingBasketIcon></ShoppingBasketIcon>
                   <span className='header_optionLineTwo header_basketCount'>{state.basket.length}</span>
                </div>
            </Link>
        </div>
        
    </nav>
  )
}

export default Header
