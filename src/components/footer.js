import React, { Component } from "react";
import { Link } from "react-router-dom";
import isAuthenticated from "../services/userAuthentication";
import logout from "../services/logout";
import Logo from "../img/fixhub_oficial.png";
import facebookIcon from "../img/footerFacebookIcon.png";
import mailIcon from "../img/footerMailIcon.png";
import instagramIcon from "../img/footerInstagramIcon.png";
import githubIcon from "../img/footerGitHubIcon.png";

class Footer extends Component {

  renderOptionsSmallFooter() {
    if (isAuthenticated() === false) {
      return (
        <div className="row mx-2">
          <Link
            to="/entrar"
            className="col-6 mb-4 mt-2 text-white text-left nav-link"
          >
            Entrar
          </Link>
          <Link
            to="/cadastro"
            className="col-6 mb-4 mt-2 text-white text-right nav-link"
          >
            Cadastro
          </Link>
        </div>
      );
    } else if (isAuthenticated() === true) {
      return (
        <div className="row mx-2">
          <Link
            to="/alterarCadastro"
            className="col-6 mb-4 mt-2 text-white text-left nav-link"
          >
            Alterar Cadastro
          </Link>
          <Link
            to="/"
            onClick={logout}
            className="col-6 mb-4 mt-2 text-white text-right nav-link"
          >
            Sair
          </Link>
        </div>
      );
    }
  }
  renderOptionsLargeFooter() {
    if (isAuthenticated() === false) {
      return (
        <div className="col-5 d-flex text-center">
          <Link
            to="/contato"
            className="col-5 mb-4 text-white text-center nav-link"
          >
            Contato
          </Link>
          <Link
            to="/entrar"
            className="col-3 mb-4 text-white text-center nav-link"
          >
            Entrar
          </Link>
          <Link
            to="/cadastro"
            className="col-4 mb-4 text-white text-center nav-link"
          >
            Cadastro
          </Link>
        </div>
      );
    } else if (isAuthenticated() === true) {
      return (
        <div className="col-5 d-flex text-center">
          <Link
            to="/contato"
            className="col-5 mb-4 text-white text-center nav-link"
          >
            Contato
          </Link>
          <Link
            to="/alterarCadastro"
            className="col-5 mb-4 text-white text-center nav-link"
          >
            Alterar Cadastro
          </Link>
          <Link
            to="/"
            onClick={logout}
            className="col-2 mb-4 text-white text-center nav-link"
          >
            Sair
          </Link>
        </div>
      );
    }
  }
  getCurrentYear() {
    const date = new Date();
    return date.getFullYear();
  }
  render() {
    return (
      <div>
        <footer className="container-fluid d-md-none footer-dark">
          <div className="white-text text-center border-top border-info">
            {`© ${this.getCurrentYear()} - FixHub. Todos os direitos reservados.`}
          </div>
        </footer>

        <footer className="container-fluid d-none d-md-block footer-dark">
          <div className="white-text text-center border-top border-info">
            {`© ${this.getCurrentYear()} - FixHub. Todos os direitos reservados.`}
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
