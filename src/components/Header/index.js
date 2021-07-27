import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import logo from "../../imagem/logo.png";
// import { Container } from './styles';

function Header() {
  return (
    <div className="d-flex p-2 bd-highlight">
      <div className="header-esquerda">
        <NavLink to="/">
          <img className="logo" src={logo} />
        </NavLink>
      </div>
      <div className="header-direita">
        <NavLink to="/movie">Filmes</NavLink>
        <NavLink to="/sobre">Sobre</NavLink>
        <NavLink to="/cadastro">Cadastro</NavLink>
      </div>
    </div>
  );
}

export default Header;
