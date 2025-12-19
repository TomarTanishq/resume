"use client"; // This ensures it only runs in the browser

import React from 'react';
import Snowfall from 'react-snowfall';

export default function SnowWrapper() {
  return (
    <Snowfall
        color='#FFC0CB'
        snowflakeCount={100}
      style={{
        zIndex: 5,       // Adjust this based on your needs
        pointerEvents: 'none' // Ensures you can still click buttons underneath
      }}
    />
  );
}