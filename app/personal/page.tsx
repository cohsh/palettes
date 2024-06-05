'use client';

import React from "react";
import QuadColorBox from "@/components/QuadColorBox";
import { generateQuadColors } from "@/utils/generate_colors";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const palettes = [
  { name: "Blue", colors: ['#2A4073'] },
];

const Home: React.FC = () => {
  return (
    <main>
      <div>
        {palettes.map(palette => (
          <div key={palette.name}>
            <h2>{palette.name}</h2>
            <QuadColorBox colors={palette.colors}/>
          </div>
        ))}
      </div>
      <ToastContainer />
    </main>
  );
}

export default Home;