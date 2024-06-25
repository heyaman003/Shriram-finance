import React, { useEffect, useRef, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const   Navbar = () => {
  const imageHolderRef = useRef(null);

  const handleMouseOver = (event) => {
    const value = event.target.getAttribute('data-src');
    imageHolderRef.current.src = value;
  };

  const handleMouseOut = () => {
    imageHolderRef.current.src = './Nav-img/shriram-logo.svg';
  };


  useEffect(() => {
    function resizeNav() {
      const navFullscreen = document.getElementById('nav-fullscreen');
      const navOverlay = document.getElementById('nav-overlay');

      // Set the nav height to fill the window
      navFullscreen.style.height = window.innerHeight + 'px';

      // Set the circle radius to the length of the window diagonal
      const radius = Math.sqrt(Math.pow(window.innerHeight, 2) + Math.pow(window.innerWidth, 2));
      const diameter = radius * 2;
      navOverlay.style.width = diameter + 'px';
      navOverlay.style.height = diameter + 'px';
      navOverlay.style.marginTop = -radius + 'px';
      navOverlay.style.marginLeft = -radius + 'px';
    }

    // Call resizeNav initially and on window resize
    resizeNav();
    window.addEventListener('resize', resizeNav);

    // Cleanup function to remove event listeners
    return () => {
      window.removeEventListener('resize', resizeNav);
    };
  }, []);

  // Toggle nav function
  const toggleNav = () => {
    const navToggle = document.getElementById('nav-toggle');
    const navOverlay = document.getElementById('nav-overlay');
    const navFullscreen = document.getElementById('nav-fullscreen');

    navToggle.classList.toggle('open');
    navOverlay.classList.toggle('open');
    navFullscreen.classList.toggle('open');
  };

  return (
    <>
      <div className='navbar flex'>
        <Link onClick={() => toggleNav()} to="/" className='brand-logo'>
        <img width={"60px"} className='img-fluid' src="./Nav-img/shriram-logo.svg" alt="" />
        </Link>

        {/* <p className='annual-report-text'>
          Annual<br />
          Report<br />
          2023-24
        </p> */}
        <div id="nav-container">
          <div id="nav-overlay">
            {/* <div className='top-strip'></div> */}
          </div>
          <nav id="nav-fullscreen">
            <div className='nav-menu-wrap'>
              {/* <div> */}
              <ul>
                <b>Know Shriram</b>

                <li><Link onClick={() => toggleNav()} to="/" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Home</Link></li>
                <li><Link onClick={() => toggleNav()} to="/Chairman-message" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Chairman Message</Link></li>

                <li><Link onClick={() => toggleNav()} to="/CFO" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>CFO</Link></li>

                <li><Link onClick={() => toggleNav()} to="/BOD" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>BOD</Link></li>

                <li><Link onClick={() => toggleNav()} to="/ManagementTeam" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Management Team</Link></li>

                <li><Link onClick={() => toggleNav()} to="/PeopleCore" >People Core</Link></li>

                <li><Link onClick={() => toggleNav()} to="/NavigatingChallenges" >Navigating Challenges</Link></li>

              </ul>
              <ul>
                <b>Business Overview</b>
                <li><Link onClick={() => toggleNav()} to="/EmpoweringCommunities" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Empowering Communities</Link></li>
                <li><Link onClick={() => toggleNav()} to="/BusinessModel" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Business Model</Link></li>
                <li><Link onClick={() => toggleNav()} to="/AdoptingDigitisation" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Adopting Digitisation</Link></li>
                <li><Link onClick={() => toggleNav()} to="/FinancialInclusion" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Financial Inclusion</Link></li>
                <li><Link onClick={() => toggleNav()} to="/RobustProcess" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Robust Process</Link></li>
                <li><Link onClick={() => toggleNav()} to="/LeadingFinancialAgility" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Leading Financial Agility</Link></li>
                <li><Link onClick={() => toggleNav()} to="/ExploringNewFrontiers" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Exploring New Frontiers</Link></li>
                <li><Link onClick={() => toggleNav()} to="/Journey" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Journey
                </Link></li>
                <li><Link onClick={() => toggleNav()} to="/Empowering" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Empowering
                </Link></li>
                <li><Link onClick={() => toggleNav()} to="/Affordability" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Affordability
                </Link></li>
              </ul>
              </div>
              <div>
             
              <ul>
                <li><Link onClick={() => toggleNav()} to="./docs/Statutory Reports.pdf" target='_blank' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Statutory Reports</Link></li>
                <li><Link onClick={() => toggleNav()} to="./docs/Financial Statements.pdf" target='_blank' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Financial Statements</Link></li>
              </ul>
              <ul className='text-center'>
      <li className='download-rep-btn fs-6 fw-bold'>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Link 
            onClick={() => toggleNav()} 
            to="./docs/Balco AR 2023-24 (10-06-24) single pg.pdf" 
            target='_blank' 
            onMouseOver={handleMouseOver} 
            onMouseOut={handleMouseOut}
          >
            Download Full Report <img src="./homepage/dnld.svg" alt="Download" />
          </Link>
        </motion.div>
      </li>
    </ul>
              </div>
              {/* <div className='nav-menu-dynamic-img-container'></div> */}
              {/* <div class="menu-image-holder nav-menu-dynamic-img-container">
                <img src="/nestle-logo.png"
                  ref={imageHolderRef}
                />

              </div> */}
            {/* </div> */}
          </nav>
          <a id="nav-toggle" onClick={toggleNav}>
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>
      </div>
      <div className='gradient-line'></div>
    </>
  );
};

export default Navbar;