# Complete Documentation for components folder (javascript files)

# Application.js Component Documentation

## Overview
The `CentralizedApplication` component is a comprehensive React-based interface for managing research program applications and postings at Emory University. It includes features for adding, viewing, and managing programs and applications.

## Features
- **Program and Application Management**: Supports adding, viewing, and deleting research programs and applications.
- **Custom Pagination**: Implements dynamic pagination for displaying programs and applications.
- **Visibility Control**: Allows users to set visibility of their applications (protected or private).
- **Rich Text Editing**: Incorporates `ReactQuill` and `CKEditor` for rich text editing in program descriptions and applications.
- **Dynamic State Management**: Uses `useState` and `useContext` for managing component state and global context.
- **Asynchronous Data Fetching**: Fetches data from a backend API asynchronously.
- **User Authentication**: Utilizes `LabLinkContext` for user authentication and role-based access control.

## Hooks and Contexts
- Uses `useState` for managing state like program and application data, user inputs, and pagination.
- Uses `useEffect` for fetching data on component mount and updates.
- Uses `useContext` to access `LabLinkContext` for global state and user information.
- Utilizes `useMemo` for optimized computation of application counts.

## Styling
- Styled using external CSS imported as `../styles/application.css`.

## External Dependencies
- `React` for the component framework.
- `ReactQuill` and `CKEditor` for rich text editing.
- `react-router-dom` for navigation and linking.
- Backend API for fetching and managing data.

## Custom Functions
- Includes several custom functions for data fetching, adding, and deleting programs and applications.
- Implements `generatePagination` for dynamic pagination logic.


# Chatbot.js Component Documentation

## Overview
The `Chatbot` component is a React-based interactive chat interface designed to assist users with information and answers to frequently asked questions. It features a keyword-based response system and a dynamic chat history.

## Features
- **Interactive Chat Interface**: Provides a user-friendly chat interface for interacting with the bot.
- **Keyword Responses**: Includes a dictionary of predefined responses for common queries.
- **Dynamic Chat History**: Maintains a chat history for the current session.
- **Customizable Responses**: Supports custom responses based on user input.
- **Time and Date Function**: Integrated function to provide the current time and date.

## Implementation Details
- Utilizes `useState` for managing component state such as chat history, user input, and bot activity.
- `useRef` is used to manage focus on the input field.
- Custom functions handle user input, message sending, and response generation.
- Regular expressions are used for detecting specific patterns in user input.

## Styling
- Styled using an external CSS file `bot.css`.
- Includes a toggle button for showing and hiding the chatbot interface.

## External Dependencies
- `React` for the component framework.
- Custom images and assets, such as `bot.webp`, for the chatbot's appearance.

## Usage
- Users can interact with the chatbot by typing questions or commands into the input field.
- The chatbot responds based on predefined keywords or patterns recognized in the input.


# Contact.js Component Documentation

## Overview
The `Contact` component is a React-based contact form designed for user inquiries and feedback. It includes form submission, email sending functionality, and modal displays for notifications and errors.

## Features
- **Form Submission**: Allows users to submit their details (name, email, subject, message) through a form.
- **Email Integration**: Sends an email to users upon form submission using a predefined template.
- **Modal Displays**: Utilizes `Modal` from `react-modal` for displaying success and error messages.
- **Validation**: Includes field validation to ensure all form fields are filled.
- **Dynamic State Management**: Uses `useState` hook for managing local state including form inputs and modal states.
- **Asynchronous Data Handling**: Incorporates `async` function `fetchData` for sending form data to backend and handling email sending.

## Hooks and Contexts
- Uses `useState` for managing component state, such as form inputs and modal visibility.
- Uses `useEffect` for component lifecycle management, although currently commented out.

## Styling
- Relies on external CSS for styling, along with inline styles for specific elements.

## External Dependencies
- `React` for the component framework.
- `react-router-dom` for navigation and linking.
- `react-modal` for modal functionality.
- Backend integration for form submission and email sending (assumed from the use of fetch API).



# Forum.js Component Documentation

## Overview
The `Forum` component is a React-based forum page for a web application, designed to facilitate student and professor interactions within an academic setting.

## Features
- **Pagination**: Implements dynamic pagination for forum posts using `generatePagination`.
- **Post Management**: Allows users to create and view forum posts.
- **Reply Management**: Enables users to reply to existing posts and manage these replies.
- **User Authentication**: Utilizes `LabLinkContext` for user authentication and access control.
- **Rich Text Editing**: Incorporates `ReactQuill` and `CKEditor` for rich text editing in posts and replies.
- **Media Embedding**: Includes a `ContentWithEmbeddedMedia` component to render embedded media in posts.
- **Visibility Control**: Offers options for post visibility (public, protected, private) controlled by the user.

