import * as React from "react";

function Footer() {
  return (
    <div
      style={{
        backgroundColor: "#078272",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
        width: "100%",
        position: 'relative',
        bottom: 0,
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "space-around",
          width: '100%',
          color: "white",
          textAlign: 'center'
        }}
      >
        <h5 color="white">
          Alícia
        </h5>

        <h5 color="white">
          Ana Clara
        </h5>

        <h5 color="white">
          Clara
        </h5>

        <h5  color="white">
          Cibele
        </h5>

        <h5 color="white">
          Victoria
        </h5>
      </div>
    </div>
  );
}

export default Footer;
