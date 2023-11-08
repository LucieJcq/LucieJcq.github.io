import CssBaseline from "@mui/material/CssBaseline";

import { ThemeProvider } from "@mui/material/styles";

import { theme } from "../../config/theme";

import Header from "../Header/Header";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Formation from "../Formation/Formation";
import Experiences from "../Experiences/Experiences";
import Projects from "../Projects/Projects";
import Footer from "../Footer/Footer";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />

            <Header className="App-header" />
            <About />
            <Skills />
            <Projects />
            <Formation />
            <Experiences />
            <Footer />
        </ThemeProvider>
    );
}

export default App;
