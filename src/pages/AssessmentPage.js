import React from "react";
import Carousel from "../components/Carousel";
import "../assets/styles/home.css";
import AssessmentUser from "../components/AssessmentUser";
import Footer from "../components/Footer";
import api from "../apis/api";
import { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card'

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
        
      <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
    {Assessment.map((currenAssessment) => (
          <AssessmentUser
            key={currenAssessment.user}
            {...currenAssessment}
          /> 
        ))}
    </Card.Text>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>              
      </section>
      <Footer />      
    </>
  );
}

export default AssessmentPage;