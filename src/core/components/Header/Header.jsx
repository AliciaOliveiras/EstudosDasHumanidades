import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import styles from './Header.module.css'

function Header() {

  return (
<>
<AppBar style={{backgroundColor: '#078272', display: 'flex', justifyContent:'center', alignItems: "center", padding: '1rem'}} position="static">
      <Toolbar style={{display: 'grid'}} >
      <Typography style={{fontFamily: 'Poppins, sans-serif', fontSize: '1.5rem'}}>
          HACA03 - Estudos das Humanidades
        </Typography>
      </Toolbar>
    </AppBar>
</>
  );
}

export default Header;
