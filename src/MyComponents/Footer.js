import React from 'react';
 
export const Footer = () => {
  let footerStyle = {
      position: "relative",
      top: "100vh",
      width: "100%",
  }
  return <footer className='bg-dark pt-3 pb-3 mt-2' style={footerStyle}>
    <p className='text-center text-white mb-0'>Copyright 2020 All Right Reserved</p>
  </footer>;
};
