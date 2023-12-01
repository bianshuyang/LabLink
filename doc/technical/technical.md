
## Technical Documentation
# Welcome to the LabLink! Developer Guide

**List of files / folders here:**
### LabLink/src/components/:
**Contact.js**: Gives users an option to contact. Anything unresolved should be handled through this page, including errors in page to directly communicate with the technical team.

**Error.js**: This is a 404 pages. It currently redirects to a quill editor to allow anyone to use our editor. 

**Forum.js**: Users are allowed to post their self-recommendation to professors by setting up privileges.

**Application.js**: Professors are allowed to post their programs for students to apply or respond in different visibility settings.

**Chatbot.js**: A cool chatbot that executes a reply based on a hashmap / dictionary predefined. Current allowed questions include: current time, name identification (No lookup to the database), General greetings, function question. It can serve as an interactivate FAQ page.

**Home.js**: Home Page Javascript File. This introduces students to the various parts of the Lab Link features.

**Login.js**: Login Page component.

**Navbar.js**: Navigation Bar. This is our "header" that allows user to go to the respective part. 

**News.js**: News Page Javascript File. For now it is static but would be allowed to be updated accordingly upon audience request.

**Professors.js**: Professors Page. This includes sorting, searching for multiple disciplines for users interested in cross-disciplinary work, and also sort by similarity upon user login.

**Profile.js**: User Profile Page Javascript File.

**ReactComponent.js**: React for adding Professor information to Professors page using props.

**Register.js**: Register Page Javascript File.

**ResetPass.js**: Reset Password Page Javascript File.
- Defines React component ResetPass for a password reset feature.
- Manages its state with hooks for change indication, data, loading, error, user input for netID, and email content.
- Uses a function to handle form submission, which validates the netID, generates a verification code, sends an email to the user's Emory address with the code, and then navigates to a verification page.

**SingleProf.js**: This allows a user to read the profile on a single professor. 

**verify.js**: This is an intermediate page for allowing a verification code to be sent to an `NETID@emory.edu` address.

**NewUserVerify.js**: This is another intermediate page for allowing a verification code to be sent to an `NETID@emory.edu` address.


We appreciate your feedback!

### LabLink/src/styles/:

**forum.css**: style for forum.

**login.css**: style for login page

**navbar.css**: style for navigation bar

**reset.css**: style for reset password page

**verify.css**: style for verification code page.

### LabLink/public/images/:
Images used in the Lablink website can be found here

