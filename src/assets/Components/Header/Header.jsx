import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import '../Header/header.css'
import { faCartShopping, faMagnifyingGlass, faMessage, faUser } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown';
const Header = () => {
    return (
        <div className="header">
            <div className='header-center'>
                <div className="up-header">
                    <div className="about">
                        <nav>
                            <ul>
                                <li><a href='#'>About Us</a></li>
                                <li><a href='#'>Privacy</a></li>
                                <li><a href='#'>FAQ</a></li>
                                <li><a href='#'>Careers</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="wishlist-icons">
                        <div className="span-texts">
                            <nav>
                                <ul>
                                    <li><a href='#'>My wishlist</a></li>
                                    <li><a href='#'>Track Your Order</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="icons">
                            <a><FontAwesomeIcon icon={faFacebook} /></a>
                            <a><FontAwesomeIcon icon={faInstagram} /></a>
                            <a><FontAwesomeIcon icon={faTwitter} /></a>
                            <a><FontAwesomeIcon icon={faLinkedin} /></a>
                            <a><FontAwesomeIcon icon={faYoutube} /></a>
                        </div>
                    </div>
                </div>
                <div className="downheader">
                    <div className="logo" style={{cursor:"pointer"}}>
                        <img src="https://preview.colorlib.com/theme/capitalshop/assets/img/logo/logo.png" alt="" />
                    </div>
                    <div className="down-nav">
                        <nav>
                            <ul>
                                <li><a href='#'>Home</a></li>
                                <li><a href='#'>Men</a></li>
                                <li><a href='#'>Women</a></li>
                                <div className='baby-col'><li><a href='#'>Baby Collection<div className='baby-message'><FontAwesomeIcon id='message' icon={faMessage} /><p id='new'>New</p></div></a></li></div>
                                <div className='dropdown'><li><a href='#'>Pages<FontAwesomeIcon id='down-arrow' icon={faChevronDown} />
                                </a></li><div className='dropdown-pages'>
                                        <a href="#">Login</a>
                                        <a href="#">Cart</a>
                                        <a href="#">Product Details</a>
                                        <a href="#">Product Check out</a>
                                    </div></div>
                                <div className='dropdown-blog'> <li><a href='#'>Blog</a></li><div className='blog-pages'>
                                    <a href="#">Blog</a>
                                    <a href="#">Element</a>
                                    <a href="#">Blog Detail</a>
                                </div></div>
                                <li><a href='#'>Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="search-store">
                        <a href='#'><FontAwesomeIcon icon={faMagnifyingGlass} /></a>
                        <a href='#'><FontAwesomeIcon icon={faUser} /></a>
                        <div className='cartShopping'><a href='#'><FontAwesomeIcon icon={faCartShopping} /><div className="message">1</div></a></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
