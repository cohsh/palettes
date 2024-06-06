'use client';

import React from "react";
import ColorBox from "@/components/ColorBox";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

const palettes = [
  { name: "Progress Report by Marp", colors: ['#008DBD', '#FDFCF5', '#6B818E'] },
  { name: "JPS 2021 Sep. (Poster)", colors: ['#004D80', '#006C65', '#B51700', '#5E5E5E'] },
  { name: "JPS 2022 Mar. (Oral)", colors: ['#4082BE', '#EE220C']},
  { name: "Master's Thesis Defense", colors: ['#328131', '#EE220C']},
  { name: "Research Website", colors: ['#A4CA68', '#DAEAD0', '#43341B', '#005E15']}
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