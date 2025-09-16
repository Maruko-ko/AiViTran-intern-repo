## What are the benefits of using selectors instead of directly accessign state?
Selectors are functions that extract specific pieces of data from the Redux store. Instead of accessing state directly in the components, the reason for using selectors are:
1. Encapsulation: Selectores hide the structure of the state, so if the state shape changes, only the selector needs updating.
2. Reusability: Selectors can be resued across different components.
3. Performance: Memoized selectors can prevent unneccessary re-renders by only recalculating when relevant state changes.
4. Readability and Maintainability: Selectors give meaningful names to the data extracted, making the code easier to read and maintain.They can also combine or compute derived data, keeping components simpler.