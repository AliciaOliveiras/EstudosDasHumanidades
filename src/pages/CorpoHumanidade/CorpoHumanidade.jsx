import { useNavigate } from "react-router";

export default function CorpoHumanidade() {
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
          backgroundColor: "white",
        }}
      >
        <div
          style={{
            width: "85%",
            backgroundColor: "white",
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
              padding: "1rem",
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
                color: "#078272",
              }}
            >
              Corpo na Humanidade
            </h5>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                style={{ width: "100vw" }}
                src="https://www.revistaprosaversoearte.com/content/uploads/2021/09/Ailton-Krenak.-foto-Guito-Moreto-.-Ag.-O-Globo-1068x464.jpg"
                alt=""
              />
            </div>

            <h6
              style={{
                marginBottom: "1rem",
                marginTop: "2rem",
                lineHeight: '23px'
              }}
            >
              Na perspectiva de Ailton Krenak, o corpo é compreendido como uma
              expressão individual, um ponto de conexão com o mundo ao nosso
              redor, uma interface entre a individualidade e o meio ambiente.
              Assim, a Humanidade, na sua visão, está relacionada a uma
              consciência coletiva que valoriza e protege a vida em todas as
              suas manifestações. Portanto, a relação entre o corpo e a
              humanidade está profundamente ligada à relação entre os seres
              humanos e a natureza, isto é, o corpo humano não deve ser visto
              como algo separado ou superior ao mundo natural, mas sim como
              parte integrante da teia da vida. Krenak crítica a visão ocidental
              que separa o corpo humano do mundo natural, tratando-o como uma
              entidade distinta e superior, essa visão dualista e hierárquica
              tem levado a uma série de problemas, incluindo a exploração
              desenfreada dos recursos naturais, a destruição do meio ambiente e
              a alienação do ser humano em relação à sua própria essência. Ele
              afirma que, admitir a nossa interdependência com a natureza
              implica em abandonar a maternidade utilitária que considera o
              corpo humano apenas como um instrumento de produtividade.
              Reconhecer a relação entre o corpo e a humanidade significa
              reconectar-se com a terra, compreender a tolerância do equilíbrio
              ecológico e adotar uma postura de responsabilidade e cuidado em
              relação ao meio ambiente, sendo assim, a saúde e o bem-estar
              humanos estão intrinsecamente ligados à saúde e ao equilíbrio do
              planeta como um todo.
            </h6>
          </div>
        </div>
      </div>
    </>
  );
}
