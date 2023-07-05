import React from "react";
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function Header() {

  return (
<>
<div style={{backgroundColor: '#078272', display: 'flex', justifyContent:'center', alignItems: "center", padding: '1rem', color: 'white'}} position="static">
      <Toolbar style={{display: 'grid'}} >
      <Typography style={{fontFamily: 'Poppins, sans-serif', fontSize: '1.5rem'}}>
          HACA03 - Estudos das Humanidades
        </Typography>
      </Toolbar>
    </div>
</>
  );
}

export default Header;
