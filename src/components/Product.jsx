import React from "react";

export default function Product() {
  const username = localStorage.getItem("user");

  return (
    <div style={{ textAlign: "center", marginTop: 50, fontSize: "20px" }}>
      Welcome to the Online Store{username ? `, ${username}` : ""}
    </div>
  );
}