import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../apis/api";

function EstablishmentDelete() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function deleteEstablishment() {
      try {
        await api.delete(`/${id}`);
        navigate("/search");
      } catch (err) {
        console.log(err);
      }
    }
    deleteEstablishment();
  }, [id, navigate]);

  return <div>Deletando...</div>;
}

export default EstablishmentDelete;


/* --------

import React, { useEffect } from "react";
import {useParams} from 'react-router-dom';
import api from "../apis/api";

function EstablishmentDelete(props) {
  const { id } = useParams(props);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.delete(`/${id}`
        );
        console.log(response);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, [id]);

  return <p>Registro Excluido</p>;
}

export default EstablishmentDelete;

*/