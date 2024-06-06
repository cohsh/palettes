'use client';

import React from "react";
import ColorBox from "@/components/ColorBox";
import { generateQuadColors } from "@/utils/generate_colors";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const palettes = [
  { name: "Black and White", colors: ['#000000', '#FFFFFF'] },
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
        {palettes.map(palette => (
          <div key={palette.name}>
            <h2>{palette.name}</h2>
            <ColorBox colors={palette.colors}/>
          </div>
        ))}
      </div>
      <ToastContainer />
    </main>
  );
}

export default Home;