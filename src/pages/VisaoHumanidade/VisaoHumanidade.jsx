import { useNavigate } from "react-router";
import * as React from "react";
import Palavra from "../../core/assets/images/humanidades/palavras.png";

export default function VisaoHumanidade() {
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
              <div style={{ alignItems: 'center' }}>
                <img style={{display: 'flex', justifyContent: "center",  width: "80vw", marginTop: '-1rem' }} src={Palavra} alt="" />
              </div>

              <h6 style={{ marginBottom: "1rem", marginTop: '1rem'}}>
                Fazendo um paralelo entre a concepção de humanidade revelada por
                Krenak e as diversas concepções que estudamos ao longo do
                componente acerca da evolução de sentido da humanidade, temos
                que se trata de um conceito permeado de contextualização social.
              </h6>
              <div style={{height: '3px', backgroundColor: '#e23d8c', margin: '2rem'}}></div>
              <h6 style={{ marginBottom: "1rem" }}>
                Isto porque, atribui ao sentido de humanidade, a uma ideia
                reducionista, limitada, de que todos seríamos iguais e que
                almejamos o mesmo fim, enquanto que muitos lutam pelo
                reconhecimento de sua diversidade e portanto da distinção face
                ao outro. A ideia de que a humanidade é um grupo homogêneo, é
                incorrer em negações de direitos, assim como seria o equivalente
                a reproduzir a tese de que o indígena aculturado perderia o seu
                status, o que leva a perda do direito a pretender proteção e
                direitos.
              </h6>
              <div style={{height: '3px', backgroundColor: '#e23d8c', margin: '2rem'}}></div>
              <h6 style={{ marginBottom: "2rem" }}>
                Um segundo ponto que vale levantar é o entendimento de que
                humanidade seria todo aquele aparato governamental, burocrático,
                ligado a interesses econômicos, "pragmáticos", enquanto por
                outro lado, a si humanidade resistiria por serem aqueles que não
                incluídos no conceito de humanidade, vivem ligados a terra,
                entendendo a importância de sua manutenção e não da expiação que
                é praticada pelas indústrias.
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
