import React, { useState } from "react";
import UserSignup from "../../components/UserSignup";
import EstablishmentSignup from "../../components/EstablishmentSignup";

function Signup(props) {
  const [state, setState] = useState({ userType: "user" });

  function handleChange(event) {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  return (
    <div className="m-3 text-center">
      <h1>Crie sua conta!</h1>
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

      {state.userType === "user" ? <UserSignup /> : <EstablishmentSignup />}
    </div>
  );
}

export default Signup;
