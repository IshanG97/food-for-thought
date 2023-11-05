import React, { useState } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const MapComponent = ({ apiKey }) => {
    let markerPosition = null;
    const containerStyle = {
        width: '100%',
        height: '100vh'
    };

    const center = {
        lat: 51.5226,
        lng: -0.1058
    };

    const [restaurantFound, setRestaurantFound] = useState(false);

    const callIconSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M152.27,37.93a8,8,0,0,1,9.8-5.66,86.22,86.22,0,0,1,61.66,61.66,8,8,0,0,1-5.66,9.8A8.23,8.23,0,0,1,216,104a8,8,0,0,1-7.73-5.93,70.35,70.35,0,0,0-50.33-50.34A8,8,0,0,1,152.27,37.93Zm-2.33,41.8c13.79,3.68,22.65,12.55,26.33,26.34A8,8,0,0,0,184,112a8.23,8.23,0,0,0,2.07-.27,8,8,0,0,0,5.66-9.8c-5.12-19.16-18.5-32.54-37.66-37.66a8,8,0,1,0-4.13,15.46Zm72.43,78.73-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46Z"/></svg>';

    const handleCallButtonClick = () => {
        console.log('Calling the restaurant...');
    };

    const handleClick = async (event) => {
        const position = { lat: event.latLng.lat(), lng: event.latLng.lng() };
        markerPosition = position;
        console.log(position);

        // Send a POST request to the FastAPI backend
        const response = await fetch('/restaurant', {
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
