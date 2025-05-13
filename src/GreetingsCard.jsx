import React from "react";
import "./index.css";

const GreetingCard = () => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-front">
          <h1>🌸 మదర్స్ డే శుభాకాంక్షలు! ❤️</h1>
          <p className="emoji">💐 🌷 🌹 🌺 🌼</p>
        </div>
        <div className="card-back">
          <p className="message">
            నా ప్రియమైన అమ్మ పద్మగారికి,<br /><br />
            మీరు చూపిన ప్రేమ, సంరక్షణ,
            మరియు బలహీన సమయంలో ఇచ్చిన మద్దతు అనిర్వచనీయం.
            మీ లాంటి అమ్మ నాకుంటే నా జీవితం సార్థకం అయింది.
          </p>
          <p className="footer">ప్రేమతో</p>
          <p className="signature">— మీ బిడ్డ 💖</p>
        </div>
      </div>
    </div>
  );
};

export default GreetingCard;
