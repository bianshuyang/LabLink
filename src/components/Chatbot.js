import React, { useState, useRef } from 'react';
import "../styles/bot.css";
import botImage from '../images/bot.webp'; // make sure the extension is correct, SVG used as an example

const Chatbot = () => {
    const [isActive, setIsActive] = useState(false);
    const [userInput, setUserInput] = useState('');
    const [chatHistory, setChatHistory] = useState([]);
    const inputRef = useRef(null); // Create a ref for the input field

    const toggleChatbot = () => {
        setIsActive(!isActive);
    };

    const keywordResponses = {
        "tell me more about the lab": "Our lab is dedicated to advancing research in various fields. We work with a team of accomplished professors and students.",
        "how can I join the lab?": "To join our lab, you can start by exploring the 'Programs of Interest' page to see if there are any programs that align with your interests and qualifications.",
        "I'm a student. How can I get recognized for my research?": "You can gain recognition for your research by posting your research statement on the 'Students Self Recommendations' page. This allows our team to acknowledge your contributions.",
        "What's the latest news from the department?": "You can find the latest news and updates from our department on the 'News' page. It covers news for all majors across campus.",
        "How can I contact someone in the lab?": "You can reach out to us by using the Contact page. Send us an email, and we'll be sure to respond to your inquiries.",
        "I forgot my password. How can I reset it?": "If you've forgotten your password, you can click on the 'Forgot Password' link on the login page. You'll receive instructions on how to reset your password via email.",
        "Tell me more about the registration process.": "To register, simply provide your email and create a password. You'll receive a verification code via email to complete your registration and gain access to our features.",
        "hello": "Hello! How can I assist you?",
        "join": "Explore 'Programs of Interest' to join.",
        "research": "Recognize your research here.",
        "news": "Latest department news on 'News' page.",
        "contact": "Get in touch via Contact page.",
        "password": "Reset password via email.",
        "register": "Sign up with email.",
        "about": "Learn more about us on our website.",
        "faculty": "Explore our distinguished faculty.",
        "students": "Discover our talented students.",
        "programs": "Find interesting programs here.",
        "updates": "Stay informed with our updates.",
        "team": "Meet our dedicated team.",
        "location": "Get directions to our location.",
        "login": "Access your account with login.",
        "logout": "Logout to exit your account.",
        "profile": "Manage your user profile.",
        "email": "Contact us via email.",
        "forgot": "Forgot your password? Reset it.",
        "verify": "Complete registration by email verification.",
        "schedule": "Check lab schedule here.",
        "resources": "Access research resources.",
        "apply": "Apply for programs online.",
        "newsletters": "Subscribe to newsletters.",
        "help": "Need assistance? Contact us.",
        
    };


    const handleUserInput = (event) => {
        setUserInput(event.target.value);
    };

    const handleSendMessage = () => {
    if (userInput.trim() !== '') {
        // Add the user's message to the chat history
        setChatHistory([...chatHistory, { sender: 'user', message: userInput }]);
        
        // Check for keywords in the user's message
        const userMessage = userInput.toLowerCase();
        let response = "I'm sorry, I don't understand. Please look at our website at the bottom bar and have a look at the GitHub documentation for more instructions. ";

        for (const keyword in keywordResponses) {
            if (userMessage.includes(keyword)) {
                response = keywordResponses[keyword];
                break; // Stop searching for keywords once a match is found
            }
        }

        // Add the response to the chat history
        setChatHistory(chatHistory => [...chatHistory, { sender: 'bot', message: response }]);
        
        // Clear the user input field
        setUserInput('');
        }
    };


    // Handle Enter key press
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSendMessage();
        }
    };



    return (
        <div className="chatbot-container">
            <button className="chatbot-toggle" onClick={toggleChatbot}>
                <img src={botImage} alt="Chatbot" style={{ width: '100px', height: '100px' }} />
            </button>
            
            {isActive && (
                <div className="chatbot">
                    <div className="chatbot-header">
                        <img src={botImage} alt="Swoop Bot Logo" className="chatbot-logo" />
                        <h2>Hi I'm Swoop Bot</h2>
                        <p>I'm a virtual assistant that can help you with Admission questions you may have.</p>
                        <button onClick={toggleChatbot} className="chatbot-close">&times;</button>
                    </div>
                    <div className="chatbot-body">
                        <div className="chat-history">
                            {chatHistory.map((chat, index) => (
                                <div key={index} className={`chat-message ${chat.sender}`}>
                                    {chat.message}
                                </div>
                            ))}
                        </div>
                        <div className="chat-input-area">
                            <input 
                                type="text" 
                                value={userInput} 
                                onChange={handleUserInput} 
                                onKeyPress={handleKeyPress} // Add the event listener
                                placeholder="Ask me a question" 
                                ref={inputRef} // Attach the ref to the input field
                            />
                            <button onClick={handleSendMessage}>Send</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );

};

export default Chatbot;
