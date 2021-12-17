import Footer from "./Footer";
import api from "../apis/api";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "../assets/styles/establishmentDetail.css";
export default function UserProfile(props) {
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    async function fetchUser() {
      try {
        const response = await api.get(`/user/${props.id}`);
        setUserData({ ...response.data });

        setIsLoading(false);
      } catch (err) {
        console.error(err);
        setIsLoading(false);
      }
    }

    fetchUser();
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
                src={userData.pictureUrl}
                alt={userData.name}
                className="establishmentDetailImage"
              />
            </div>
            <div className="establishmentDetailTextConteiner">
              <h5 className="establishmentDetailTitle">{userData.name}</h5>

              <p className="establishmentDetailText">{userData.email}</p>
            </div>
          </div>
        </>
      )}
      <div className="text-center">
      <button
        className="btn btn-danger m-2"
        onClick={() => navigate('/delete-user')}
      >
        Deletar Usuário
      </button>
      <button
        className="btn btn-warning m-2"
        onClick={() => navigate('/edit-user')}
      >
        Editar Usuário
      </button>
      </div>
      <Footer />
    </div>
  );
}
