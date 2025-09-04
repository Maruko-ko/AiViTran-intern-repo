# Redux Unit Tests – Reflection

## What was the most challenging part of testing Redux?
The biggest challenge was testing **asynchronous actions**. Reducers are pure functions and easy to test, but async thunks require mocking API calls (e.g., Axios) and simulating pending/fulfilled/rejected states. Ensuring the mock is set up correctly was the trickiest part.

## How do Redux tests differ from React component tests?
- **Redux tests** focus on state transitions: given a state + action, does the reducer return the correct new state? For async actions, the focus is on side effects and final state updates.
- **React component tests** focus on rendering, user interaction, and UI changes (e.g., using React Testing Library). They verify that the component behaves correctly in response to state, props, and user events.
- In short: Redux tests check **logic and state management**, while React tests check **UI and behavior**.
