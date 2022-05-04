import React from "react";
import '../styles/NotFound.scss';


const NotFound = () => {
  return (
    <div>
      <div className="notFound">
        <div className="form-container">
          <img className="notFoundLogo" src="https://www.pngplay.com/wp-content/uploads/8/Space-Astronaut-Transparent-Background.png" alt="" />
          <img className="foundLogo" src="https://www.pngmart.com/files/15/Floating-Astronaut-PNG-Picture.png" alt="" />
          <h1 className="title-NotFound">404</h1>
          <p className="subtitle">
            PAGE NOT FOUND
          </p>
          <button className="primary-button back-button">Go Back Home</button>
        </div>
      </div>
      
    </div>
  );
};

export default NotFound;
