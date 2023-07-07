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
      <div style={{ backgroundColor: "black" }}>
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
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
          }}
        >
          <div
            style={{
              width: "85%",
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
                maxWidth: "100%",
                textAlign: "justify",
                marginTop: "1rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "70vw",
                  }}
                  src={Floral}
                  alt=""
                />
              </div>

              <div
                style={{
                  color: "#e23d8c",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "justify",
                  marginBottom: '1rem',
                  marginTop: '-1rem'
                }}
              >
                <h3 style={{fontWeight: 'bold'}}>Em que reside a importância de Krenak?</h3>
              </div>

              <h6 style={{ marginBottom: "1rem" }}>
                A partir de tudo que vimos até aqui, chegamos à conclusão de que
                Ailton Krenak é uma figura de grande relevância para a causa
                indígena e para além disso, para a causa humana. Ao trazer uma
                visão alternativa à colonial e capitalista para compreendermos a
                nossa relação enquanto humanos como parte da natureza, e não
                como entes separados, Krenak propõe um outro tipo de humanidade
                que não a humanidade zumbi que constantemente somos convocados a
                performar. É importante a alegria de reconhecer-se vivo,
                dançante, cantante.
              </h6>
              <div
                style={{
                  height: "3px",
                  backgroundColor: "#e23d8c",
                  margin: "2rem",
                }}
              ></div>
              <h6 style={{ marginBottom: "1rem" }}>
                É fundamental entendermo-nos como seres de subjetividade,
                pluralidade: não somos todos iguais. A ideia de que os humanos
                são descolados da terra atua nessa supressão da diversidade,
                seja essa diversidade de formas de vida, de existência e/ou de
                hábitos. As etnias indígenas, por exemplo, são múltiplas.
                Precisamos questionar qual tipo de humanidade acreditamos ser,
                para entendermos qual tipo de humanidade podemos e queremos nos
                tornar.
              </h6>
              <div
                style={{
                  height: "3px",
                  backgroundColor: "#e23d8c",
                  margin: "2rem",
                }}
              ></div>
              <h6 style={{ marginBottom: "4rem" }}>
                Que possamos, mediante a leitura de Ailton Krenak, recuperar a
                consciência, ou talvez adquirir pela primeira vez, de que
                existem interesses muito pertinentes ligados às grandes
                corporações, que agem para nos afastar do grande organismo do
                qual fazemos parte: a natureza. A crítica trazida por Krenak é
                atual, convoca temas como a medicalização da sociedade e a
                alienação sobre a criação de desejos de consumo, e nos faz
                pensar para além da lógica na qual estamos imersos.
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
