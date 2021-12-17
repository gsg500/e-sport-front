import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../apis/api";

export default function EstablishmentDelete() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState("");
  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    const parsedStoredUser = JSON.parse(storedUser || '""');
    setCurrentUser(parsedStoredUser.user);
  }, []);
  useEffect(() => {
    async function fetchData() {
      try {
        await api.delete(`/establishment/${currentUser._id}`);
        navigate("/login");
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, [currentUser._id, navigate]);

  return <p>Registro Excluido</p>;
}