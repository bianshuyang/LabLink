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
   - Current keywords include the following:
  
| Keyword     | Response                                                      |
| ----------- | ------------------------------------------------------------- |
| hello       | Hello! How can I assist you?                                  |
| hi          | Hi! How can I assist you?                                     |
| hey         | Hello! How should I assist you?                               |
| morning     | Good morning! How can I assist you?                           |
| afternoon   | Good afternoon! How can I assist you?                         |
| evening     | Good evening! How can I assist you?                           |
| night       | Hello! How can I assist you?                                  |
| bye         | Thank you. You may close the chat. I wish your success.       |
| see you     | Thank you. You may close the chat. I wish your success.       |
| zaijian     | Zaijian.                                                     |
| bot         | Hey there! I am Laby Linky. I'm a virtual assistant...       |
| who         | Hey there! I am Laby Linky. I'm a virtual assistant...       |
| ?           | I see a concern here. I am sorry. None of the above...        |
| wow         | Thank you for contacting me.                                  |
| nice        | Thank you for contacting me.                                  |
| great       | Thank you for contacting me.                                  |
| wonderf     | Thank you for contacting me.                                  |
| good        | Thank you for contacting me.                                  |
| thank       | Thank you for contacting me.                                  |
| what's      | Hello. Send us a message. And we will reply.                  |
| join        | Explore 'Programs of Interest' to join.                      |
| research    | Recognize your research here.                                 |
| news        | Latest department news on 'News' page.                        |
| contact     | Get in touch via Contact page if our bot is unable...         |
| pas         | Reset password via Emory email.                               |
| register    | Sign up with Emory email.                                     |
| about       | Learn more about us on our website.                           |
| why         | I see you are asking about the difference between...         |
| admin       | Send us an email on why you want to continue our...          |
| faculty     | Explore our distinguished faculty at the Professor page      |
| prof        | Explore our distinguished faculty at the Professor page      |
| teach       | Explore our distinguished faculty at the Professor page      |
| instruc     | Explore our distinguished faculty at the Professor page      |
| student     | Discover our talented students at the tab self-recommendation!|
| program     | Find interesting programs here. Professor will post...        |
| updat       | Stay informed with our updates.                               |
| team        | Thanks to Simon Bian, Marcus Hill, Michelle Kim...            |
| location    | Unfortunately as a class project this website might...       |
| login       | Access your account with login. You must click on...          |
| logout      | Logout to exit your account. You can only log out...          |
| dif         | I see you are asking about the difference between...         |
| safe        | Worried about safety? Your password is fine...               |
| profile     | Manage your user profile. You could be displaying...         |
| email       | Contact us via email by using this form                       |
| forgot      | Forgot your password? Reset it in the link!                  |
| rese        | Forgot your password? Reset it in the link!...               |
| name        | Did you not see your name on the website? Our...            |
| verify      | Complete registration by email verification. Check...         |
| apply       | Apply for programs online. You will not need...              |
| help        | Need human-based assistance? Contact us through...            |
| html        | If you are a professor, you can design your own...           |
| desig       | If you are a professor, you can design your own...           |
| not         | Our sincere apologies for anything that has gone...          |
| human       | Unfortunately this chat is not monitored. We...             |
| hum         | Unfortunately this chat is not monitored. We...             |
| DROP TABLE  | Please do not do unsafe operations. Your IP...               |
| form        | The form is to your left hand side. You must...             |
| time        | getCurrentTimeAndDate                                        |
### Rendering

- The chatbot renders as a floating button when inactive. When active, it expands to show the chat interface, including the header, body, and input area.

### Styling

- The component relies on external CSS for styling, referenced at the beginning of the component file.

