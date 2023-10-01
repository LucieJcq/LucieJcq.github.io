import Container from "@mui/material/Container";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import datas from "../../assets/data/data.js";

function AboutSection(props) {
    return (
        <Typography
            variant="body1"
            sx={{
                color: "black",
                fontWeight: 700,
                padding: "0.3rem",
                textAlign: "center",
                fontSize: "1em",
            }}
        >
            {props.sectionTitle}:
            <span
                style={{
                    paddingLeft: "0.5rem",
                    fontWeight: 400,
                }}
            >
                {props.text}
            </span>
        </Typography>
    );
}

const About = () => {
    return (
        <Container
            maxWidth="md"
            sx={{
                marginTop: "4rem",
                marginBottom: "4rem",
                padding: "2rem",
                backgroundColor: "rgba(	133,	141,	125, 0.2)",
                borderRadius: 20,
            }}
        >
            <Box
                sx={{
                    textAlign: "center",
                }}
            >
                <Typography
                    variant="h2"
                    sx={{ fontFamily: "AmaticSC", fontWeight: 700 }}
                >
                    {datas.about.title}
                </Typography>
            </Box>
            {datas.about.texts.map((text) => (
                <Box
                    sx={{
                        padding: "1rem 5rem",
                        fontSize: "1.1rem",
                        color: "black",
                        textAlign: "center",
                        fontWeight: 500,
                    }}
                    dangerouslySetInnerHTML={{
                        __html: text,
                    }}
                />
            ))}
            <Box
                sx={{
                    margin: "0 auto",
                    padding: "2rem 5rem",
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        fontFamily: "AmaticSC",
                        fontWeight: 700,
                        paddingBottom: "0.2rem",
                        color: "primary",
                        textAlign: "center",
                    }}
                >
                    Un peu plus d'informations
                </Typography>
                {datas.about.informations.map((section) => {
                    const sectionTitle = section.title;
                    const text =
                        typeof section.text === "string"
                            ? section.text
                            : section.text.join(", ");

                    return (
                        <AboutSection
                            key={sectionTitle}
                            sectionTitle={sectionTitle}
                            text={text}
                        />
                    );
                })}
            </Box>
        </Container>
    );
};

export default About;
