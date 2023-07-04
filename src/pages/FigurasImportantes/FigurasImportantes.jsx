import { useNavigate } from "react-router";

export default function FigurasImportantes(){
    
    const navigate = useNavigate(); 

    function handleBackButton(){
        navigate('/')
      }

    return(
        <h1>Figuras Importantes</h1>
    )
}