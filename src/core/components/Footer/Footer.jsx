import * as React from "react";
import { Box } from "@mui/material";
import {
  Container,
  Typography,
} from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#078272",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
        width: "100%",
      }}
      component="footer"
    >
      <Container
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "space-between",
        }}
        maxWidth="lg"
      >
        <Typography variant="body3" color="white">
          Alícia
        </Typography>

        <Typography variant="body3" color="white">
          Ana Clara
        </Typography>

        <Typography variant="body3" color="white">
          Clara
        </Typography>

        <Typography variant="body3" color="white">
          Cibele
        </Typography>

        <Typography variant="body3" color="white">
          Victoria
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
