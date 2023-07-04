import React           from "react";
import {Route, Routes} from 'react-router-dom'
import Home            from "../pages/home/Home";

function RoutesConfig() {

    return (
        <Routes>
            <Route path={'/'} element={<Home/>} />
            <Route path={'home'} element={<Home/>}/>
        </Routes>
    )
}

export default RoutesConfig;