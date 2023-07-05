import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import AiltonKrenak from "../pages/AiltonKrenak/AiltonKrenak";
import MovimentoIndigena from "../pages/MovimentoIndigena/MovimentoIndigena";
import CorpoProtesto from "../pages/CorpoProtesto/CorpoProtesto";
import FigurasImportantes from "../pages/FigurasImportantes/FigurasImportantes";
import VisaoHumanidade from "../pages/VisaoHumanidade/VisaoHumanidade";
import OQueFicou from "../pages/OQueFIcou/OQueFicou";

function RoutesConfig() {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"home"} element={<Home />} />
      <Route path="/ailtonKrenak" element={<AiltonKrenak/>} />
      <Route path="/movimentoIndigena" element={<MovimentoIndigena />} />
      <Route path="/corpoProtesto" element={<CorpoProtesto />} />
      <Route path="/figurasImportantes" element={<FigurasImportantes />} />
      <Route path="/visaoHumanidade" element={<VisaoHumanidade />} />
      <Route path="/oQueFicou" element={<OQueFicou/>} />
    </Routes>
  );
}

export default RoutesConfig;
