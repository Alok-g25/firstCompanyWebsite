import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

const Navbar = ({navOpen}) => {
    const lastActiveLink = useRef();
    const activeBox = useRef();
  
    const initActiveBox = () => {
      activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px';
      activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px';
      activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px';
      activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px';
    }
  
    useEffect(initActiveBox, []);
    window.addEventListener('resize', initActiveBox);
  
    const activeCurrentLink = (event) => {
      lastActiveLink.current?.classList.remove('active');
      event.target.classList.add('active');
      lastActiveLink.current = event.target;
  
      activeBox.current.style.top = event.target.offsetTop + 'px';
      activeBox.current.style.left = event.target.offsetLeft + 'px';
      activeBox.current.style.width = event.target.offsetWidth + 'px';
      activeBox.current.style.height = event.target.offsetHeight + 'px';
      
    }
  
    const navItems = [
      {
        label: "Home",
        link: "#home",
        className: "nav-link active",
        ref: lastActiveLink,
      },
      {
        label: "About",
        link: "#about",
        className: "nav-link",
      },
      {
        label: "Services",
        link: "#services",
        className: "nav-link",
      },
      {
        label: "Industries",
        link: "#industries",
        className: "nav-link",
      },
      {
        label: "Solutions",
        link: "#solutions",
        className: "nav-link",
      },
      {
        label: "Pricing",
        link: "#pricing",
        className: "nav-link",
      },
      {
        label: "Contact Us",
        link: "#contactUs",
        className: "nav-link",
      }
    ];
  
    return (
      <nav className={'navbar ' + (navOpen ? 'active' : '')}>
        {navItems.map(({ label, link, className, ref }, key) => (
          <a href={link} key={key} ref={ref} className={className} onClick={activeCurrentLink}>
            {label}
          </a>
        ))
        }
        <div className="active-box" ref={activeBox}></div>
      </nav>
    );
  };
  
  Navbar.PropTypes = {
    navOpen: PropTypes.bool.isRequired
  }
  export default Navbar;

  