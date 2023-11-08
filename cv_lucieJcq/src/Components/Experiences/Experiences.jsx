import { Box, Typography, Container, useMediaQuery } from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

import data from "../../assets/data/data.js";

const Experiences = () => {
    const isDesktop = useMediaQuery("(min-width: 1024px)");
    const isMobile = useMediaQuery("(max-width: 600px)");
    return (
        <Box
            sx={{
                backgroundColor: "#1F2B17",
                paddingTop: isMobile ? "3rem" : "4rem",
                color: "white",
            }}
        >
            <Typography variant="h2" sx={{ fontFamily: "cabinSketch" }}>
                MES EXPERIENCES PROFESSIONNELLES
            </Typography>

            <Container>
                {data.experiences.map((experience) => {
                    return (
                        <Box
                            key={experience.name}
                            sx={{ paddingBottom: isDesktop ? "2rem" : "1rem" }}
                        >
                            <Typography
                                variant="h3"
                                sx={{
                                    fontFamily: "AmaticSC",
                                    color: "#858d7d",
                                    textAlign: "left",
                                }}
                            >
                                {experience.name}
                            </Typography>

                            <Typography
                                variant="subtitle2"
                                sx={{ fontStyle: "italic", padding: "0.5rem" }}
                            >
                                {experience.duration}, {experience.place}
                            </Typography>

                            {experience.skills && experience.skills.length > 0
                                ? experience.skills.map((text) => (
                                      <Typography
                                          key={Object.keys(text)}
                                          variant="body1"
                                          sx={{ paddingBottom: 1 }}
                                      >
                                          <TaskAltIcon
                                              sx={{ fontSize: "1rem" }}
                                          />{" "}
                                          {text}
                                      </Typography>
                                  ))
                                : null}
                        </Box>
                    );
                })}
            </Container>
        </Box>
    );
};
export default Experiences;
