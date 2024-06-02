'use client';

import React from "react";
import QuadColorBox from "@/components/QuadColorBox";

const Home: React.FC = () => {
  const blue_colors = ['#2A4073', '#004F80', '#008DBD', '#84B9CB']
  return (
    <main>
      <div>
        <h1>Palettes</h1>
        <h2>Blue</h2>
        <QuadColorBox colors={blue_colors}/>
      </div>
    </main>
  );
}

export default Home;