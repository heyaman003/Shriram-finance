import React from 'react';
import { motion } from 'framer-motion';


const HoverLink = () => {
  return (
    <motion.a
      href="./Document/Annual.pdf"
      whileHover={{ 
        scale: 1.05,
        backgroundColor: '#6ac5a7',
        color: '#fff'
      }}
      transition={{ 
        type: 'spring', 
        stiffness: 300 
      }}
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '10px 20px',
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#fff',
        backgroundColor: '#0098ba',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        textDecoration: 'none',
        position: 'relative',
        overflow: 'hidden',
        width:'210px'
      }}
    >
      Download Report
      <motion.span
        initial={{ opacity: 0, x: -10 }}
        whileHover={{ opacity: 1, x: 0 }}
        transition={{ type: 'spring', stiffness: 300 }}
        style={{
          display: 'flex',
          alignItems: 'center',
          marginLeft: '10px',
        }}
      >
         <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="currentColor" 
          width="20px" 
          height="20px"
        >
          <path d="M14 2H10V10H3.99998L12 18L20 10H14V2ZM4 20H20V22H4V20Z" />
        </svg>
      </motion.span>
    </motion.a>
  );
};

export default HoverLink;
