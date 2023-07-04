import { useNavigate } from "react-router";

export default function VisaoHumanidade(){

    const navigate = useNavigate(); 

    function handleBackButton(){
        navigate('/')
      }
      
    return(
        <h1>Visão de Humanidade: Ailton Krenak</h1>
    )
}