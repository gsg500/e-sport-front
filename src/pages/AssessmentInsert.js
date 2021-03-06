import React, { useState } from "react";
import api from "../apis/api";

function AssessmentInsert(props) {
  const [state, setState] = useState({ data: "", velocity: "", kick: "", pass: "", marking: "", dribble: "",user: ""});

  function handleChange(event) {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();    
    await api.post("/assessmentuser/new", state);
  
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Avaliação de Jogador</h1>
      {/* Name */}
      <div className="form-group">
        <label htmlFor="newCharacterName">Jogador</label>
        <input
          name="user"
          type="text"
          className="form-control"
          id="user"
          onChange={handleChange}
          value={state.user}
        />
      </div>
      {/* Occupation */}
      <div className="form-group">
        <label htmlFor="newCharacterOccupation">Data</label>
        <input
          type={Date}
          className="form-control"
          id="data"
          name="data"
          onChange={handleChange}
          value={state.data}
        />
      </div>
      {/* Weapon */}
      <div className="form-group">
        <label htmlFor="newCharacterWeapon">Velocity</label>
        <input
          type="text"
          className="form-control"
          id="velocity"
          name="velocity"
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
          id="kick"
          name="kick"
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
          id="pass"
          name="pass"
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
          id="marking"
          name="marking"
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
          id="dribble"
          name="dribble"
          onChange={handleChange}
          value={state.dribble}
        />
      </div>
      <br/>
      <button type="submit" className="btn btn-primary">
        Gravar
      </button>      
    </form>
  );
}

export default AssessmentInsert;