## Hooks and Contexts
- Uses `useState` for local state management.
- Uses `useEffect` for fetching data on component mount.
- Uses `useContext` to access `LabLinkContext` for global state.

## Styling
- Styled using external CSS imported as `../styles/forum.css`.

## External Dependencies
- `ReactQuill` and `CKEditor` for text editing.
- `html-react-parser` and `DOMPurify` for parsing and sanitizing HTML content.


# Home.js Component Documentation

## Overview
`Home` is a React component in the LabLink application serving as the main landing page.

## Features
- Displays a hero section with a motivational quote and a call-to-action button.
- Showcases various research areas in Computer Science with direct links to relevant resources.
- Highlights ongoing projects, upcoming events, and the mission behind LabLink.
- Integrates `Navbar` component for navigation.

## UI Components
- Hero section with a large heading and a button linking to the main content.
- Grid of research areas with buttons linking to external websites.
- List of ongoing projects with images, titles, and descriptions.
- Upcoming events section with event details.
- Accordion-style component describing the mission of LabLink.
- Footer with contact information and links.

## Navigation
- Utilizes `Link` from `react-router-dom` for internal navigation.
- External links for further information on research areas.

## Layout
- Organized into sections for easy navigation and readability.
- Responsive design ensuring compatibility with different screen sizes.

## Styling
- Styled using CSS defined in 'navbar.css' and other related stylesheets.
- Animations and transitions for an engaging user experience.

## Purpose
This component serves as the entry point for users to explore the LabLink platform, providing an overview of available research areas, ongoing projects, and upcoming events, encouraging user engagement and exploration.

## Usage
- As the main landing page, it's the first interface users interact with upon visiting LabLink.
- Offers quick access to different parts of the application and external resources.


# Login.js Component Documentation

## Overview
`Login` is a React component in the LabLink application that facilitates user authentication with NetID and password.

## Key Features
- Provides a login form with NetID and password fields.
- Implements password hashing for secure authentication.
- Includes visibility toggle for the password field.

## Functions
- `validateNetID`: Validates the format of the NetID input.
- `hashPassword`: Hashes the password using SHA-256 for security.
- `togglePasswordVisibility`: Toggles the visibility of the password input field.
- `handleFormSubmit`: Submits the login form and handles authentication logic.

## State Management
- Manages state for form inputs (NetID, password), loading, error, and password visibility using `useState`.

## Context
- Utilizes `LabLinkContext` for managing global authentication status (`isLoggedIn`).

## API Interaction
- Sends login credentials to '/api/login' for user authentication.

## UI Components
- Form inputs for NetID and password with an eye icon to toggle password visibility.
- Links for password reset and new user registration.

## Navigation
- Uses `useNavigate` for red


# Navbar.js Component Documentation

## Overview
`Navbar` is a React component for the navigation bar in the LabLink application, providing links to various sections and user account management.

## Features
- Responsive navigation bar with links to different sections of the application.
- User account management with login, logout, and profile access.

## State Management
- Manages state for menu visibility and user authentication status using `useState`.

## Context
- Utilizes `LabLinkContext` for accessing and updating user-related data (`isLoggedIn`, `netID`).

## Functions
- `toggleMenu`: Toggles the visibility of the mobile menu.
- `handleLogout`: Logs out the user by clearing session storage and context states.
- `checkActive`: Determines if the current path matches the link's path for active styling.

## Styling
- Custom CSS styles are applied from 'navbar.css'.
- Responsive design to accommodate different screen sizes.

## UI Components
- Links to different application sections such as Home, Professors, Forum, etc.
- User-specific options like Profile and Logout for authenticated users.
- A burger menu for mobile view, with expanded menu options on click.

## Navigation
- Uses `Link` from 'react-router-dom' for client-side navigation without page refresh.
- `useLocation` from 'react-router-dom' to get the current path for active link styling.

## Additional Components
- Integrates `Chatbot` for user interaction and assistance.

## Usage
This component provides a consistent navigation experience across different pages of the LabLink application, with dynamic content based on user authentication status.


# News.js Component Documentation

## Overview
`News` is a React component in the LabLink application that displays news articles with pagination and modal details.

