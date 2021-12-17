import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../apis/api";

function AssessmentDelete(props) {
  const { id } = useParams(props);

  useEffect(() => {
    async function fetchData() {
      try {
        await api.delete(`/assessmentuser/${id}`);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, [id]);

  return <p>Registro Excluido</p>;
}

export default AssessmentDelete;
