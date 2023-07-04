import { useNavigate } from "react-router";

export default function CorpoProtesto(){

    const navigate = useNavigate(); 

    function handleBackButton(){
        navigate('/')
      }
      
    return(
        <h1>Corpo como ato de protesto</h1>
    )
}