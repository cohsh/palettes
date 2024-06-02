'use client';

import React from "react";
import QuadColorBox from "@/components/QuadColorBox";
import { generateQuadColors } from "@/utils/generate_colors";

const palettes = [
  { name: "Blue", colors: generateQuadColors('#2A4073') },
  { name: "Red", colors: generateQuadColors('#7E0F09') },
  { name: "Green", colors: generateQuadColors('#005E15') },
  { name: "Yellow", colors: generateQuadColors('#ADA250') },
  { name: "Dark", colors: generateQuadColors('#3E1E00') }
];

const Home: React.FC = () => {
  return (
    <main>
      <div>
        <h1>Palettes</h1>
        {palettes.map(palette => (
          <div key={palette.name}>
            <h2>{palette.name}</h2>
            <QuadColorBox colors={palette.colors}/>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Home;