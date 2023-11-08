'use client'

import React, { useState } from 'react';
import ChatBot, { Step } from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

interface Theme {
  background: string;
  headerBgColor: string;
  headerFontSize: string;
  botBubbleColor: string;
  headerFontColor: string;
  botFontColor: string;
  userBubbleColor: string;
  userFontColor: string;
}

const theme: Theme = {
  background: '#E0E0E0', // Light grey background
  headerBgColor: '#808080', // Medium grey header background
  headerFontSize: '20px',
  botBubbleColor: '#4D4D4D', // Dark grey bot bubble color
  headerFontColor: 'white',
  botFontColor: 'white',
  userBubbleColor: '#808080', // Medium grey user bubble color
  userFontColor: 'white',
};

// Set some properties of the bot
const config = {
  floating: true,
};

const ChatComponent: React.FC = () => {
  const [steps, setSteps] = useState<Step[]>([
    {
      id: '0',
      message: 'Hey there! What would you like to eat today?',
      trigger: '1',
    },{
      id: '1',
      user: true
    }
  ]);

  const addNewStep = (newStep: Step) => {
    setSteps((prevSteps) => [...prevSteps, newStep]);
  };

  const handleUserInput = (userInput: string) => {
    // Process user input and generate new step
    const newStep: Step = {
      id: 'unique_id', // Provide a unique ID
      message: 'New message generated based on user input',
      trigger: 'next_step_id', // Set the trigger for the next step
    };
  
    // Add the new step to the conversation
    addNewStep(newStep);
  
    // Add a step for user input
    const userStep: Step = {
      id: 'user_input',
      user: true,
    };
  
    addNewStep(userStep);
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <ChatBot
          headerTitle="Food for thought"
          steps={steps}
          //userDelay={1000} // Optional delay for user messages (in milliseconds)
          handleUserInput={handleUserInput} // Callback for user input
          {...config}
        />
      </ThemeProvider>
    </div>
  );
};

export default ChatComponent;
