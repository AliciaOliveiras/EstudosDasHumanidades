import ailtonKrenak from "../../core/assets/images/humanidades/ailtonKrenak.png";
import { useNavigate } from "react-router";

export default function AiltonKrenak() {
  const navigate = useNavigate();

  function handleBackButton() {
    navigate("/");
  }

  return (
    <>
      <button
        onClick={handleBackButton}
        style={{
          position: "absolute",
          backgroundColor: "#e23d8c",
          color: "white",
          padding: "0.5rem",
          borderRadius: "2rem",
          width: "6rem",
          margin: "1rem",
          right: 0,
          border: "none",
          top: "2rem",
        }}
      >
        Voltar
      </button>
      <div style={{ backgroundColor: "white", height: "100vh" }}>
        <img style={{ width: "100%" }} src={ailtonKrenak} alt="" />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1 style={{ padding: "1rem", marginTop: "1rem", color: "#00695c" }}>
            Quem é Ailton Krenak?
          </h1>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "1.5rem",
            textAlign: "justify",
          }}
        >
          <h6
            style={{
              fontSize: "20px",
              marginLeft: "3rem",
              marginRight: "3rem",
            }}
          >
            Ailton Alves Lacerda Krenak OMC, mais conhecido como Ailton Krenak,
            é um líder indígena, ambientalista, filósofo, poeta e escritor
            brasileiro da etnia indígena crenaque. Ailton é também professor
            Honoris Causa pela Universidade Federal de Juiz de Fora (UFJF) e é
            considerado uma das maiores lideranças do movimento indígena
            brasileiro, possuindo reconhecimento internacional.
          </h6>
          <br />
          <br />
          <p></p>
        </div>
      </div>
    </>
  );
}
