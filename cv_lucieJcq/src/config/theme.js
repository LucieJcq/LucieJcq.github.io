import { createBreakpoints } from "@mui/system";
import { createTheme } from "@mui/material/styles";
import CabinSketchTTF from "../assets/fonts/Cabin_Sketch/CabinSketch-Regular.ttf";
import CabinSketchBoldTTF from "../assets/fonts/Cabin_Sketch/CabinSketch-bold.ttf";
import AmaticSCTTF from "../assets/fonts/Amatic_SC/AmaticSC-Regular.ttf";
import AmaticSCBoldTTF from "../assets/fonts/Amatic_SC/AmaticSC-Bold.ttf";

const CabinSketchRegular = {
    fontFamily: "CabinSketch",
    fontStyle: "normal",
    fontWeight: 400,
    src: `url(${CabinSketchTTF}) format('truetype')`,
};

const CabinSketchBold = {
    fontFamily: "CabinSketch",
    fontStyle: "normal",
    fontWeight: 700,
    src: `url(${CabinSketchBoldTTF}) format('truetype')`,
};

const AmaticSCRegular = {
    fontFamily: "AmaticSC",
    fontStyle: "normal",
    fontWeight: 400,
    src: `url(${AmaticSCTTF}) format('truetype')`,
};

const AmaticSCBold = {
    fontFamily: "AmaticSC",
    fontStyle: "normal",
    fontWeight: 700,
    src: `url(${AmaticSCBoldTTF}) format('truetype')`,
};

const breakpoints = createBreakpoints({});

export const theme = createTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                html: [
                    { "@font-face": CabinSketchRegular },
                    { "@font-face": CabinSketchBold },
                    { "@font-face": AmaticSCRegular },
                    { "@font-face": AmaticSCBold },
                ],
            },
        },
    },
    typography: {
        h1: {
            fontSize: "5rem",
            [breakpoints.down("sm")]: {
                fontSize: "3rem",
                padding: "0rem 1rem 1rem 1rem",
                textAlign: "center",
            },
        },
        h2: {
            fontSize: "3rem",
            [breakpoints.down("sm")]: {
                fontSize: "2rem",
                paddingLeft: "1rem",
                paddingRight: "1rem",
                textAlign: "center",
            },
        },
    },

    palette: {
        type: "light",
        primary: {
            main: "#595e54",
        },
        secondary: {
            main: "#f50057",
        },
        text: {
            primary: "#858d7d",
        },
        divider: "rgba(124,150,102,0.55)",
    },
});
