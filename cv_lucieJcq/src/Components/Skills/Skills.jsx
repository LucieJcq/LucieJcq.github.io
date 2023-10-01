import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

const Skills = () => {
    return (
        <Box
            className="Skills"
            sx={{
                backgroundColor: "#1F2B17",
                width: "100vw",
            }}
        >
            <Typography
                variant="h2"
                sx={{
                    fontFamily: "AmaticSC",
                    fontWeight: 700,
                    color: "white",
                    textAlign: "center",
                }}
            >
                Compétences
            </Typography>
        </Box>
    );
};
export default Skills;
