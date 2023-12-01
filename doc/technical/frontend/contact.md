### `Contact` Component Documentation

The `Contact` component is a React-based interface designed for the "LabLink", functioning as a contact page. 

#### Component Structure

1. **State Management**: 
    - Uses React's useState to handle different types of data: form details (name, email, subject, text), email settings (emailData), whether modals are shown (modalIsOpen, errorModalIsOpen, modalMessage), and other display states (isChange, data, loading, isError).
   
2. **User Interface Components**:
   - **Modals**: Two modals (`Notification Modal` and `Error Modal`) are used for user feedback. They are toggled based on specific conditions and user actions.
   - **Form**: user input form is present to get contact information and queries.

#### Functionalities

- **Form Submission Process**:
  - The form submission is handled through `handleFormSubmit`, which basically validate checks and then proceeds with data submission and email sending.

- **Data Fetching and Email Sending**:
  - Executes a POST request to a specified endpoint ("/api/contact") and sends an email to the user upon successful form submission.

- **Validation and Error Handling**:
  - Implements form validation (`validateFields`) and error handling during data fetching and email operations.


