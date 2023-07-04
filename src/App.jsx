import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import Header from "./core/components/Header/header";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Footer from "./core/components/Footer/Footer";
import AiltonKrenak from "./pages/AiltonKrenak/AiltonKrenak";
import MovimentoIndigena from "./pages/MovimentoIndigena/MovimentoIndigena";
import CorpoProtesto from "./pages/CorpoProtesto/CorpoProtesto";
import FigurasImportantes from "./pages/FigurasImportantes/FigurasImportantes";
import VisaoHumanidade from "./pages/VisaoHumanidade/VisaoHumanidade";
import OQueFicou from "./pages/OQueFIcou/OQueFicou";

const theme = createTheme({
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/ailtonKrenak" element={<AiltonKrenak />} />
            <Route path="/movimentoIndigena" element={<MovimentoIndigena />} />
            <Route path="/corpoProtesto" element={<CorpoProtesto />} />
            <Route path="/figurasImportantes" element={<FigurasImportantes />}/>
            <Route path="/VisaoHumanidade" element={<VisaoHumanidade />} />
            <Route path="/oQueFicou" element={<OQueFicou />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
