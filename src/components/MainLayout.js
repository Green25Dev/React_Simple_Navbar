import React from "react";
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
