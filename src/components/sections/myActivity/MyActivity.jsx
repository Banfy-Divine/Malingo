import React from "react";
import "./MyActivity.css";

const MyActivity = ({ image, title }) => {
  return (
    <div className="my-activity">
      <img src={image} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export default MyActivity;
