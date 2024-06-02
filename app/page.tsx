'use client';

import React from "react";
import QuadColorBox from "@/components/QuadColorBox";
import { generateQuadColors } from "@/utils/generate_colors";

const palettes = [
  { name: "Blue", colors: generateQuadColors('#2A4073', 5) },
  { name: "Red", colors: generateQuadColors('#7E0F09', 5) },
  { name: "Green", colors: generateQuadColors('#005E15', 5) },
  { name: "Yellow", colors: generateQuadColors('#ECE038', 10) },
  { name: "Dark", colors: generateQuadColors('#0c0c0c', 20) }
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