import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../apis/api";

function EstablishmentEdit(props) {
  const [state, setState] = useState({
    userType: "",
    name: "",
    email: "",
    passwordHash: "",
    pictureUrl: "",
    adress: "",
    phone: "",
    openingTime: "",
    closingTime: "",
    availableEquipment: "",
    fieldTypes: "",
    fields: ""
  });
  const { id } = useParams(props);

  useEffect(() => {
    async function fetchData() {
      try {
        //await api.
        const response = await api.get(`/${id}`);
        delete response.data._id;
        setState({ ...response.data });
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, [id]);

  function handleChange(event) {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    await api.patch(`/${id}`, state);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Editar Avaliação</h1>
      {/* Name */}
      <div className="form-group">
        <label htmlFor="newCharacterName">Nome</label>
        <input
          name="name"
          type="text"
          className="form-control"
          id="name"
          onChange={handleChange}
          value={state.name}
        />
      </div>
      <div className="form-group">
        <label htmlFor="newCharacterName">email</label>
        <input
          name="email"
          type="text"
          className="form-control"
          id="email"
          onChange={handleChange}
          value={state.email}
        />
      </div>
      {/* Occupation */}
      <div className="form-group">
        <label htmlFor="newCharacterOccupation">pictureUrl</label>
        <input
          type="text"
          className="form-control"
          id="pictureUrl"
          name="pictureUrl"
          onChange={handleChange}
          value={state.pictureUrl}
        />
      </div>
      {/* Weapon */}
      <div className="form-group">
        <label htmlFor="newCharacterWeapon">adress</label>
        <input
          type="text"
          className="form-control"
          id="adress"
          name="adress"
          onChange={handleChange}
          value={state.adress}
        />
      </div>
      {/* Weapon */}
      <div className="form-group">
        <label htmlFor="newCharacterWeapon">phone</label>
        <input
          type="text"
          className="form-control"
          id="phone"
          name="phone"
          onChange={handleChange}
          value={state.phone}
        />
      </div>
      {/* Weapon */}
      <div className="form-group">
        <label htmlFor="newCharacterWeapon">openingTime</label>
        <input
          type="text"
          className="form-control"
          id="openingTime"
          name="openingTime"
          onChange={handleChange}
          value={state.openingTime}
        />
      </div>
      {/* Weapon */}
      <div className="form-group">
        <label htmlFor="newCharacterWeapon">closingTime</label>
        <input
          type="text"
          className="form-control"
          id="closingTime"
          name="closingTime"
          onChange={handleChange}
          value={state.closingTime}
        />
      </div>
      <div className="form-group">
        <label htmlFor="newCharacterWeapon">availableEquipment</label>
        <input
          type="text"
          className="form-control"
          id="availableEquipment"
          name="availableEquipment"
          onChange={handleChange}
          value={state.availableEquipment}
        />
      </div>
      <div className="form-group">
        <label htmlFor="newCharacterWeapon">fieldTypes</label>
        <input
          type="text"
          className="form-control"
          id="fieldTypes"
          name="fieldTypes"
          onChange={handleChange}
          value={state.fieldTypes}
        />
      </div>
      <div className="form-group">
        <label htmlFor="newCharacterWeapon">fields</label>
        <input
          type="text"
          className="form-control"
          id="fields"
          name="fields"
          onChange={handleChange}
          value={state.fields}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Gravar
      </button>
    </form>
  );
}

export default EstablishmentEdit;