import { useNavigate } from "react-router";

export default function OQueFicou(){
    
    const navigate = useNavigate(); 

    function handleBackButton(){
        navigate('/')
      }

    return(
        <h1>O que ficou?</h1>
    )
}