import { useNavigate } from "react-router";
import { Grid, Box } from "@mui/material";
import Pintura1 from "../../core/assets/images/humanidades/pintura1.png";
import Pintura2 from "../../core/assets/images/humanidades/pintura2.png";
import Pintura3 from "../../core/assets/images/humanidades/pintura3.png";

export default function CorpoProtesto() {
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
        {" "}
        Voltar
      </button>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#078272",
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
                fontSize: "30px",
                textAlign: "center",
                marginBottom: "2rem",
              }}
            >
              Corpo como ato de protesto
            </h5>
            <h6 style={{ marginBottom: "1rem" }}>
              Ao fim da ditadura, no período da Assembléia Constituinte de 1987
              - onde se debatia um novo projeto de Constituição, pós regime
              militar - lideranças indígenas caminharam até Brasília para
              apresentar as suas demandas de inclusão na nova democracia que
              estava para se consolidar.
            </h6>
            <img
              src={Pintura1}
              alt="ailton krenak"
              style={{
                width: "100%",
                marginBottom: "1rem",
              }}
            />
            <h6 style={{ marginBottom: "1rem" }}>
              As demandas consistiam essencialmente no reconhecimento histórico
              dos direitos dos povos indígenas como originários daquela terra:
              demarcação das terras indígenas, vedação ao garimpo e mineração,
              projeto de futuro.
            </h6>
            <img
              src={Pintura2}
              alt="ailton krenak"
              style={{
                width: "100%",
                marginBottom: "1rem",
              }}
            />
            <h6 style={{ marginBottom: "1rem" }}>
              Ailton Krenak atuou junto com outros nomes como Cacique Raoni
              Metuktire, Mário Juruna (que posteriormente se tornou o primeiro
              parlamentar indígena do Brasil), enquanto porta-vozes dessas
              demandas. Houve inclusive um ato de manifestação no Congresso
              Nacional, em que, enquanto falava, Krenak pintava o rosto de
              preto, com tinta de jenipapo. A atitude representava o luto do
              povo indígena face à completa desassistência e cegueira do Estado
              com relação às demandas daquela comunidade.
            </h6>
            <img
              src={Pintura3}
              alt="ailton krenak"
              style={{
                width: "100%",
                marginBottom: '1rem'
              }}
            />
            <h6>
              Criticava-se o  tratamento diferenciado que o Governo promovia
              entre indígenas aculturados - aqueles que falavam um pouco de
              português e reconheciam símbolos nacionais - e indígenas não
              aculturados - aqueles que ainda permaneciam nas tradições e
              hábitos de seu povo. Essa distinção tentava incutir a ideia de
              que, o indígena que já não mais manteria traços de sua cultura, ou
              que, embora mantendo sua cultura, já dominaria os signos da
              sociedade não indígena, deixaria de ter o status de índigena e
              portanto, perderia o direito enquanto reconhecimento de povo
              originário e demais direitos correlatos (Ex., demarcação de
              terras).
            </h6>
          </div>
        </div>
      </div>
    </>
  );
}
