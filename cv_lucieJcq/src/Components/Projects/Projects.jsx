import { useState } from "react";
import {
    Card,
    Box,
    Typography,
    useMediaQuery,
    useTheme,
    Paper,
    MobileStepper,
    Button,
} from "@mui/material";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
// import AspectRatio from "@mui/joy/AspectRatio";
import cosmokids from "../../assets/img/cosmokids.png";
import data from "../../assets/data/data.js";

const Projects = () => {
    const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
    const isDesktop = useMediaQuery("(min-width: 1024px)");
    const isMobile = useMediaQuery("(max-width: 600px)");
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = data.projects.length;
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <Box
            id="projects"
            sx={{
                paddingTop: isMobile ? "3rem" : "4rem",
                paddingBottom: isMobile ? "3rem" : "4rem",
            }}
        >
            <Typography variant="h2" sx={{ fontFamily: "cabinSketch" }}>
                MES PROJETS
            </Typography>
            <Box
                sx={{
                    width: "30%",
                    margin: "auto",
                    height: "fit-content",
                    flexGrow: 1,
                }}
            >
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
                        paddingBottom: isMobile ? "1rem" : "2rem",
                    }}
                >
                    <Typography variant="h4" sx={{ fontFamily: "AmaticSC" }}>
                        {data.projects[activeStep].name}
                    </Typography>
                </Paper>
                <AutoPlaySwipeableViews
                    axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                >
                    {data.projects.map((step, index) => {
                        let image = step.picture;
                        console.log(image);
                        switch (image) {
                            case "cosmokids":
                                image = cosmokids;
                                break;
                            default:
                                image = null;
                        }
                        return (
                            <div key={step.name}>
                                {Math.abs(activeStep - index) <= 2 ? (
                                    <Box
                                        component="img"
                                        sx={{
                                            width: "80%",
                                            display: "block",
                                            overflow: "hidden",
                                            width: "100%",
                                        }}
                                        src={image}
                                        alt={step.name}
                                    />
                                ) : null}
                            </div>
                        );
                    })}
                </AutoPlaySwipeableViews>
                <MobileStepper
                    steps={maxSteps}
                    position="static"
                    activeStep={activeStep}
                    nextButton={
                        <Button
                            size="small"
                            onClick={handleNext}
                            disabled={activeStep === maxSteps - 1}
                        >
                            Next
                            {theme.direction === "rtl" ? (
                                <KeyboardArrowLeft />
                            ) : (
                                <KeyboardArrowRight />
                            )}
                        </Button>
                    }
                    backButton={
                        <Button
                            size="small"
                            onClick={handleBack}
                            disabled={activeStep === 0}
                        >
                            {theme.direction === "rtl" ? (
                                <KeyboardArrowRight />
                            ) : (
                                <KeyboardArrowLeft />
                            )}
                            Back
                        </Button>
                    }
                />
            </Box>
        </Box>
    );
    //     <Box id="projects" sx={{ paddingTop: isMobile ? "3rem" : "4rem" }}>
    //         <Typography variant="h2" sx={{ fontFamily: "cabinSketch" }}>
    //             MES PROJETS
    //         </Typography>
    //         {data.projects.map((item) => {
    //             let image = item.picture;
    //             console.log(image);
    //             switch (image) {
    //                 case "cosmokids":
    //                     image = cosmokids;
    //                     break;
    //                 default:
    //                     image = null;
    //             }

    //             return (
    //                 <Card
    //                     orientation="horizontal"
    //                     size="sm"
    //                     key={item.name}
    //                     variant="outlined"
    //                 >
    //                     <AspectRatio ratio="1" sx={{ minWidth: 60 }}>
    //                         <img src={image} alt={item.name} />
    //                     </AspectRatio>
    //                     <Box sx={{ whiteSpace: "nowrap", mx: 1 }}>
    //                         <Typography level="title-md">
    //                             {item.name}
    //                         </Typography>
    //                         <Typography level="body-sm">
    //                             {item.description}
    //                         </Typography>
    //                     </Box>
    //                 </Card>
    //             );
    //         })}
    //     </Box>
    // );
};

export default Projects;
