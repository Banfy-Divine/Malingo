import React from "react";

const PostCard = ({ post }) => {
  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <div>
          <h3 style={styles.name}>{post.name}</h3>
          <p style={styles.timestamp}>{post.timestamp}</p>
        </div>
      </div>
      <p style={styles.description}>{post.description}</p>
      {post.image && (
        <img src={post.image} alt="Post" style={styles.postImage} />
      )}
      <p style={styles.members}>{post.members}</p>
      <div style={styles.actions}>
        <button style={styles.button}>Join</button>
        <button style={styles.button}>View Details</button>
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    marginBottom: "16px",
    backgroundColor: "#fff",
    maxWidth: "1500px",
    margin: "16px auto",
    marginLeft: "10px",
    marginRight: "10px",
  },
  header: {
    display: "flex",
    alignItems: "center",
    marginBottom: "12px",
  },
  name: {
    margin: "0",
    fontSize: "16px",
    fontWeight: "600",
  },
  timestamp: {
    margin: "0",
    fontSize: "12px",
    color: "#666",
  },
  description: {
    fontSize: "14px",
    marginBottom: "12px",
  },
  members: {
    fontSize: "14px",
    marginBottom: "12px",
    textAlign: "right",
    marginTop: "0",
  },
  postImage: {
    width: "100%",
    borderRadius: "8px",
    marginBottom: "12px",
  },
  actions: {
    display: "flex",
    justifyContent: "space-around",
    borderTop: "1px solid #ddd",
    paddingTop: "12px",
  },
  button: {
    border: "none",
    backgroundColor: "transparent",
    fontSize: "14px",
    color: "#666",
    cursor: "pointer",
  },
};

export default PostCard;
