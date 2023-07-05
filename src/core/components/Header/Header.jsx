import React from "react";
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function Header() {

  return (
<>
<div style={{backgroundColor: '#078272', display: 'flex', justifyContent:'center', alignItems: "center", padding: '1rem', color: 'white'}} position="static">
      <div style={{display: 'grid'}} >
      <h3 style={{fontFamily: 'Poppins, sans-serif', fontSize: '1.5rem'}}>
          HACA03 - Estudos das Humanidades
        </h3>
      </div>
    </div>
</>
  );
}

export default Header;
