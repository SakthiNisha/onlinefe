import React from 'react'
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux'

const PageHeader = () => {
    const cartItems = useSelector(state => state.cart.cart)
    //console.log(cartItems);
  return (
    <header className="header">
        <div className="header__top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="header__top__left">
                            <ul>
                                <li><i className="fa fa-envelope"></i> hello@tsf.com</li>
                                <li>Free Shipping for all Order of Rs99</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="header__top__right">
                            <div className="header__top__right__social">
                                <Link to="/text"><i className="fa fa-facebook"></i></Link>
                                <a href="/"><i className="fa fa-twitter"></i></a>
                                <a href="/"><i className="fa fa-linkedin"></i></a>
                                <a href="/"><i className="fa fa-pinterest-p"></i></a>
                            </div>
                            <div className="header__top__right__auth">
                                <a href="/"><i className="fa fa-user"></i> Login</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="header__logo">
                        <a href="./index.html"><img src="img/logo.jpg" alt=""/></a>
                    </div>
                </div>
                <div className="col-lg-7">
                    <nav className="header__menu">
                        <ul>
                            <li className="active"><Link to="/">Home</Link></li>
                            <li><Link to="/groceries">Groceries</Link></li>
                            <li><Link to="/vegitables">Vegetables</Link></li>
                             <li><Link to="/fruits">Fruits</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="col-lg-2">
                    <div className="header__cart">
                        <ul>
                            <li><a href="/"><i className="fa fa-heart"></i> <span>1</span></a></li>
                            <li><Link to="/checkout"><i className="fa fa-shopping-bag"></i> <span>{ cartItems.length}</span></Link></li>
                        </ul>
                        <div className="header__cart__price">item: <span>Rs150.00</span></div>
                    </div>
                </div>
            </div>
            <div className="humberger__open">
                <i className="fa fa-bars"></i>
            </div>
        </div>
    </header>
    
  )
}

export default PageHeader