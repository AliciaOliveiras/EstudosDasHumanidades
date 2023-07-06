import { useNavigate } from "react-router";
import * as React from "react";
import Livro from "../../core/assets/images/humanidades/livro.png";

export default function VisaoHumanidade() {
  const navigate = useNavigate();

  function handleBackButton() {
    navigate("/");
  }

  return (
    <>
      <div style={{backgroundColor: 'black', height: '100vh'}}> 
        <button
          onClick={handleBackButton}
          style={{
            position: "absolute",
            backgroundColor: "#e23d8c",
            color: "white",
            padding: "0.5rem",
            borderRadius: "2rem",
            width: "8rem",
            margin: "1rem",
            right: 0,
            border: "none",
            top: "7rem",
          }}
        >
          Voltar
        </button>
        <div style={{ justifyContent: 'center' , alignItems: 'center', display: 'flex', padding: '1rem'}}>
          <img style={{ width: "50%"}} src={Livro} alt="" />
        </div>
      </div>
    </>
  );
}
