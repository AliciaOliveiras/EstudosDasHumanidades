import { useNavigate } from "react-router";
import Floral from "../../core/assets/images/humanidades/floral.png";
import Palavras from "../../core/assets/images/humanidades/palavras.png";

export default function OQueFicou() {
  const navigate = useNavigate();

  function handleBackButton() {
    navigate("/");
  }

  return (
    <>
          <div style={{backgroundColor: 'white', height: '100vh'}}> 
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
      <div
        style={{
          backgroundColor: "white",
          height: "100%",
          justifyContent: "center",
          textAlign: 'justify',
          marginRight: '4rem',
          marginLeft: '4rem'
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "1rem",
          }}
        >
          <img style={{ width: "50%" }} src={Floral} alt="" />
        </div>

          <h5
            style={{
              display: "flex",
              justifyContent: "center",
              fontWeight: "bold",
              fontSize: "30px",
              marginBottom: "2rem",
            }}
          >
            Em que reside a importância de Krenak?
          </h5>
            <h5>
              A partir de tudo que vimos até aqui, chegamos à conclusão de que
              <span style={{ color: "#e23d8c" }}> Ailton Krenak </span> é uma
              figura de grande relevância para a causa indígena e para além
              disso, para a causa humana. Ao trazer uma visão alternativa à
              colonial e capitalista para compreendermos a nossa relação
              enquanto humanos como parte da natureza, e não como entes
              separados, Krenak propõe um outro tipo de humanidade que não a
              humanidade zumbi que constantemente somos convocados a performar.
              É importante a alegria de reconhecer-se vivo, dançante, cantante.
              É fundamental entendermo-nos como seres de subjetividade,
              pluralidade: não somos todos iguais. As etnias indígenas, por
              exemplo, são múltiplas. Precisamos questionar qual tipo de
              humanidade acreditamos ser, para entendermos qual tipo de
              humanidade podemos e queremos nos tornar.
            </h5>
        </div>
        </div>
    </>
  );
}
