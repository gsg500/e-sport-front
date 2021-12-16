import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../apis/api";
import "../../assets/styles/login.css";

import { AuthContext } from "../../contexts/authContext";

function Login(props) {
  const authContext = useContext(AuthContext);

  const [state, setState] = useState({ password: "", email: "", userType: "" });
  const [errors, setErrors] = useState({
    email: null,
    password: null,
    userType: null,
  });

  const navigate = useNavigate();

  function handleChange(event) {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });

  }

  async function handleSubmit(event) {
    event.preventDefault();

    let loginApi = "";

    // verificar qual tipo de login sera realizado
    if (state.userType === "user") {
      loginApi = "/user/login";
    } else if (state.userType === "establishment") {
      loginApi = "/establishment/login";
    }
  
    try {
      const response = await api.post(loginApi, state);
      console.log(response);

      authContext.setLoggedInUser({ ...response.data });
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ ...response.data })
      );
      setErrors({ password: "", email: "" });
      navigate("/");
    } catch (err) {
      console.error(err.response);
      setErrors({ ...err.response.data.errors });
    }
  }

  return (
    <div className="loginConteiner">
      <div className="loginIntro">
        <h1 className="loginTitle">E-Sport</h1>
        <p className="loginText">
          Pesquise, encontre e reserve <br />
          espaços esportivos
        </p>
      </div>
      <div className="loginFormConteiner">
        <form onSubmit={handleSubmit}>
          <div className="loginItensConteiner">
            <input
              type="email"
              name="email"
              id="signupFormEmail"
              value={state.email}
              error={errors.email}
              onChange={handleChange}
              className="loginItens loginInput"
              placeholder="E-mail"
            />
          </div>

          <div className="loginItensConteiner">
            <input
              type="password"
              name="password"
              id="signupFormPassword"
              value={state.password}
              error={errors.password}
              onChange={handleChange}
              className="loginItens loginInput"
              placeholder="Senha"
            />
          </div>

          <div className="loginItensConteiner">
            <div className="loginItens">
              <input
                id="userImput"
                type="radio"
                name="userType"
                value="user"
                onClick={handleChange}
                className="loginItens"
              />
              <span>Usuário</span>
            </div>

            <div className="loginItens">
              <input
                id="establishmentImput"
                type="radio"
                name="userType"
                value="establishment"
                onClick={handleChange}
                className="loginItens loginInput"
              />
              <span>Estabelecimento</span>
            </div>
          </div>

          <div className="loginButtonsContainer">
            <button type="submit" className="loginItens loginButtons">
              Login
            </button>
            <Link to="/forgot-password">Esqueceu a senha?</Link>
            <Link to="/signup">
              <button type="submit" className="loginItens signupButtons">
                Criar conta
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
