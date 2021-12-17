import React, { useState, useEffect } from "react";
import {useParams} from 'react-router-dom'
import api from "../apis/api";

function AssessmentEdit(props) {
  const [state, setState] = useState({ data: "", velocity: "", kick: "", pass: "", marking: "", dribble: "",user: ""});
  const { id } = useParams(props);

  useEffect(() => {
    async function fetchData() {
      try { //await api.
        const response = await api.get(`/assessmentuser/${id}`);
         delete response.data._id
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

    const response = await api.patch(`/assessmentuser/${id}`,
      state
    );

    console.log(response);
  
  }


  return (
    <form onSubmit={handleSubmit}>
      <h1>Editar Avaliação</h1>
      {/* Name */}
      <div className="form-group">
        <label htmlFor="newCharacterName">Nome</label>
        <input
          name="comprador"
          type="text"
          className="form-control"
          id="newCharacterName"
          onChange={handleChange}
          value={state.user}
        />
      </div>
      <div className="form-group">
        <label htmlFor="newCharacterName">Data</label>
        <input
          name="comprador"
          type="text"
          className="form-control"
          id="newCharacterName"
          onChange={handleChange}
          value={state.data}
        />
      </div>
      {/* Occupation */}
      <div className="form-group">
        <label htmlFor="newCharacterOccupation">Velocity</label>
        <input
          type="text"
          className="form-control"
          id="newCharacterOccupation"
          name="quantidade"
          onChange={handleChange}
          value={state.velocity}
        />
      </div>   
      {/* Weapon */}
      <div className="form-group">
        <label htmlFor="newCharacterWeapon">Kick</label>
        <input
          type="text"
          className="form-control"
          id="newCharacterWeapon"
          name="status"
          onChange={handleChange}
          value={state.kick}
        />
      </div>
      {/* Weapon */}
      <div className="form-group">
        <label htmlFor="newCharacterWeapon">Passe</label>
        <input
          type="text"
          className="form-control"
          id="newCharacterWeapon"
          name="status"
          onChange={handleChange}
          value={state.pass}
        />
      </div>
      {/* Weapon */}
      <div className="form-group">
        <label htmlFor="newCharacterWeapon">Marcação</label>
        <input
          type="text"
          className="form-control"
          id="newCharacterWeapon"
          name="status"
          onChange={handleChange}
          value={state.marking}
        />
      </div>
      {/* Weapon */}
      <div className="form-group">
        <label htmlFor="newCharacterWeapon">Dribble</label>
        <input
          type="text"
          className="form-control"
          id="newCharacterWeapon"
          name="status"
          onChange={handleChange}
          value={state.dribble}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Gravar
      </button>
    </form>
  );
}

export default AssessmentEdit;