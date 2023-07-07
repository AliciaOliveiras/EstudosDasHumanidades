import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import Header from "./core/components/Header/Header";
import Footer from "./core/components/Footer/Footer";
import AiltonKrenak from "./pages/AiltonKrenak/AiltonKrenak";
import CorpoHumanidade from "./pages/CorpoHumanidade/CorpoHumanidade";
import CorpoProtesto from "./pages/CorpoProtesto/CorpoProtesto";
import FigurasImportantes from "./pages/FigurasImportantes/FigurasImportantes";
import VisaoHumanidade from "./pages/VisaoHumanidade/VisaoHumanidade";
import OQueFicou from "./pages/OQueFIcou/OQueFicou";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/ailtonKrenak" element={<AiltonKrenak />} />
        <Route path="/corpoHumanidade" element={<CorpoHumanidade />} />
        <Route path="/corpoProtesto" element={<CorpoProtesto />} />
        <Route path="/figurasImportantes" element={<FigurasImportantes />} />
        <Route path="/VisaoHumanidade" element={<VisaoHumanidade />} />
        <Route path="/oQueFicou" element={<OQueFicou />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
