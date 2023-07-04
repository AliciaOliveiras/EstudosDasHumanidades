import { useNavigate } from "react-router";

export default function MovimentoIndigena(){
    
    const navigate = useNavigate(); 

    function handleBackButton(){
        navigate('/')
      }

    return(
        <h1>Movimento Indígena</h1>
    )
}