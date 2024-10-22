import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import Link for href navigation
import Cart from './Cart'; // Import Cart component
import Wishlist from './Wishlist';
import Branches from './Branches'
import LoginSignup from './LoginSignup'; // Import LoginSignup component
import './Home.css'; // Create a CSS file for styling the navbar
import Blog from './Blog';


const Navbar = () => {
  const [dropdownItems, setDropdownItems] = useState([]);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false); // State to manage cart visibility
  const [isUserOpen, setIsUserOpen] = useState(false); // State to manage user menu visibility
  const [isStoreOpen, setIsStoreOpen] = useState(false); // State to manage Store menu visibility
  const [isBlogOpen, setIsBlogOpen] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate(); // Hook for navigation

  const handleMouseEnter = (items) => {
    setDropdownItems(items);
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  const handleCartClick = () => {
    setIsCartOpen((prevState) => !prevState); // Toggle cart visibility
  };

  const handleUserClick = () => {
    setIsUserOpen((prevState) => !prevState); // Toggle user menu visibility
  };

  const handleStoreClick = () => {
    setIsStoreOpen((prevState) => !prevState); // Toggle user Store visibility
  };

  const handleWishlistClick = () => {
    setIsWishlistOpen((prevState) => !prevState); // Toggle user Store visibility
  };

  const handleBlogClick = () => {
    setIsBlogOpen((prevState) => !prevState); // Toggle user Store visibility
  };


  const dropdownOptions = {
    "Harmaig": ["About Us", "Contact Us", "Know Us"],
    "All Jewellery": ["Bangles", "Bracelets", "Chains", "Love", "Earrings", "Men's Bracelets", "Men's Rings", "Men's Chain", "Mangalsutra", "Necklace", "Pendants", "Women's Rings"],
    "Earrings": ["Studs", "Hoops", "Dangles"],
    "Rings": ["Engagement Rings", "Wedding Bands", "Fashion Rings"],
    "Digital Gold": ["Invest in Gold", "Gold Savings", "Gold Loans"],
    "Collections": ["Festive Collection", "Bridal Collection", "Casual Collection"],
    "Wedding": ["Bridal Jewellery", "Groom's Jewellery", "Wedding Gifts"],
    "More": ["Accessories", "Care Products", "Gifts","Repairs", "Personalisation", "Art of Gifting", "Lending", "Gold SIP & Rewards","30-Day Returns", " Lifetime Exchange", "Buy & Pack", " Terms & Conditions"],
  };

  return (
    <>
      <div className="one">
        <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
          <div className="container-fluid">
            <a className="navbar-brand" href = "/">Harmaig</a>
            <a className="navbar-brand" href="/">
              <img src='./assets/logo1.jpeg' alt="..." className="brand-logo" />
            </a>

            <div className="input-group search-bar">
              <input
                type="text"
                className="form-control"
                placeholder="Search for Gold Jewellery, Diamond Jewellery and more..."
                aria-label="Search"
              />
              <button id= "s-icon">
                <i className="fa fa-search"></i>
                </button>
            </div>

            <div className="navbar-nav custom-icons">
              <div className="nav-link" onClick={handleStoreClick} style={{ cursor: 'pointer' }}>
                <i className="fas fa-store"></i>
              </div>
              <div className="nav-link" onClick={handleUserClick} style={{ cursor: 'pointer' }}>
                <i className="fas fa-user"></i>
              </div>
              <div className="nav-link" onClick={handleWishlistClick} style={{ cursor: 'pointer' }}>
                <i className="fas fa-heart"></i>
              </div>
            <div className="nav-link" onClick={handleCartClick} style={{ cursor: 'pointer' }}>
                <i className="fas fa-shopping-cart"></i>
                <span className="badge bg-danger rounded-pill">0</span>
              </div>
              <div className="nav-link" onClick={handleBlogClick} style={{ cursor: 'pointer' }}>  
              <i class="fa-duotone fa-solid fa-comments"></i>
              </div>
            </div>
          </div>
        </nav>

        <div className="bottom-nav" onMouseLeave={handleMouseLeave}>
          <div className="container">
            <ul className="nav justify-content-center">
              {Object.keys(dropdownOptions).map((navItem, index) => (
                <li className="nav-item" key={index} onMouseEnter={() => handleMouseEnter(dropdownOptions[navItem])}>
                  <Link className="nav-link" to="/">{navItem}</Link>
                </li>
              ))}
            </ul>

            {dropdownVisible && (
              <div id="box1">
                <div className="dropdown-menu">
                  {dropdownItems.map((item, index) => (
                    <Link className="dropdown-item" to="/" key={index}>
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Conditionally render the cart component */}
        {isCartOpen && <Cart />}
        
        {/* Conditionally render the LoginSignup component */}
        {isUserOpen && <LoginSignup />}

        {isStoreOpen && <Branches/>}

        {isWishlistOpen && <Wishlist/>}

        {isBlogOpen && <Blog/>}
      </div>
    </>
  );
};

export default Navbar;







