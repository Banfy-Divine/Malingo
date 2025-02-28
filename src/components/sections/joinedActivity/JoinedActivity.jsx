import React from "react";

const JoinedActivity = ({ image, title, link }) => {
  return (
    <div style={Styles.activity}>
      <img src={image} alt={title} style={Styles.image} />
      <p style={Styles.title}>{title}</p>
      <button>
        <a href={link}>Join Whatsapp Group</a>
      </button>
    </div>
  );
};

export default JoinedActivity;

const Styles = {
  activity: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "5px",
    margin: "5px",
    // border: "1px solid #ccc",
    borderRadius: "5px",
    paddingTop: "0",
  },
  image: {
    height: "30px",
    width: "30px",
    borderRadius: "50%",
    paddingTop: "0",
  },
  title: {
    fontSize: "1rem",
    fontWeight: "regular",
    paddingTop: "0",
  },
};
