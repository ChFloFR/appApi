import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="error-page-section">
      <div className="erro-container">
        <h2>404</h2>
        <p>page non trouvée</p>
      </div>
      <Link to="/" class='btn btn-primary'>retour</Link>
    </section>
  );
};

export default Error;
