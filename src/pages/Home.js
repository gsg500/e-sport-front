import React from "react";
import Carousel from "../components/Carousel";
import "../assets/styles/home.css";
import EstablishmentItem from "../components/EstablishmentItem";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <section className="filterSection">
        <h1 className="homeTitle">E-Sport</h1>
        <Carousel />
      </section>
      <section className="estblishmentsSection">
        <EstablishmentItem />
        <EstablishmentItem />
        <EstablishmentItem />
        <EstablishmentItem />
        <EstablishmentItem />
      </section>
      <Footer />
    </>
  );
}

export default Home;
