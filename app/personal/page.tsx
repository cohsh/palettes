'use client';

import React from "react";
import ColorBox from "@/components/ColorBox";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

const palettes = [
  { name: "Slide 2024 June", colors: ['#008DBD', '#FDFCF5', '#6B818E'] },
  { name: "JPS 2022 Mar. (Oral)", colors: ['#4082BE', '#EE220C']},
  { name: "Poster 2022 Feb.", colors: ['#004CC7', '#004D80']},
  { name: "Research Website (2022-)", colors: ['#A4CA68', '#DAEAD0', '#43341B', '#005E15']},
  { name: "JPS 2021 Sep. (Poster)", colors: ['#004D80', '#006C65', '#B51700', '#5E5E5E'] },
  { name: "Poster 2020 Dec.", colors: ['#4B5D3F', '#D6D6D6']},
  { name: "JPS 2020 Sep. (Oral)", colors: ['#005E15']},
  { name: "Master's Thesis Defense (2020)", colors: ['#328131', '#EE220C', 'ED220D']}
];

const Home: React.FC = () => {
  return (
    <main>
      <nav>
        <Link href="/">Common</Link> | Personal
      </nav>
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