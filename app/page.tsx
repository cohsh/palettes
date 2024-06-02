'use client';

import React from "react";
import QuadColorBox from "@/components/QuadColorBox";
import { generateQuadColors } from "@/utils/generate_colors";

const Home: React.FC = () => {
  const blue_colors = generateQuadColors('#2A4073');
  const red_colors = generateQuadColors('#7E0F09');
  const green_colors = generateQuadColors('#005E15');
  const yellow_colors = generateQuadColors('#ADA250');
  const dark_colors = generateQuadColors('#3E1E00');
  return (
    <main>
      <div>
        <h1>Palettes</h1>
        <h2>Blue</h2>
        <QuadColorBox colors={blue_colors}/>
        <h2>Red</h2>
        <QuadColorBox colors={red_colors}/>
        <h2>Green</h2>
        <QuadColorBox colors={green_colors}/>        
        <h2>Yellow</h2>
        <QuadColorBox colors={yellow_colors}/>        
        <h2>Dark</h2>
        <QuadColorBox colors={dark_colors}/>        
      </div>
    </main>
  );
}

export default Home;