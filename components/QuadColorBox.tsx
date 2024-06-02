import React from "react";
import styles_colobox from '../app/styles/ColorBox.module.css';
import styles_quadcolorbox from '../app/styles/QuadColorBox.module.css';

interface QuadColorBoxProps {
    colors: string[];
}

const QuadColorBox: React.FC<QuadColorBoxProps> = ({ colors }) => {
    return (
        <div className={styles_quadcolorbox.quadcolorbox}>
            <div className={styles_colobox.colorbox} style={{ backgroundColor: colors[0] }}></div>
            <div className={styles_colobox.colorbox} style={{ backgroundColor: colors[1] }}></div>
            <div className={styles_colobox.colorbox} style={{ backgroundColor: colors[2] }}></div>
            <div className={styles_colobox.colorbox} style={{ backgroundColor: colors[3] }}></div>
        </div>
    );
};

export default QuadColorBox;