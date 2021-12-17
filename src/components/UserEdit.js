import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../apis/api";
import FormField from "./forms/FormField";

export default function UserEdit() {
    const [currentUser, setCurrentUser] = useState("");
  const [state, setState] = useState({
    name: "",
    password: "",
    email: "",
    picture: new File([], ""),
    pictureUrl: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    name: null,
    email: null,
    password: null,
  });

  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    const parsedStoredUser = JSON.parse(storedUser || '""');
    setCurrentUser(parsedStoredUser.user);
    
  }, []);
  useEffect(() => {
    setLoading(true);
    async function fetchUser() {
      try {
        const response = await api.get(`/user/${currentUser._id}`);
        setState({ ...response.data });

        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    }

    fetchUser();
  }, [currentUser._id]);

  async function handleFileUpload(file) {
    try {
      const uploadData = new FormData();

      uploadData.append("picture", file);

      const response = await api.post("/user/upload", uploadData);

      return response.data.url;
    } catch (err) {
      console.error(err);
    }
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
    console.log(state);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setLoading(true);
      const pictureUrl = await handleFileUpload(state.picture);

      await api.patch(`/user/${currentUser._id}`, { ...state, pictureUrl });

      setErrors({ name: "", password: "", email: "" });

      setLoading(false);
      navigate("/");
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
        type="file"
        label="Imagem: "
        id="productFormPicture"
        name="picture"
        onChange={handleChange}
        readOnly={loading}
      />

      <div className="d-flex flex-column">
        <button type="submit" className="btn btn-primary m-2">
        {loading ? "Loading..." : "Editar conta"}
        </button>

      </div>
    </form>
  );
}
