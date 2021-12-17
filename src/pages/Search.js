import React from "react";
import Carousel from "../components/Carousel";
import "../assets/styles/home.css";
import EstablishmentItem from "../components/EstablishmentItem";
import Footer from "../components/Footer";
import api from "../apis/api";
import { useState, useEffect } from "react";
function Search() {
  const [establishmentList, setEstablishmentList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    setIsLoading(true);
    async function fetchEstablishments() {
      try {
        const response = await api.get("/establishment/list");

        setEstablishmentList([...response.data]);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
        setIsLoading(false);
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
        {isLoading ? (
          <div className="mt-5 text-center">
            <div className="spinner-border text-success" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          establishmentList.map((currenEstablishment) => (
            <EstablishmentItem
              key={currenEstablishment._id}
              {...currenEstablishment}
            />
          ))
        )}
      </section>
      <Footer />
    </>
  );
}

export default Search;
