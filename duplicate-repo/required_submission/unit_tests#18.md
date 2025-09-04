# Reflection – React Testing Library

## Benefits of using React Testing Library
- RTL encourages testing **based on user behavior**, not on internal implementation details like state or class names.  
- Tests are less fragile when refactoring internal code, as long as the UI and interactions remain the same.  
- Closer to real user experience, ensuring better product quality.

## Challenges when simulating user interaction
- Need to use async/await because some interactions and DOM updates are asynchronous.  
- Sometimes tricky to choose the right query method (`getByRole`, `getByText`, `getByLabelText`, etc.).  
- Requires installing and learning `@testing-library/user-event` for more natural user interaction simulation (compared to `fireEvent`).  
