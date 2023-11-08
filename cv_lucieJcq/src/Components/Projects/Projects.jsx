import { Box, Typography } from "@mui/material";

const Projects = () => {
    return (
        <Box>
            <Typography variant="h2" sx={{ fontFamily: "cabinSketch" }}>
                MES PROJETS
            </Typography>
            {/* {data.map((item) => (
                <Card
                    orientation="horizontal"
                    size="sm"
                    key={item.title}
                    variant="outlined"
                >
                    <AspectRatio ratio="1" sx={{ minWidth: 60 }}>
                        <img
                            srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
                            src={`${item.src}?h=120&fit=crop&auto=format`}
                            alt={item.title}
                        />
                    </AspectRatio>
                    <Box sx={{ whiteSpace: "nowrap", mx: 1 }}>
                        <Typography level="title-md">{item.title}</Typography>
                        <Typography level="body-sm">
                            {item.description}
                        </Typography>
                    </Box>
                </Card>
            ))} */}
        </Box>
    );
};
export default Projects;
