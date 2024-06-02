import React from "react";
import styles from '../app/styles/ColorBox.module.css';

interface QuadColorBoxProps {
    colors: string[];
}

const QuadColorBox: React.FC<QuadColorBoxProps> = ({ colors }) => {
    return (
        <div className={styles.quadcolorbox}>
            <div className={styles.colorbox} style={{ backgroundColor: colors[0] }}></div>
            <div className={styles.colorbox} style={{ backgroundColor: colors[1] }}></div>
            <div className={styles.colorbox} style={{ backgroundColor: colors[2] }}></div>
            <div className={styles.colorbox} style={{ backgroundColor: colors[3] }}></div>
        </div>
    );
};

export default QuadColorBox;