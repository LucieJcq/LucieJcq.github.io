import React from "react";
import useScrollTrigger from "@mui/material/useScrollTrigger";

const ScrollHandler = (props) => {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 600,
        target: props.window ? window() : undefined,
    });

    return React.cloneElement(props.children, {
        style: {
            backgroundColor: trigger ? "#595e54" : "rgba(255, 255, 255, 0.8)",
            color: trigger ? "white" : "Black",
            transition: trigger ? "0.3s" : "0.5s",
        },
    });
};

const ScrollEffect = (props) => {
    return <ScrollHandler {...props}>{props.children}</ScrollHandler>;
};

export default ScrollEffect;
