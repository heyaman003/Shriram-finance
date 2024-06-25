import React, { useEffect, useRef } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

 const Navbar = () => {
  const imageHolderRef = useRef(null);

  const handleMouseOver = (event) => {
    const value = event.target.getAttribute("data-src");
    imageHolderRef.current.src = value;
  };

  const handleMouseOut = () => {

    imageHolderRef.current.src = './Nav-img/shriram-logo.svg';

  };

  useEffect(() => {
    function resizeNav() {
      const navFullscreen = document.getElementById("nav-fullscreen");
      const navOverlay = document.getElementById("nav-overlay");

      // Set the nav height to fill the window
      navFullscreen.style.height = window.innerHeight + "px";

      // Set the circle radius to the length of the window diagonal
      const radius = Math.sqrt(
        Math.pow(window.innerHeight, 2) + Math.pow(window.innerWidth, 2)
      );
      const diameter = radius * 2;
      navOverlay.style.width = diameter + "px";
      navOverlay.style.height = diameter + "px";
      navOverlay.style.marginTop = -radius + "px";
      navOverlay.style.marginLeft = -radius + "px";
    }

    // Call resizeNav initially and on window resize
    resizeNav();
    window.addEventListener("resize", resizeNav);

    // Cleanup function to remove event listeners
    return () => {
      window.removeEventListener("resize", resizeNav);
    };
  }, []);

  // Toggle nav function
  const toggleNav = () => {
    const navToggle = document.getElementById("nav-toggle");
    const navOverlay = document.getElementById("nav-overlay");
    const navFullscreen = document.getElementById("nav-fullscreen");

    navToggle.classList.toggle("open");
    navOverlay.classList.toggle("open");
    navFullscreen.classList.toggle("open");
  };

  return (
    <>
      <div className="navbar flex">
        <h4 className="annual-report-text">
          Annual
          <br />
          Report
          <br />
          2023-24
        </h4>
        <img className="nestle-logo" src="./Nav-img/shriram-logo.svg" alt="" />
        <div id="nav-container">
          <div id="nav-overlay"></div>
          <nav id="nav-fullscreen">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 }}
              className="nav-menu-wrap"
            >
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
    <li><Link onClick={() => toggleNav()} to="/Progress" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>View Progress
    </Link></li>
  </ul>
            </motion.div>
          </nav>
          <a id="nav-toggle" onClick={toggleNav}>
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>
      </div>
      <div className="gradient-line"></div>
    </>
  );
};
export default Navbar;