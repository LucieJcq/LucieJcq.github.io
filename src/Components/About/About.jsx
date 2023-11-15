import { useRef } from "react";

import {
    Box,
    Container,
    useMediaQuery,
    IconButton,
    Link,
    Typography,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

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
    const about = useRef(null);

    const isDesktop = useMediaQuery("(min-width: 1024px)");
    const isMobile = useMediaQuery("(max-width: 600px)");

    return (
        <Container
            id="about"
            maxWidth="md"
            sx={{
                borderRadius: isDesktop ? 20 : 0,
                backgroundColor: "rgba(	133,	141,	125, 0.2)",
                margin: isDesktop ? "4rem auto" : 0,
                // marginBottom: isDesktop ? "4rem" : 0,
                padding: isMobile ? "3rem 0" : "4rem 0",
            }}
        >
            <Box
                sx={{
                    textAlign: "center",
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        fontFamily: "AmaticSC",
                        fontWeight: 700,
                        paddingBottom: 1,
                    }}
                >
                    {datas.about.title}
                </Typography>
            </Box>
            {datas.about.texts.map((text) => (
                <Typography
                    variant="body2"
                    key={Object.keys(text)}
                    sx={{
                        padding: "1rem auto",
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
                    margin: "1.5rem auto",
                    padding: "2rem auto",
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
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                {datas.about.socialNetworks.map((socialNetwork) => {
                    let icon = socialNetwork.icon;
                    switch (icon) {
                        case "GitHubIcon":
                            icon = <GitHubIcon />;
                            break;
                        case "LinkedInIcon":
                            icon = <LinkedInIcon />;
                            break;
                        default:
                            icon = null;
                    }
                    return (
                        <Link
                            key={socialNetwork.name}
                            href={socialNetwork.link}
                        >
                            <IconButton key={socialNetwork.name} size="large">
                                {icon}
                            </IconButton>
                        </Link>
                    );
                })}
            </Box>
        </Container>
    );
};

export default About;