## Key Features
- Displays a list of news articles fetched from an API.
- Implements pagination to navigate through news articles.
- Uses a modal to show full descriptions of news articles.

## State Management
- Uses React's `useState` to manage news data, current page, modal visibility, and article description.
- `generatePagination` function dynamically creates pagination links.

## API Interaction
- Fetches news data from '/api/news' endpoint on component mount.

## UI Components
- News articles are presented in a list with image, title, author, and a brief description.
- `Modal` from 'react-bootstrap' is used to display the full description of a news article.
- Pagination is handled at the bottom of the page.

## Event Handlers
- `handleFormSubmit`: Submits the verification code for user verification.
- Click handlers for pagination links and modal toggling.

## Styling
- Custom CSS styles are defined in 'verify.css' for


# NewUserVerify.js Component Documentation

## Overview
`NewUserVerify` is a React component designed for new users in the LabLink application to verify their accounts using a verification code.

## Key Features
- Allows new users to enter a verification code for account verification.
- Manages local state for verification code, loading, and error status.

## Functions
- `handleButtonClick`: Toggles UI state.
- `resetStates`: Resets the verification code to its initial state.
- `handleFormSubmit`: Submits the verification code and handles the response.

## Context
- Utilizes `LabLinkContext` to access `netID` context value.

## API Interaction
- Sends verification data to '/api/reset/verifyreg' for backend verification.

## UI Components
- Form for entering the verification code.
- Loading state and error handling for user feedback.

## Navigation
- Uses `useNavigate` for redirecting users upon successful verification.

## Styling
- Styled using CSS defined in 'verify.css'.

## Usage
Intended for new users who need to verify their accounts before accessing the LabLink application.


# Professors.js Component Documentation

## Overview
`Professors` is a React component in the LabLink application for displaying and filtering professor profiles.

## Features
- Manages state for pagination, sorting, filtering, and loading status.
- Provides functionality for sorting by name or similarity and filtering by subjects.
- Displays professor profiles with pagination.

## Functions
- `generatePagination`: Creates pagination links based on the current page and total number of pages.
- `sortProfessorsByName`: Sorts professors alphabetically.
- `calculateSimilarity`: Calculates similarity between student and professor profiles.
- Event handlers for searching, sorting, and subject filtering.

## Context
- Utilizes `LabLinkContext` for accessing user-specific data.

## API Integration
- Fetches professor data from '/api/forum?dataType=ProfessorSample'.

## UI Components
- Displays professor profiles using cards with images, names, titles, and subjects.
- Includes a search bar, sort buttons, and a multi-select subject filter.
- Pagination controls for navigating through the list of professors.

## Styling
- Uses custom CSS styles defined in 'professors.css'.

## Usage
Used to view and interact with professor profiles, offering personalized sorting and filtering options for users.


# Profile.js Component Documentation

## Overview
`Profile` is a React component for viewing and editing user profiles in the LabLink application.

## Features
- Utilizes context from `LabLinkContext` for user-related data.
- Provides editable forms for personal information using Material UI Joy components.

## State Management
- Manages user information (name, role, email, year, major, courses, bio) through context.
- Uses local state for edit mode and user data fetching.

## Functions
- `toggleEditMode`: Toggles between view and edit modes.
- `handleSave`: Saves the updated profile data to the database.
- `handleCancel`: Cancels edits and reverts to the original profile data.

## API Interaction
- Fetches and updates user data from '/api/forum' endpoint.

## UI Components
- Form elements (`FormControl`, `Input`, `Textarea`) for editing user details.
- Displays user information in a card layout (`Card`, `Typography`).
- `Button` elements for triggering edit mode and saving changes.

## Styling
- Uses MUI Joy components for a consistent and modern UI design.

## Usage
Used for managing and updating user profiles within the LabLink application.

# Register.js Component Documentation

## Overview
`Register` is a React component for user registration in the LabLink application, featuring password hashing and form handling.

## Key Features
- Manages UI, loading, error states, user inputs, and password visibility.
- Uses SHA-256 hashing for password security.
- Contextual access to `netID` through `LabLinkContext`.

## Functions
- `hashPassword`: Hashes the password using SHA-256.
- `handleButtonClick`: Toggles UI state or navigates to the home page.
- `togglePasswordVisibility`: Toggles visibility of the password field.
- `validateNetID`: Validates the format of `netID`.
- `fetchData`: Submits registration data to the backend.
- `handleFormSubmit`: Processes form submission and triggers data fetching.

