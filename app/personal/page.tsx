'use client';

import React from "react";
import QuadColorBox from "@/components/QuadColorBox";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const palettes = [
  { name: "Progress Report by Marp", colors: ['#008DBD', '#FDFCF5', '#6B818E', '#000000'] },
  { name: "JPS 2021 Sep. (Poster)", colors: ['#004D80', '#006C65', '#B51700', '#5E5E5E', '#000000', '#FFFFFF'] },
  { name: "JPS 2022 Mar. (Oral)", colors: ['#4082BE', '#EE220C']},
  { name: "Master's Thesis Defense", colors: ['#328131', '#EE220C']},
  { name: "Research Website", colors: ['#A4CA68', '#DAEAD0', '#43341B', '#005E15']}
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