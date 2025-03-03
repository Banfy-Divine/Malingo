import React from "react";
import "./PendingActivity.css";

const PendingActivity = ({ image, title }) => {
  return (
    <div className="pending-activity">
      <img src={image} alt={title} />
      <p>{title}</p>
      <div className="pending-actions">
        <button className="accept">Accept</button>
        <button className="decline">Decline</button>
      </div>
    </div>
  );
};

export default PendingActivity;
