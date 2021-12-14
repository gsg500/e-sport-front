import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="text-center">
 
      <h1>React IronPlate</h1>
      <p>This is the homepage</p>
      <div className="d-flex flex-column align-items-center">
        <Link className="btn btn-lg btn-primary" to="/auth/signup">
          Signup here!
        </Link>
      </div>
    </div>
  );
}

export default Home;