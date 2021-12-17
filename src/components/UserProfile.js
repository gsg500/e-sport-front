import Footer from "./Footer";
import api from "../apis/api";
import { useState, useEffect } from "react";

import "../assets/styles/establishmentDetail.css";
export default function UserProfile(props) {
  const [userData, setUserData] = useState({});
 
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
                src={userData.imageUrl}
                alt={userData.name}
                className="establishmentDetailImage"
              />
            </div>
            <div className="establishmentDetailTextConteiner">
              <h5 className="establishmentDetailTitle">
                {userData.name}
              </h5>
              
              <p className="establishmentDetailText">{userData.email}</p>

            </div>
          </div>
        </>
      )}

      <Footer />
    </div>
  );
}