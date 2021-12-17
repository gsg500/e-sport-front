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