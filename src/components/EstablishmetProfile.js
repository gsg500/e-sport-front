import Footer from "./Footer";
import api from "../apis/api";
import { useState, useEffect } from "react";
import "../assets/styles/establishmentDetail.css";
import { useNavigate } from "react-router-dom";
export default function EstablishmentDetails(props) {
  const [establishmentData, setEstablishmentData] = useState({});
  const [establishmentAdress, setEstablishmentAdress] = useState({})
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setIsLoading(true);
    async function fetchEstablishments() {
      try {
        const response = await api.get(`/establishment/${props.id}`);
        setEstablishmentData({ ...response.data });
        setEstablishmentAdress({ ...response.data.adress });
        setIsLoading(false);
      } catch (err) {
        console.error(err);
        setIsLoading(false);
      }
    }

    fetchEstablishments();

  }, [props.id]);

  return (
    <div className="">
      {isLoading ? (
        <div className="mt-5 text-center">
          <div className="spinner-border text-success" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <div className="establishmentDetailConteiner">
            <div className="establishmentDetailImageConteiner">
              <img
                src={establishmentData.pictureUrl}
                alt={establishmentData.name}
                className="establishmentDetailImage"
              />
            </div>
            <div className="establishmentDetailTextConteiner">
              <h5 className="establishmentDetailTitle">
                {establishmentData.name}
              </h5>
              <p className="establishmentDetailText">
              Rua {establishmentAdress.street} nº {establishmentAdress.number}, Bairro{" "}
          {establishmentAdress.Bairro}, {establishmentAdress.city}-{establishmentAdress.state}
              </p>
              <p className="establishmentDetailText">{establishmentData.phone}</p>
              <p className="establishmentDetailText">{establishmentData.email}</p>
              <p className="establishmentDetailText">
                {establishmentData.fieldTypes}
              </p>
            </div>
          </div>
        </>
      )}
      <div className="text-center">
      <button
        className="btn btn-danger m-2"
        onClick={() => navigate('/delete-establishment')}
      >
        Deletar Estabelecimento
      </button>
      <button
        className="btn btn-warning m-2"
        onClick={() => navigate('/edit-establishment')}
      >
        Editar Estabelecimento
      </button>
      </div>
      <Footer />
    </div>
  );
}