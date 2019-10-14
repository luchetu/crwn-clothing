/*jshint esversion: 6 */
import React from 'react';
import {Link} from 'react-router-dom';
import CartIcon from '../cart-icon/cart-icon.component';
import './header.styles.scss';
import { connect } from 'react-redux';
import {ReactComponent as Logo} from '../../assets/logo.svg';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { auth } from '../../firebase/firebase.utils';


const Header=({currentUser,hidden})=>(
    <div className="header">
        <Link className="logo-container" to="/">
        <Logo className="logo"/>
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
            Shop
            </Link>
            <Link className="option" to="/contact">
            Contact
            </Link>
            {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}
      <CartIcon />
        </div>
        {hidden ? null : <CartDropdown />}
    </div>

)
const mapStateToProps = ({user:{currentUser},cart:{hidden}})=>({
  currentUser,
  hidden

})
export default connect(mapStateToProps)(Header);