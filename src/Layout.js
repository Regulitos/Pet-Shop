import React from 'react';
import BookMark from './components/bookmark/BookMark'; 
const Layout = ({ children }) => {
  return (
    <div className="layout">
      <BookMark />
      {children}
    </div>
  );
};

export default Layout;