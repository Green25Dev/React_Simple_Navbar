import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import {
    CssBaseline,
} from "@mui/material";
import ResponsiveAppBar from "./Headers/ResponsiveAppBar";

function MainLayout({children}) {

    return (
        <React.Fragment>
            <CssBaseline/>
            <ResponsiveAppBar />

            {children}
        </React.Fragment>
    )
}

export default MainLayout
