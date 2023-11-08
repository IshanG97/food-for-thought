'use client'

import React, { useState } from 'react';
import { GoogleMap, LoadScript, MouseEvent } from '@react-google-maps/api';

const MapComponent: React.FC = () => {
    let markerPosition: google.maps.LatLngLiteral | null = null;
    const containerStyle: React.CSSProperties = {
        width: '100%',
        height: '100%'
    };

    const center: google.maps.LatLngLiteral = {
        lat: 51.5226,
        lng: -0.1058
    };

    const [restaurantFound, setRestaurantFound] = useState(false);

    const handleCallButtonClick = () => {
        console.log('Calling the restaurant...');
    };

    const apiKey = process.env.GCP_API_KEY || '';

    const handleClick = async (event: MouseEvent) => {
        const position = { lat: event.latLng.lat(), lng: event.latLng.lng() };
        markerPosition = position;
        console.log(position);

        // Send a POST request to the FastAPI backend
        const response = await fetch('api/restaurant', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(position)
        });

        if (response.ok) {
            const responseData = await response.json();

            if (Object.keys(responseData).length === 0) {
                console.log('No restaurants nearby');
                setRestaurantFound(false);
            } else {
                console.log('Sent coordinates to backend');
                setRestaurantFound(true);

                // Process responseData if needed
            }
        } else {
            const errorData = await response.json();
            console.error('Error message from backend:', errorData.detail);
            setRestaurantFound(false);
        }
    };

    return (
        <LoadScript googleMapsApiKey={apiKey}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={20}
                onClick={handleClick}
            >
                {restaurantFound && (
                    <div
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            border: '2px solid #000000', // Dark blue border
                            backgroundColor: '#FFFFFF', // White background
                            color: '#000000', // Dark blue text color
                            padding: '12px 24px', // Adjust padding for bigger button
                            borderRadius: '8px', // Rounded corners
                            fontSize: '18px', // Adjust font size for bigger text
                            cursor: 'pointer' // Show pointer cursor on hover
                        }}
                        onClick={handleCallButtonClick}
                    >
                        <span
                            dangerouslySetInnerHTML={{ __html: callIconSvg }}
                            style={{
                                width: '32px',
                                height: '32px',
                                display: 'inline-block',
                                verticalAlign: 'middle'
                            }}
                        ></span>
                        Call Restaurant
                    </div>
                )}
            </GoogleMap>
        </LoadScript>
    );
};

export default MapComponent;
