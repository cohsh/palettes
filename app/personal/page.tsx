'use client';

import React from "react";
import QuadColorBox from "@/components/QuadColorBox";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const palettes = [
  { name: "Progress Report by Marp", colors: ['#008DBD', '#FDFCF5', '#6B818E', 'black'] },
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