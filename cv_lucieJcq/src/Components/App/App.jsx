import { useState } from "react";

import { ThemeProvider } from "@mui/material/styles";

import { theme } from "../../config/theme";

import Header from "../Header/Header";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Header className="App-header" />
        </ThemeProvider>
    );
}

export default App;
