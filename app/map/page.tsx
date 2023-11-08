import Image from "next/image";
import Link from "next/link";

import React, { useState } from 'react';
import MapComponent from './MapComponent';
import ChatComponent from './ChatComponent';

export default function Maps() {
  const mapStyle = {
    width: '100%',
    height: '100vh',
    float: 'left',
    backgroundColor: '#f0f0f0'
  };

  const chatStyle = {
    width: '0%',
    height: '100vh',
    float: 'right',
    backgroundColor: '#f0f0f0'
  };

  return (
    <div>
      <div style={mapStyle}>
        <MapComponent />
      </div>
      <div style={chatStyle}>
        <ChatComponent />
      </div>
    </div>
  );
}
