import { useNavigate } from "react-router";

export default function OQueFicou() {
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
          width: "8rem",
          margin: "1rem",
          right: 0,
          border: "none",
          top: "7rem",
        }}
      >
        Voltar
      </button>
      <div style={{ backgroundColor: "white", height: "100vh" }}>
        <div
          style={{
            backgroundColor: "#fff",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "justify",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              maxWidth: "80%",
              textAlign: "justify",
              padding: "1rem",
              marginLeft: "1rem",
              marginTop: "1rem",
            }}
          >
            <h5
              style={{
                display: "flex",
                justifyContent: "center",
                fontWeight: "bold",
                fontSize: "40px",
                textAlign: "center",
                marginBottom: "2rem",
              }}
            >
              Em que reside a importância de Krenak?
            </h5>
            <h5>
              A partir de tudo que vimos até aqui, chegamos à conclusão de que
              <span style={{color: '#e23d8c'}}> Ailton Krenak </span> é uma figura de grande relevância para a causa
              indígena e para além disso, para a causa humana. Ao trazer uma
              visão alternativa à colonial e capitalista para compreendermos a
              nossa relação enquanto humanos como parte da natureza, e não como
              entes separados, Krenak propõe um outro tipo de humanidade que não
              a humanidade zumbi que constantemente somos convocados a
              performar. É importante a alegria de reconhecer-se vivo, dançante,
              cantante. É fundamental entendermo-nos como seres de
              subjetividade, pluralidade: não somos todos iguais. As etnias
              indígenas, por exemplo, são múltiplas. Precisamos questionar qual
              tipo de humanidade acreditamos ser, para entendermos qual tipo de
              humanidade podemos e queremos nos tornar.
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}
