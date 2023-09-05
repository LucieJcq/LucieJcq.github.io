import Container from "@mui/material/Container";
import NavBar from "../Navbar/Navbar";
import background from "../../assets/background-trees.jpg";

const Header = () => {
    return (
        <Container
            maxWidth="xl"
            style={{
                backgroundImage: `url( ${background}`,
                height: "100vh",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <NavBar />
            <h1>Lucie JACQUEMIN</h1>
            <h2>Web Développeuse junior</h2>
        </Container>
    );
};
export default Header;
