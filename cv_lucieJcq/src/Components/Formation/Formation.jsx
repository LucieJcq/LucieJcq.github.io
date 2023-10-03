import { Box, Container, useMediaQuery } from "@mui/material";
import Typography from "@mui/material/Typography";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

import data from "../../assets/data/data.js";

const Formation = () => {
    const isDesktop = useMediaQuery("(min-width: 1024px)");
    const isMobile = useMediaQuery("(max-width: 600px)");
    return (
        <Box
            sx={{
                backgroundColor: "rgba(	133,	141,	125, 0.2)",
                paddingTop: isMobile ? "3rem" : "4rem",
            }}
        >
            <Typography
                variant="h2"
                sx={{
                    fontFamily: "cabinSketch",
                    paddingBottom: isMobile ? "2rem" : "3.5rem",
                    color: "black",
                }}
            >
                MES FORMATIONS
            </Typography>

            <Container>
                {data.formations.map((formation) => {
                    return (
                        <Box
                            key={formation.name}
                            sx={{ paddingBottom: isDesktop ? "2rem" : "1rem" }}
                        >
                            <Typography
                                variant="h3"
                                sx={{
                                    fontFamily: "AmaticSC",
                                    color: "black",
                                    textAlign: "left",
                                }}
                            >
                                {formation.title}
                            </Typography>

                            <Typography
                                variant="subtitle2"
                                sx={{ fontStyle: "italic", padding: "0.5rem" }}
                            >
                                {formation.date}, {formation.place}
                            </Typography>

                            {formation.description &&
                            formation.description.length > 0
                                ? formation.description.map((text) => (
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
export default Formation;
