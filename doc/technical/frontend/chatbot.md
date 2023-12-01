# Documentation for the Chatbot Component

## Overview

The `Chatbot` component is a React-based interactive chatbot designed for a web application. This component offers automated responses based on user input, handling common inquiries and providing information relevant to the context of a web application, particularly for an educational platform like Lablink.

## Features

- **Toggle Visibility**: Users can show or hide the chatbot interface.
- **Automated Responses**: Predefined responses to common questions or keywords.
- **Dynamic Date and Time Responses**: The chatbot can provide the current date and time.
- **Input Handling**: Processes user input, including detection of certain keywords or phrases.
- **Chat History**: Displays the conversation history between the user and the chatbot.

## Implementation Details

### Imports

- React, useState, useRef: Essential for building the component and managing state and references.
- Styles: Importing CSS for styling the chatbot.
- botImage: An image file representing the chatbot icon.

### Component Structure

1. **State Variables**
   - `isActive`: Determines the visibility of the chatbot.
   - `userInput`: Stores the current user input.
   - `chatHistory`: An array storing the conversation history.

2. **References**
   - `inputRef`: A reference to the text input field for user messages.

3. **Functions**
   - `toggleChatbot`: Toggles the chatbot's visibility.
   - `handleUserInput`: Updates `userInput` state when the user types a message.
   - `handleSendMessage`: Processes and sends the user's message.
   - `handleKeyPress`: Detects when the Enter key is pressed for message sending.
   - `getCurrentTimeAndDate`: Provides the current time and date.

4. **keywordResponses**
   - A dictionary object mapping specific keywords to predefined responses.

### Usage

1. **Initialization**
   - Place the `Chatbot` component within a React application's component tree where you want the chatbot to appear.

2. **Interaction**
   - Users can interact with the chatbot by clicking the chatbot icon, typing messages, and receiving automated responses.

3. **Customization**
   - Modify `keywordResponses` to add or change automated responses based on the application's context.

### Rendering

- The chatbot renders as a floating button when inactive. When active, it expands to show the chat interface, including the header, body, and input area.

### Styling

- The component relies on external CSS for styling, referenced at the beginning of the component file.

