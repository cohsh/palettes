'use client';

import React from "react";
import QuadColorBox from "@/components/QuadColorBox";

const Home: React.FC = () => {
  return (
    <main>
      <div>
        <h1>Palettes</h1>
        <QuadColorBox colors={['blue', 'red', 'green', 'yellow']}/>
      </div>
    </main>
  );
}

export default Home;