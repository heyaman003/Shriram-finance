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
      <div className="navbar flex p-8">
        <h4 className="annual-report-text">
           {/* <span className="text-[#006b95] font-bold">Shriram Housing Finance</span> <br /> Annual Report <span className="font-500">2023-2024</span> */}
        </h4>
        <img className="shriram-logo" src="./Nav-img/shriram-logo.svg" alt=""  />
        <div id="nav-container">
          <div id="nav-overlay"></div>
          <nav id="nav-fullscreen">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 }}
              className="nav-menu-wrap"
            >
     <div>
        <ul >
          <b>Corporate Overview</b>

          <li><Link onClick={() => toggleNav()} to="/" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Home</Link></li>
          <li><Link onClick={() => toggleNav()} to="/Affordability" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Empowering People Enhancing Growth Ensuring Affordability
          </Link></li>
          <li><Link onClick={() => toggleNav()} to="/Empowering" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Empowering People with Affordable Housing Finance Solutions
          </Link></li>
          <li><Link onClick={() => toggleNav()} to="/Journey" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>On a Journey of Empowering People
          </Link></li>
          <li><Link onClick={() => toggleNav()} to="/ExploringNewFrontiers" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Exploring New Frontiers through our Myriad Offerings</Link></li>
          <li><Link onClick={() => toggleNav()} to="/Progress" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Measuring our Progress
          </Link></li>
          <li><Link onClick={() => toggleNav()} to="/Chairman-message" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Message from MD & CEO</Link></li>

          <li><Link onClick={() => toggleNav()} to="/CFO" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Message from WTD & CFO</Link></li>
          <li><Link onClick={() => toggleNav()} to="/LeadingFinancialAgility" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Leading with Financial Agility</Link></li>
          <li><Link onClick={() => toggleNav()} to="/RobustProcess" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Robust Underwriting Process</Link></li>
          <li><Link onClick={() => toggleNav()} to="/FinancialInclusion" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Making Financial Inclusion a Reality for All</Link></li>
          <li><Link onClick={() => toggleNav()} to="/AdoptingDigitisation" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Adopting Digitisation</Link></li>
          <li><Link onClick={() => toggleNav()} to="/BusinessModel" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Creating Value through a Robust  Business Model</Link></li>
          <li><Link onClick={() => toggleNav()} to="/PeopleCore" >People at the Core</Link></li>
         
        </ul>

   </div>
   <div>
        <ul className="pt-6">
          <li><Link onClick={() => toggleNav()} to="/NavigatingChallenges" >Navigating Challenges with Agility</Link></li>
          <li><Link onClick={() => toggleNav()} to="/EmpoweringCommunities" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Empowering the Growth of our Communities</Link></li>
          <li><Link onClick={() => toggleNav()} to="/BOD" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Profile of the Board  of Directors </Link></li>

          <li><Link onClick={() => toggleNav()} to="/ManagementTeam" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Management Team</Link></li>

        </ul>
        <ul>
            <b>Statutory Reports</b>
            <li><Link onClick={() => toggleNav()} to="/PeopleCore" >Directors’ Report</Link></li>
            <li><Link onClick={() => toggleNav()} to="/PeopleCore" > Management Discussion and Analysis</Link></li>
            <li><Link onClick={() => toggleNav()} to="/PeopleCore" > Report on Corporate Governance</Link></li>
        </ul>
        <ul className="pt-4">
            <b>Financial Statements</b>
            <li><Link onClick={() => toggleNav()} to="/PeopleCore" >Independent Auditors’ Report</Link></li>
            <li><Link onClick={() => toggleNav()} to="/PeopleCore" > Balance Sheet</Link></li>
            <li><Link onClick={() => toggleNav()} to="/PeopleCore" > Statement of Profit and Loss</Link></li>
            <li><Link onClick={() => toggleNav()} to="/PeopleCore" >Cash Flow Statement</Link></li>
            <li><Link onClick={() => toggleNav()} to="/PeopleCore" > Statement of Changes in Equity</Link></li>
            <li><Link onClick={() => toggleNav()} to="/PeopleCore" >Notes to Financial Statements</Link></li>
        </ul>
        <ul className="pt-4">
            <b>Notice</b>
            <li><Link onClick={() => toggleNav()} to="/PeopleCore" >Notice of the 14th Annual General Meeting</Link></li>
        </ul>
   </div>
 
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