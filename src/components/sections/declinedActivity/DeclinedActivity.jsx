import React from "react";

const DeclinedActivity = ({ image, title }) => {
  return (
    <div style={Styles.DeclinedActivity}>
      <img src={image} alt={title} style={Styles.image} />
      <p style={Styles.title} >{title}</p>
    </div>
  );
};

export default DeclinedActivity;

const Styles = {
  DeclinedActivity: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "5px",
    margin: "5px",
    // border: "1px solid #ccc",
    borderRadius: "5px",
  },
  image: {
    height: "30px",
    width: "30px",
    borderRadius: "50%",
  },
  title: {
    fontSize: "1rem",
    fontWeight: "regular",
  },
};