import React from "react";
import styles from '../app/styles/ColorBox.module.css';

interface ColorBoxProps {
    color: string;
}

const ColorBox: React.FC<ColorBoxProps> = ({ color }) => {
    return (
        <div className={styles.colorbox} style={{ backgroundColor: color }}></div>
    );
};

export default ColorBox;