import React from "react";
import "./DeclinedActivity.css";

const DeclinedActivity = ({ image, title }) => {
  return (
    <div className="declined-activity">
      <img src={image} alt={title} />
      <p>{title}</p>
      <button>Undo</button>
    </div>
  );
};

export default DeclinedActivity;
