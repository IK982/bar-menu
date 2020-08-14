import React from "react";
import * as styles from "../Preview/Background.module.scss";

export const BackgroundSquares = ({hue}) => {
    const squareStyle = {
        background: `hsl(${hue}, 100%, 14.7% )`
    }
    
    return (
        <div className= {styles.rotatedSquare1} style={squareStyle}/>
    );
};