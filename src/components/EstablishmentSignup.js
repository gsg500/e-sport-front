import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../apis/api";
import FormField from "./forms/FormField";

export default function EstablishmentSignup() {
  const [state, setState] = useState({
    name: "",
    password: "",
    email: "",
    picture: new File([], ""),
    pictureUrl: "",
    adress: {
      street: "",
      number: 0,
      Bairro: "",
      city: "",
      state: "",
      cep: 0,
    },
    phone: 0,
  });
  const [adressData, setAdressData] = useState({
    street: "",
    number: 0,
    Bairro: "",
    city: "",
    state: "",
    cep: 0,
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    name: null,
    email: null,
    password: null,
    adress: {
        street: null,
        number: null,
        Bairro: null,
        city: null,
        state: null,
        cep: null,
      },
      phone: null,
  });

  const navigate = useNavigate();

  async function handleFileUpload(file) {
    try {
      const uploadData = new FormData();

      uploadData.append("picture", file);

      const response = await api.post("/establishment/upload", uploadData);

      console.log(response);

      return response.data.url;
    } catch (err) {
      console.error(err);
    }
  }

  function handleAdressChange(event) {
    setAdressData({
      ...adressData,
      [event.currentTarget.name]: event.currentTarget.value,
    });

    setState({ ...state, adress: adressData });
    console.log(state);
  }

  function handleChange(event) {
    if (event.target.files) {
      return setState({
        ...state,
        [event.target.name]: event.target.files[0],
      });
    }

    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setLoading(true);
      const pictureUrl = await handleFileUpload(state.picture);

      await api.post("/establishment/signup", { ...state, pictureUrl });

      setErrors({ name: "", password: "", email: "" });

      setLoading(false);
      navigate("/login");
    } catch (err) {
      if (err.response) {
        setLoading(false);
        console.error(err.response);
        return setErrors({ ...err.response.data.errors });
      }

      console.error(err);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormField
        type="text"
        label="Nome: "
        name="name"
        id="signupFormName"
        value={state.name}
        error={errors.name}
        onChange={handleChange}
      />

      <FormField
        type="email"
        label="Email: "
        name="email"
        id="signupFormEmail"
        value={state.email}
        error={errors.email}
        onChange={handleChange}
      />

      <FormField
        type="password"
        label="Senha: "
        name="password"
        id="signupFormPassword"
        value={state.password}
        error={errors.password}
        onChange={handleChange}
      />

      <FormField
        type="number"
        label="Telefone: "
        name="phone"
        id="signupFormPhone"
        value={state.phone}
        error={errors.phone}
        onChange={handleChange}
      />

      <FormField
        type="file"
        label="Imagem: "
        id="productFormPicture"
        name="picture"
        onChange={handleChange}
        readOnly={loading}
      />

      <h3>Endereço</h3>

      <FormField
        type="text"
        label="Rua: "
        name="street"
        id="signupFormStreet"
        value={adressData.street}
        onChange={handleAdressChange}
      />

      <FormField
        type="number"
        label="Número: "
        name="number"
        id="signupFormNumber"
        value={adressData.phone}
        onChange={handleAdressChange}
      />

      <FormField
        type="text"
        label="Bairro: "
        name="Bairro"
        id="signupFormBairro"
        value={adressData.Bairro}
        onChange={handleAdressChange}
      />

      <FormField
        type="text"
        label="Cidade: "
        name="city"
        id="signupFormCity"
        value={adressData.city}
        onChange={handleAdressChange}
      />

      <FormField
        type="text"
        label="Estado: "
        name="state"
        id="signupFormState"
        value={adressData.state}
        onChange={handleAdressChange}
      />

      <FormField
        type="number"
        label="CEP: "
        name="cep"
        id="signupFormCEP"
        value={adressData.cep}
        onChange={handleAdressChange}
      />

      <div className="d-flex flex-column">
        <button type="submit" className="btn btn-primary m-2">
          Criar conta
        </button>

        <Link to="/login">
          Já tem uma conta? Clique aqui para realizar login.
        </Link>
      </div>
    </form>
  );
}
