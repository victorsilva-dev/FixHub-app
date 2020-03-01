import React, { Component } from "react";
import { Link } from "react-router-dom";
import Btn from "./button.js";
import Logo from "../img/fixhub_oficial.png";
import isAuthenticated from "../services/userAuthentication.js";
import logout from "../services/logout";

class Navbar extends Component {
  renderButtons() {
    if (isAuthenticated() === false) {
      return (
        <>
          <li
            className="nav-item active my-3"
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
          >
            <Link to="/entrar" className="nav-link ml-1">
              Entrar
            </Link>
          </li>
          <li
            className="nav-item active my-3"
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
          >
            <Link to="/cadastro" className="nav-link ml-1">
              Cadastro
            </Link>
          </li>
        </>
      );
    } else if (isAuthenticated() === true) {
      return (
        <>
        <li
          className="nav-item active my-3"
          data-toggle="collapse"
          data-target=".navbar-collapse.show"
        >
          <Link to="/alterarCadastro" className="nav-link ml-1">
            Alterar Cadastro
          </Link>
        </li>
        <li
          className="nav-item active my-3"
          data-toggle="collapse"
          data-target=".navbar-collapse.show"
          onClick={logout}
        >
          <Link to="/sair" className="nav-link ml-1">
            Sair
          </Link>
        </li>
      </>
      );
    }
  }

  render() {
    return (
      <nav className="navbar sticky-top navbar-expand-xl navbar-dark">
        <Link
          to="/"
          className="navbar-brand ml-1 no-outline"
          id="brand-logo"
          tabIndex="0"
        >
          <img
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
            className="mx-auto my-1"
            src={Logo}
            height="50px"
            width="63px"
            alt="logo"
          />
        </Link>

        <button
          className="navbar-toggler no-outline"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo"
          aria-controls="navbarTogglerDemo"
          aria-expanded="false"
          aria-label="Alterna navegação"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo">
          <ul className="navbar-nav mr-auto">
            <li
              className="nav-item active my-3"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              <Link to="/" className="nav-link ml-1">
                Home
              </Link>
            </li>
            <li
              className="nav-item active my-3"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              <Link to="/encontreProfissionais" className="nav-link ml-1">
                Encontre Profissionais
              </Link>
            </li>
            {isAuthenticated() === false ? (
              <li
                className="nav-item active my-3"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                <Link to="/divulgueSeuTrabalho" className="nav-link ml-1">
                  Divulgue seu Trabalho
                </Link>
              </li>
            ) : (
              <li
                className="nav-item active my-3"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                <Link to="/perfil" className="nav-link ml-1">
                  Meu Perfil
                </Link>
              </li>
            )}
            <li
              className="nav-item active my-3"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              <Link to="/quemSomos" className="nav-link ml-1">
                Quem Somos
              </Link>
            </li>
            <li
              className="nav-item active my-3"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              <Link to="/contato" className="nav-link ml-1">
                Contato
              </Link>
            </li>
          {this.renderButtons()}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
