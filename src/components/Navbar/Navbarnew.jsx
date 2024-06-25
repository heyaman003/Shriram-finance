<nav id="nav-fullscreen">

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