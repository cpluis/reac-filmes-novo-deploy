import React from 'react';
import "./style.css"


function Footer() {
  const titulo = window.localStorage.getItem("nome")
  return (
      <footer className="footer">
          {titulo}
      </footer>
  );
}

export default Footer;