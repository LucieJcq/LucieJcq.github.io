import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import NavBar from "../Navbar/Navbar";
import { Zoom } from "@mui/material";
import background from "../../assets/background-trees.jpg";
import { ScrollDown } from "../Scrolldown/Scrolldown";

const Header = () => {
    return (
        <Container
            disableGutters
            maxWidth="xl"
            style={{
                backgroundImage: `url( ${background}`,
                height: "100vh",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <NavBar />
            <Box
                sx={{
                    height: "100vh",
                    color: "white",
                }}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
            >
                <Zoom
                    in
                    style={{
                        transitionDelay: "500ms",
                        transitionDuration: "2s",
                    }}
                >
                    <Typography
                        variant="h1"
                        sx={{
                            fontFamily: "CabinSketch",
                            fontWeight: 700,
                        }}
                    >
                        Lucie JACQUEMIN
                    </Typography>
                </Zoom>
                <Zoom
                    in
                    style={{
                        transitionDelay: "1000ms",
                        transitionDuration: "2s",
                    }}
                >
                    <Typography
                        variant="h2"
                        sx={{
                            fontFamily: "CabinSketch",
                        }}
                    >
                        Web Développeuse junior
                    </Typography>
                </Zoom>
            </Box>
            <ScrollDown />
        </Container>
    );
};
export default Header;
