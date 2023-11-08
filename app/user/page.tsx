// page.tsx
'use client'

import { useRouter } from 'next/navigation';

interface FormData {
  cuisinePreferences: string;
  allergies: string;
}

import React, { useState, FormEvent } from 'react';
import './page.css'; // Import the CSS file

export default function UserInput() {
  const router = useRouter();

  const [formData, setFormData] = useState<FormData>({
    cuisinePreferences: '',
    allergies: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log("Submitted");
    console.log(formData);
  
    try {
      // Send a POST request to the FastAPI backend
      const response = await fetch('/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      if (response.ok) {
        console.log('Form data sent successfully');
        router.push('/map'); // Navigate to the maps page
      } else {
        console.error('Error sending form data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  return (
    <div style={{ background: 'grey', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div className="user-input-form">
        {<form className="user-input-form" onSubmit={handleSubmit}>
          <div>
            <label>
              Cuisine Preferences
              <input
                type="text"
                name="cuisinePreferences"
                value={formData.cuisinePreferences}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Allergies
              <input
                type="text"
                name="allergies"
                value={formData.allergies}
                onChange={handleChange}
              />
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>}
      </div>
    </div>
  );
};