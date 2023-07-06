import { useNavigate } from "react-router";

export default function MovimentoIndigena(){
    
    const navigate = useNavigate(); 

    function handleBackButton(){
        navigate('/')
      }

    return(
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


      </div>
       </>
    )
}