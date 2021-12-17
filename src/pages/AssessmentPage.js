import React from "react";
import Carousel from "../components/Carousel";
import "../assets/styles/home.css";
import AssessmentUser from "../components/AssessmentUser";
import Footer from "../components/Footer";
import api from "../apis/api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function AssessmentPage() {
  const [Assessment, setAssessment] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    async function fetchAssessment() {
      try {
        const response = await api.get("assessmentuser/list");

        setAssessment([...response.data]);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
        setIsLoading(false);
      }
    }
    fetchAssessment();
  }, []);

  return (
    <>
      <section className="filterSection">
        <h1 className="homeTitle">E-Sport</h1>
        <Carousel />
      </section>

      <Link to="/avaliacao-new" className="footerLink">
            <p className="footerText">Adicionar Avaliação</p>
          </Link>

      <section className="estblishmentsSection">
        {isLoading ? (
          <div className="mt-5 text-center">
            <div className="spinner-border text-success" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          Assessment.map((currenAssessment) => (
            <AssessmentUser
              key={currenAssessment.user}
              {...currenAssessment}
            />
          ))
        )}
      </section>
      <Footer />
    </>
  );
}

export default AssessmentPage;