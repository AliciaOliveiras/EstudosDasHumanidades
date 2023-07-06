import { useNavigate } from "react-router";
import * as React from "react";
import Livro from "../../core/assets/images/humanidades/livro.png";
import Palavra2 from "../../core/assets/images/humanidades/palavras2.png";

export default function VisaoHumanidade() {
  const navigate = useNavigate();

  function handleBackButton() {
    navigate("/");
  }

  return (
    <>
      <div style={{ backgroundColor: "black", height: "100vh" }}>
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
        <div style={{ textAlign: "justify"}}>
          <div
            style={{
              display: "flex",
            }}
          >
            <img style={{ width: "95%" }} src={Palavra2} alt="" />
          </div>
          <div style={{marginBottom: "5rem" }}>
            <h6
              style={{
                color: "white",
                marginLeft: "5rem",
                marginRight: "5rem",
                fontSize:'20px'
              }}
            >
              Fazendo um paralelo entre a concepção de humanidade revelada por
              Krenak e as diversas concepções que estudamos ao longo do
              componente acerca da evolução de sentido da humanidade, vemos que
              se trata de um conceito permeado de contextualização social.
              <br />
              <br />
              <div
                style={{
                  backgroundColor: "#e23d8c",
                  width: "100%",
                  height: "3px",
                }}
              ></div>
              <br />
              Isto porque, atribui ao sentido de humanidade, a uma ideia
              reducionista, limitada, de que todos seríamos iguais e que
              almejamos o mesmo fim, enquanto que muitos lutam pelo
              reconhecimento de sua diversidade e portanto da distinção face ao
              outro. A ideia de que a humanidade é um grupo homogêneo, é
              incorrer em negações de direitos, assim como seria o equivalente a
              reproduzir a tese de que o indígena aculturado perderia o seu
              status, o que leva a perda do direito a pretender proteção e
              direitos.
              <br />
              <br />
              <div
                style={{
                  backgroundColor: "#e23d8c",
                  width: "100%",
                  height: "3px",
                }}
              ></div>
              <br />
              Um segundo ponto que vale levantar é o entendimento de que
              humanidade seria todo aquele aparato governamental, burocrático,
              ligado a interesses econômicos, "pragmáticos", enquanto por outro
              lado, a si humanidade resistiria por serem aqueles que não
              incluídos no conceito de humanidade, vivem ligados a terra,
              entendendo a importância de sua manutenção e não da expiação que é
              praticada pelas indústrias
            </h6>
          </div>
        </div>
      </div>
    </>
  );
}
