'use client'

import React, { useState } from 'react';
import MapComponent from './MapComponent';
import ChatComponent from './ChatComponent';

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_FRONTEND_KEY;

const MapChatPage = () => {
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
        <MapComponent apiKey={apiKey} />
      </div>
      <div style={chatStyle}>
        <ChatComponent />
      </div>
    </div>
  );
};

export default MapChatPage;
