import React from "react";
import "./JoinedActivity.css";

const JoinedActivity = ({ image, title, link }) => {
  return (
    <div className="joined-activity">
      <img src={image} alt={title} />
      <p>{title}</p>
      <button>
        <a href={link}>Join Whatsapp Group</a>
      </button>
    </div>
  );
};

export default JoinedActivity;
