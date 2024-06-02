'use client';

import React from "react";
import QuadColorBox from "@/components/QuadColorBox";

const Home: React.FC = () => {
  const colors = ['blue', 'red', 'green', 'yellow']
  return (
    <main>
      <div>
        <h1>Palettes</h1>
        <QuadColorBox colors={colors}/>
      </div>
    </main>
  );
}

export default Home;