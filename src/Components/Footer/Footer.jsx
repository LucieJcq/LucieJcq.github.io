import { Typography } from "@mui/material";
const Footer = () => {
    return (
        <footer>
            <Typography
                variant={"body1"}
                sx={{
                    color: "white",
                    backgroundColor: "#1F2B17",
                    padding: "1em",
                    textAlign: "center",
                }}
            >
                © ALL RIGHTS RESERVED.
            </Typography>
        </footer>
    );
};
export default Footer;
