import React from 'react';
import "../styles/PreNavbar.css";
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const cartIcon = <FontAwesomeIcon icon={faCartShopping} />

const PreNavbar = () => {
  return (
    <div className="preNav">
        <div>
      <Link to="https://www.mi.com/in/">MI INDIA</Link><span>|</span>
      <Link to="https://www.mi.com/in/store">GET MI STORE APP</Link><span>|</span>
      <Link to="https://www.mi.com/in/support">ONLINE HELP</Link><span>|</span>
      <Link to="https://www.mi.com/in/product-list">RETAIL STORE </Link>
        </div>

        <div>
        <Link to="https://store.mi.com/in/site/login?redirectUrl=https://www.mi.com/in/product-list/laptops?gclid=Cj0KCQjw8NilBhDOARIsAHzpbLD_SQUayCC0STh1ZdoEt-AXx2sOuNUVcNwGFh7ceO7qUJOt710TCV8aAp-NEALw_wcB">SIGN IN</Link><span>|</span>
        <Link to="https://store.mi.com/in/site/login?redirectUrl=https://www.mi.com/in/product-list/laptops?gclid=Cj0KCQjw8NilBhDOARIsAHzpbLD_SQUayCC0STh1ZdoEt-AXx2sOuNUVcNwGFh7ceO7qUJOt710TCV8aAp-NEALw_wcB&scene=register">SIGN UP</Link><span>|</span>
        <Link to="https://store.mi.com/in/cart">{cartIcon} CART(0)</Link>
        </div>
    </div>
  )
}

export default PreNavbar
