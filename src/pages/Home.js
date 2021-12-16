import React from "react";
import Carousel from "../components/Carousel";
import "../assets/styles/home.css";
import EstablishmentItem from "../components/EstablishmentItem";
import Footer from "../components/Footer";
import api from "../apis/api";
import { useState, useEffect } from "react";
function Home() {
  const [establishmentList, setEstablishmentList] = useState([]);

  useEffect(() => {
    async function fetchEstablishments() {
      try {
        const response = await api.get("/establishment/list");

        setEstablishmentList([...response.data]);
      } catch (err) {
        console.error(err);
      }
    }
    fetchEstablishments();
  }, []);

  return (
    <>
      <section className="filterSection">
        <h1 className="homeTitle">E-Sport</h1>
        <Carousel />
      </section>
      <section className="estblishmentsSection">
        {establishmentList.map((currenEstablishment) => (
          <EstablishmentItem
            key={currenEstablishment._id}
            {...currenEstablishment}
          />
        ))}
      </section>
      <Footer />
    </>
  );
}

export default Home;
