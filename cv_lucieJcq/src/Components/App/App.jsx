import CssBaseline from "@mui/material/CssBaseline";

import { ThemeProvider } from "@mui/material/styles";

import { theme } from "../../config/theme";

import Header from "../Header/Header";
import About from "../About/About";
import Skills from "../Skills/Skills";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />

            <Header className="App-header" />
            <About />
            <Skills />
        </ThemeProvider>
    );
}

export default App;
