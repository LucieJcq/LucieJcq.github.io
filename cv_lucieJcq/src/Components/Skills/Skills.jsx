import { Box, useMediaQuery } from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import CssSharpIcon from "@mui/icons-material/CssSharp";
import {
    fab,
    faHtml5,
    faCss3Alt,
    faJsSquare,
    faReact,
} from "@fortawesome/free-brands-svg-icons";

library.add(fab, faHtml5, faCss3Alt, faJsSquare, faReact);

import datas from "../../assets/data/data.js";

const Skills = () => {
    const hardskillsData = datas.skills[0].hardskills[0];
    const softskillsData = datas.skills[0].softskills[0];
    const isMobile = useMediaQuery("(max-width: 600px)");
    return (
        <Box
            className="Skills"
            sx={{
                backgroundColor: "#1F2B17",
                width: "100%",
                padding: isMobile ? "3rem 0" : "4rem 0",
            }}
        >
            <Typography
                variant="h2"
                sx={{
                    fontFamily: "cabinSketch",
                    color: "white",
                    textAlign: "center",
                    paddingBottom: "2rem",
                }}
            >
                MES COMPETENCES
            </Typography>
            <Box>
                {datas.skills.map((skillPart) => {
                    return (
                        <Grid
                            key={skillPart}
                            container
                            xs={12}
                            spacing={2}
                            textAlign="center"
                            color="white"
                        >
                            <SkillList
                                name={hardskillsData.name}
                                skills={hardskillsData.skills}
                            />
                            <SkillList
                                name={softskillsData.name}
                                skills={softskillsData.skills}
                            />
                        </Grid>
                    );
                })}
            </Box>
        </Box>
    );
};

function SkillList({ name, skills }) {
    return (
        <Grid xs={6} sx={{ padding: "1rem" }}>
            <Typography variant="h3" fontFamily="AmaticSC" fontWeight={700}>
                {name}
            </Typography>
            <Typography variant="body1">
                {skills.map((skill, index) => (
                    <p key={skill.name + index}>{skill.name}</p>
                ))}
            </Typography>
        </Grid>
    );
}
export default Skills;
