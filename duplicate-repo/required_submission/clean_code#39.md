### Before
```js
function divide(a, b) {
    return a / b;
}
```
### After
```js
    function divide(a, b) {
        if (typeof a !== "number" || typeof b !== "number") {
            throw new Error("Inputs must be numbers");
        }
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        return a / b;
    }
```
## What was the issue with the original code?
The issue with that function is it does not check for invalid inputs, such as dividing by zero or non-numeric values.This can leads to unexpected results, runtime errors, or bugs thar are hard to trace and fix.
## How did I fix this?
While reviewing my utility functions, I noticed that the divide function would silently return Infinity or NaN without any context.
I added input validation and explicit error handling:
- Check if both inputs are numbers.
- Throw an error if the denominator is zero
This makes the beabvior predictable and prevents invalid reuslts from spreading through the codebase. 
## How does handling errors improve readability?
By making it clear how the function deals with unexpected situations. It shows what will happen if invalid inputs are provided, making the code behavior easier to understand. Future developers won't have ti guess how the function behaves with bad inputs.
![NUnit test](../img/issue39.png)
*Figure 1: Testing output file*