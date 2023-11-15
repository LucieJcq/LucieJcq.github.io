import {
    Box,
    Typography,
    useMediaQuery,
    useTheme,
    Paper,
    Link,
} from "@mui/material";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import cosmokids from "../../assets/img/cosmokids.png";
import portfolio from "../../assets/img/portfolio.png";
import data from "../../assets/data/data.js";

const Projects = () => {
    const theme = useTheme();

    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Box
            id="projects"
            sx={{
                paddingTop: isMobile ? "3rem" : "4rem",
                paddingBottom: isMobile ? "3rem" : "4rem",
            }}
        >
            <Typography
                variant="h2"
                sx={{
                    fontFamily: "cabinSketch",
                    paddingBottom: isMobile ? "2rem" : "3rem",
                }}
            >
                MES PROJETS
            </Typography>
            <Box
                sx={{
                    width: { xs: "90%", sm: "60%", md: "40%" },
                    //                    width: handleWidth(isTablet, isDesktop),

                    margin: "auto",
                    height: "fit-content",
                    flexGrow: 1,
                }}
            >
                <Slide>
                    {data.projects.map((step) => {
                        let image = step.picture;
                        switch (image) {
                            case "cosmokids":
                                image = cosmokids;
                                break;
                            case "portfolio":
                                image = portfolio;
                                break;
                            default:
                                image = null;
                        }
                        return (
                            <div key={step.name} className="each-slide-effect">
                                <Paper
                                    square
                                    elevation={0}
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        height: 50,
                                        pl: 2,
                                        bgcolor: "background.default",
                                        paddingTop: isMobile ? "1rem" : "2rem",
                                        paddingBottom: isMobile
                                            ? "1rem"
                                            : "2rem",
                                    }}
                                >
                                    <Typography
                                        variant="h4"
                                        sx={{
                                            fontFamily: "AmaticSC",
                                            fontSize: {
                                                xs: "1.rem",
                                                sm: "2em",
                                                md: "2.5em",
                                            },
                                            fontWeight: 700,
                                        }}
                                    >
                                        {step.name}
                                    </Typography>
                                </Paper>
                                <Link
                                    href={step.link}
                                    alt="Application CosmoKids"
                                >
                                    <Box
                                        component="img"
                                        sx={{
                                            width: "80%",
                                            height: "100%",
                                            objectFit: "cover",
                                            display: "block",
                                            overflow: "hidden",
                                        }}
                                        src={image}
                                        alt={step.name}
                                    />
                                </Link>
                            </div>
                        );
                    })}
                </Slide>
            </Box>
        </Box>
    );
};

export default Projects;
