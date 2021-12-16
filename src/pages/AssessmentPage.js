import React from "react";
import Carousel from "../components/Carousel";
import "../assets/styles/home.css";
import AssessmentUser from "../components/AssessmentUser";
import Footer from "../components/Footer";
import api from "../apis/api";
import { useState, useEffect } from "react";

function AssessmentPage() {
  const [Assessment, setAssessment] = useState([]);

  useEffect(() => {
    async function fetchAssessment() {
      try {
        const response = await api.get("assessmentuser/list");

        setAssessment([...response.data]);
      } catch (err) {
        console.error(err);
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
      <section className="establishmentsSection">
        {Assessment.map((currenAssessment) => (
          <AssessmentUser
            key={currenAssessment.user}
            {...currenAssessment}
          />
        ))}
      </section>
      <Footer />
    </>
  );
}

export default AssessmentPage;