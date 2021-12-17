import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import UserProfile from "../components/UserProfile"
import EstablishmentProfile from "../components/EstablishmetProfile"

export default function Profile() {
  const [currentUser, setCurrentUser] = useState("");
  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    const parsedStoredUser = JSON.parse(storedUser || '""');
    setCurrentUser(parsedStoredUser.user);
    
  }, []);
  return (
    <div>
      {currentUser.userType === "person" ? <UserProfile id={currentUser._id} /> : <EstablishmentProfile id={currentUser._id} />}
      <Footer />
    </div>
  );
}
