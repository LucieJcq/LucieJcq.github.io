import { createTheme } from "@mui/material/styles";
import CabinSketchTTF from "../assets/fonts/Cabin_Sketch/CabinSketch-Regular.ttf";
import CabinSketchBoldTTF from "../assets/fonts/Cabin_Sketch/CabinSketch-bold.ttf";

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
export const theme = createTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                html: [
                    { "@font-face": CabinSketchRegular },
                    { "@font-face": CabinSketchBold },
                ],
            },
        },
    },
    typography: {
        h1: {
            // fontFamily: "'CabinSketch'",
            // fontWeight: 700,
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
