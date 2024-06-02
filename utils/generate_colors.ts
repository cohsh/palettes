import tinycolor from 'tinycolor2';

export const generateQuadColors = (baseColor: string, step: number) => {
    const colors = [baseColor];
    let color = tinycolor(baseColor);

    for (let i = 1; i < 4; i++) {
        color = color.lighten(step);
        colors.push(color.toHexString());
    }

    return colors;
};