## API Integration
- Communicates with '/api/register' for user registration.

## UI Components
- Provides form fields for NetID and password.
- Includes visibility toggle for the password field using custom `EyeIcon` and `EyeSlashIcon`.
- Links to the login page for existing users.

## Styling and Layout
- Uses `login.css` for styling.
- Incorporates `eLogo` for branding.

## Additional Components
- Integrates `Chatbot` for user assistance.

## Navigation
- Uses `useNavigate` for programmable navigation post-registration.


# ResetPass.js Component Documentation

## Overview
`ResetPass` is a React component for handling password reset requests in the LabLink application.

## Features
- Manages UI state, loading status, user inputs, and email content.
- Validates `netID` and generates random verification codes.

## Functions
- `handleButtonClick`: Navigates to the home page or changes UI state.
- `generateRandomCode`: Generates a 4-digit random code.
- `resetStates`: Resets form and email states.
- `validateNetID`: Validates the format of `netID`.
- `handleFormSubmit`: Handles form submission, sends email with verification code, and navigates to the verification page.

## Context and Navigation
- Uses `LabLinkContext` for accessing and setting `netID`.
- `useNavigate` for programmatic navigation.

## API Integration
- Interacts with backend APIs ('/api/reset/forget' and '/api/email') for password reset functionality.

## UI
- Renders a form for NetID input with dynamic UI changes based on state.
- Displays loading state and error messages as needed.

## Styling
- Uses external CSS for styling the login form.
- Includes an `eLogo` image for branding.

## Additional Components
- Integrates `Chatbot` for user assistance.


# SingleProf.js Component Documentation

## Overview
`SingleProf` is a React component for displaying and editing professor information in the LabLink application.

## Functionality
- Manages states for editing mode, professor details, loading, and editor content.
- Utilizes `LabLinkContext` for access to `netID`.
- Integrates with `/api/forum` for fetching and updating professor data.

## Key Features
- Dynamic content loading and error handling.
- `handleEditClick`: Toggles the editing mode.
- `fetchProfessorsAndUpdateState`: Fetches professor details from the backend.
- `modifyCV`: Submits updated professor information.
- Uses `ReactQuill` for rich text editing.

## UI Components
- Displays professor details including image, title, email, and office.
- Provides a WYSIWYG editor for authorized users to edit professor's public research website.

## Styling
- Custom CSS styles for layout and responsiveness.
- Utilizes Bootstrap components for modal and button elements.

## Navigation and Context
- Uses `useNavigate` and `useParams` for routing and parameter retrieval.
- Contextual editing based on user's `netID`.

## Usage
Used for displaying individual professor profiles and allowing authorized users to edit their information.

# Verify.js Component Documentation

## Overview
`Verify` is a React component in the LabLink application for user verification using a code.

## Functionality
- Manages UI state (`isChange`), loading, error, and verification code states using `useState`.
- `handleButtonClick`: Toggles the `isChange` state.
- `resetStates`: Resets the verification code state.
- `handleFormSubmit`: Submits the form, sends verification data to '/api/reset/verifycode', handles responses, and navigates based on verification status.

## Context
- Utilizes `LabLinkContext` for accessing and setting `netID`.

## API Interaction
- Communicates with the backend API for verifying the user's inputted code.

## UI
- Provides a form for users to input their verification code.
- Displays loading state and error messages as needed.

## Styling
- Uses external CSS for styling the verification form.

## Navigation
- Redirects to the registration page upon successful or specific unsuccessful verifications.

## Usage
Used within the LabLink application for new user verification.


# VerifyUser.js Component Documentation

## Overview
`VerifyUser` is a React component for verifying user identities in a web application using email verification.

## Features
- Manages state for user inputs (`netID`, `email`), API response, and UI states (`isChange`, `loading`, `isError`).
- Integrates with backend APIs ('/api/reset/forget' and '/api/email') for verification and email dispatch.
- Validates NetID format and generates random verification codes.

## Functionality
- `handleButtonClick`: Toggles UI state or navigates to the home page.
- `generateRandomCode`: Creates a 4-digit verification code.
- `resetStates`: Resets form and email data states.
- `handleFormSubmit`: Submits the form, validates inputs, manages API requests, and handles session data.

## UI and Styling
- Renders a form for NetID input with dynamic UI changes based on state.
- Utilizes external CSS for styling and responsive design.
- Incorporates an image, navigation elements, and user feedback via alerts.

## Usage
Used for user verification by sending a code to the user's email linked with their NetID.
