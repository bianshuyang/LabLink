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
        "hello": "Hello! How can I assist you?",
        "hola": "Lo Siento. Este programa no habla espanol. Para mas apoyo, puedes contactarnos a traves de email.",
        "what's": "Hello. Send us a message. And we will reply.",
        "bye": "Thank you. You may close the chat. I wish your success.",
        "see you": "Thank you. You may close the chat. I wish your success.",
        "zaijian": "Zaijian.",
        "lab link":"This product is a demo-solution that is available to a greater variety of students. Cross-disciplinary research has become state of the art application in the current world. Integration of various discipline is not feasible through current subject-only space. Therefore, this lablink is to associate as many faculty from the Emory community to facilitate mutual communication in the pursuit of research",
        "epstein":"Dr. Jeff Epstein is currently employed by Emory University as a professor of Computer Science. Currently, he is teaching Emory CS 370 and 170. He is also involved in Emory programming team.",
        "jeff":"Dr. Jeff Epstein is currently employed by Emory University as a professor of Computer Science. Currently, he is teaching Emory CS 370 and 170. He is also involved in Emory programming team.",
        "jinho": "Dr. Choi is currently employed by Emory University as a professor of Computer Science. He is very strong in research related to NLP techniques. We look forward to a fruitful research endeavor by him. ",
        "hi": "Hi! How can I assist you?",
        "hey": "Hello! How should I assist you?",
        "morning": "Good morning! How can I assist you?",
        "afternoon": "Good afternoon! How can I assist you?",
        "evening": "Good evening! How can I assist you?",
        "night": "Hello! How can I assist you?",
        "join": "Explore 'Programs of Interest' to join.",
        "research": "Recognize your research here.",
        "news": "Latest department news on 'News' page.",
        "contact": "Get in touch via Contact page if our bot is unable to respond!.",
        "pas": "Reset password via Emory email.",
        "register": "Sign up with Emory email.",
        "about": "Learn more about us on our website.",
        "why": "I see you are asking about the difference between our website and the official Emory page. This product is a demo-solution that is available to a greater variety of students. Cross-disciplinary research has become state of the art application in the current world. Integration of various discipline is not feasible through current subject-only space. Therefore, this lablink is to associate as many faculty from the Emory community to facilitate mutual communication in the pursuit of research",
        "admin": "Send us an email on why you want to continue our project and we will give you access to the admin feature!.",
        "faculty": "Explore our distinguished faculty at the Professor page",
        "prof": "Explore our distinguished faculty at the Professor page",
        "teach": "Explore our distinguished faculty at the Professor page",
        "instruc": "Explore our distinguished faculty at the Professor page",
        "student": "Discover our talented students at the tab self-recommendation!",
        "program": "Find interesting programs here. Professor will post their recruitment ideal and will be responding to your postings!",
        "updat": "Stay informed with our updates.",
        "team": "Thanks to Simon Bian, Marcus Hill, Michelle Kim, Nazif Azizi and Nicole Cui for their support!",
        "location": "Unfortunately as a class project this website might not have a physical location. You are welcome to contact through email. ",
        "login": "Access your account with login. You must click on the button 'lab link' to invoke the interface. You must be an Emory Student to log in. ",
        "logout": "Logout to exit your account. You can only log out after you login.",
        "dif": "I see you are asking about the difference between our website and the official Emory page. This product is a demo-solution that is available to a greater variety of students. Cross-disciplinary research has become state of the art application in the current world. Integration of various discipline is not feasible through current subject-only space. Therefore, this lablink is to associate as many faculty from the Emory community to facilitate mutual communication in the pursuit of research",
        "safe": "Worried about safety? Your password is fine. We have been using SHA 256 as a technique to protect your information safety. We have never had any security incident and will continue to monitor your profile. All information are available straight from Emory website. ",
        "profile": "Manage your user profile. You could be displaying your profile to your professor and any visitors by clicking on the self-recommendation",
        "email": "Contact us via email by using this form",
        "forgot": "Forgot your password? Reset it in the link!",
        "rese": "Forgot your password? Reset it in the link! Do note that it isn't your Emory email password. Everything can be different. ",
        "name": "Did you not see your name on the website? Our sincere apologies. Write an email through the contact form and an associated Emory webpage and we will immediately contact our support team to fix it for you.",
        "verify": "Complete registration by email verification. Check you junk! If the issue persists, contact through this form. Note: you MUST use the old token before using a new verification code. Do not request twice. Even if an email was sent to you later, the first token is still in our database and you will not be verified successfully.",
        "apply": "Apply for programs online. You will not need to send more cold emails. ",
        "help": "Need huamn-based assistance? Contact us through email by using the lefthand side feature. An agent will be responding quickly.",
        "html": "If you are a professor, you can design your own html through our platform without knowing any CS knowledge. What you see is what you get. A unique link is available for you! Once you register and login, you should be able to decorate your page!",
        "desig": "If you are a professor, you can design your own html through our platform without knowing any CS knowledge. What you see is what you get. A unique link is available for you! Once you register and login, you should be able to decorate your page!",
        "not": "Our sincre apologies for anything that has gone wrong. If you need password reset, please check spam. For professor accessibility, send 'name'. For posting issues, send us an email and we will get back. ",
        "human": "Unfortunately this chat is not monitored. We are using a dictionary-based responses to most suit your design before hand as we are a small team. Our sincere apologies for understaffing, if you need further help please send an email back to us.",
        "hum":  "Unfortunately this chat is not monitored. We are using a dictionary-based responses to most suit your design before hand as we are a small team. Our sincere apologies for understaffing, if you need further help please send an email back to us.",
        "DROP TABLE": "please do not do unsafe operations. Your IP is recorded.",
        "form": "The form is to your left hand side. You must fill all fields.",
        "time": getCurrentTimeAndDate,
        "bot": "Hey there! I am Laby Linky. I'm a virtual assistant that can help you with Lablink-associated questions you may have.",
        "who": "Hey there! I am Laby Linky. I'm a virtual assistant that can help you with Lablink-associated questions you may have.",
        "?": "I see a concern here. I am sorry. None of the above technical documentation match. You may wish to direct your query to the contact form instead.",
        "wow": "Thank you for contacting me. ",
        "nice": "Thank you for contacting me. ",
        "great": "Thank you for contacting me. ",
        "wonderf": "Thank you for contacting me. ",
        "good": "Thank you for contacting me. ",
        "thank": "Thank you for contacting me. ",
    };

    function getCurrentTimeAndDate() {
    const now = new Date();
    const formattedTime = now.toLocaleTimeString();
    const formattedDate = now.toDateString();
    return `I believe you are asking about the time now. It's currently ${formattedTime} on ${formattedDate}.`;
  }

    const handleUserInput = (event) => {
        setUserInput(event.target.value);
    };

    const handleSendMessage = () => {

  if (userInput.trim() !== '') {
    const userMessage = userInput.toLowerCase(); // Convert user input to lowercase
    const timeRegex = /(time|day|hour|month|year|date|today)/;
    if (timeRegex.test(userMessage)) {
        const response = keywordResponses["time"]();
        setChatHistory((prevHistory) => [
          ...prevHistory,
          { sender: 'user', message: userInput },
          { sender: 'bot', message: response },
        ]);
    }
    else{
        let matchedKeyword = null;

    for (const keyword in keywordResponses) {
      if (userMessage.includes(keyword)) {
        matchedKeyword = keyword;
        break; // Stop searching for keywords once a match is found
      }
    }

    if (matchedKeyword) {
      const response = keywordResponses[matchedKeyword];
      setChatHistory((prevHistory) => [
        ...prevHistory,
        { sender: 'user', message: userInput },
        { sender: 'bot', message: response },
      ]);
    } else {
      // Check for likely names using a regular expression
      const nameRegex = "[A-Z]([a-z]+|\\.)(?:\\s+[A-Z]([a-z]+|\\.))*(?:\\s+[a-z][a-z\\-]+){0,2}\\s+[A-Z]([a-z]+|\\.)";
const regexObject = new RegExp(nameRegex, "g"); // "g" flag for global search
console.log(userMessage);
const likelyNameMatch = userInput.match(regexObject);
console.log(likelyNameMatch);
      if (likelyNameMatch) {
        const likelyName = likelyNameMatch[0];
        const notFoundMessage = `It's unlikely that "${likelyName}" is in our database. You can search on the Professor page for more information.`;

        setChatHistory((prevHistory) => [
          ...prevHistory,
          { sender: 'user', message: userInput },
          { sender: 'bot', message: notFoundMessage },
        ]);
      } else {
        setChatHistory((prevHistory) => [
          ...prevHistory,
          { sender: 'user', message: userInput },
          { sender: 'bot', message: "I'm sorry, I don't understand. Please look at our website at the bottom bar and have a look at the GitHub documentation for more instructions." },
        ]);
      }
    }
}
    

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
                        <h2>Hi I'm Laby Linky, your bot for the webpage!</h2>
                        <p>I'm a virtual assistant that can help you with Lablink-associated questions you may have.</p>
                        <button onClick={toggleChatbot} className="chatbot-close">&times;</button>
                    </div>
                    <div className="chatbot-body">
                        <div className="chat-history-container">
                            <div className="chat-history">
                                {chatHistory.map((chat, index) => (
                                    <div key={index} className={`chat-message ${chat.sender}`}>
                                        {chat.message}
                                    </div>
                                ))}
                            </div>
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
