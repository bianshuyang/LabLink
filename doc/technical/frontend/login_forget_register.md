### User Authentication System Components

![image](https://github.com/bianshuyang/LabLink/assets/52821055/67d7d032-6d93-45ed-b16f-f5f5ec5f0f43)


#### 1. New User Registration
- **Register Component**: This is the entry point for new users to create an account. Users provide their registration details which are submitted to the system.
- **VerifyUser Component**: Once registration details are submitted, they are processed by this component. This is the time when a NETID is prompted to be used.
- **NewUserVerify Component**: Verification email is sent between these two stages, this component sends a verification code to the user to ensure they own the email address. The user must complete this step to proceed. 
- Case: **Skipping Verification**: If a user attempts to log in without completing the verification process, the system will block the login attempt. An alert will be popped up and verify User component is redirected.

#### 2. Existing User Login
- **Login Component**: This is the standard login interface for users who have already registered and verified their account. Users will enter their credentials to gain access to their accounts.
- **Verification Block**: If the user has not completed the verification process, this block prevents access to the user's account, ensuring that only verified users can log in. It also blocks the user to access the system when password is incorrect.

#### 3. Forgotten Password
- **ResetPass Component**: If an existing user forgets their password, they can initiate a password reset through this component. 
- **Verify Component**: Similar to the VerifyUser component, this is used to verify the user's identity before allowing a password reset. A code is sent. And in the process user old credentials is permanently dropped.
- **User Redirected**: After successfully resetting the password, the user is redirected to the register component.

### Concrete functions explanations.

### `togglePasswordVisibility`
This function toggles the visibility of a password input field on a user interface.
- It inverts the current state of `isPasswordVisible`, which is presumably used to control whether the password is displayed as plain text or hidden.

### `validateNetID`
This function validates a NetID (a user identifier, presumably for a network or system).
- Checks if the NetID is empty and throws an error if it is.
- Ensures the NetID starts with an alphabetical character; if not, it throws an error.
- Ensures the NetID is not solely numeric; if it is, it throws an error.

### `fetchData` and `handleFormSubmit`
Most submission of the form is there. 

### `generateRandomCode`
Generates a random 4-digit verification code as a string.
