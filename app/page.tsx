'use client';

import React from "react";
import ColorBox from "@/components/ColorBox";

const Home: React.FC = () => {
  return (
    <main>
      <div>
        <h1>Palettes</h1>
        <ColorBox color='blue'/>
        <ColorBox color='red'/>
        <ColorBox color='green'/>
        <ColorBox color='yellow'/>
      </div>
    </main>
  );
}

export default Home;