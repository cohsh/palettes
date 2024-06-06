import React from "react";
import styles from '../app/styles/ColorBox.module.css';
import { handleCopyClick } from "@/utils/clipboard";

interface ColorBoxProps {
    colors: string[];
}

const ColorBox: React.FC<ColorBoxProps> = ({ colors }) => {
    return (
        <div className={styles.quadcolorbox}>
            {colors.map((color, index) => (
                <div
                    key={index}
                    className={styles.colorbox}
                    style={{ backgroundColor: color, cursor: "pointer" }}
                    onClick={handleCopyClick(color)}
                ></div>
            ))}
        </div>
    );
};


export default ColorBox;