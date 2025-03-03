import React from "react";

const PendingActivity = ({ title, image }) => {
  return (
    <div style={Styles.PendingActivity}>
      <img
        src={image}
        alt={title}
        style={Styles.image}
      />
      <p style={Styles.title} >{title}</p>
    </div>
  );
};

export default PendingActivity;


const Styles = {
  PendingActivity: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "5px",
    paddingTop: "0",
    margin: "5px",
    marginTop: "0",
    // border: "1px solid #ccc",
    borderRadius: "5px",
  },
  image: {
    height: "30px",
    width: "30px",
    borderRadius: "50%",
    marginTop: "0",
    paddingTop: "0",
    marginRight: "10px",
  },
  title: {
    fontSize: "1rem",
    fontWeight: "regular",
    // marginTop: "0",
    paddingTop: "0",
  },
};