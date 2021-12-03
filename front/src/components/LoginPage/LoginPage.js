import React, { useState } from "react";
import PropTypes from "prop-types";
import "./styles/styles.css";

const propTypes = {};

function LoginPage(props) {
  const [state, setstate] = useState({ login: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setstate((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  
    console.log(state);
  };

  const send = (e) => {
    e.preventDefault()
    console.log(state);
  };
  return (
    <div id="container">
      <div id="imgPapierPeint">
        <img id="img-PapierPeint" src="../../assets/img" alt=""></img>
      </div>
      <div id="boxFormulaire">
        <div id="bandeauboxFormulaire"></div>
        <div id="img-boxFormulaire">
          <img id="img-boxFormulaire" src="../../assets/img" alt=""></img>
        </div>
        <form id="form-boxFormulaire">
          <label className="Labels">Login: </label>
          <input
            className="Inputs"
            onChange={handleChange}
            name="login"
          ></input>
          <label className="Labels">Password: </label>
          <input
            className="Inputs"
            onChange={handleChange}
            name="password"
          ></input>
          <a id="linkRegister" href="\">
            Not register yet ?
          </a>
          <button id="button-boxForm" onClick={send}>
            connexion
          </button>
        </form>
      </div>
    </div>
  );
}

LoginPage.ropTypes = propTypes;

export default LoginPage;
