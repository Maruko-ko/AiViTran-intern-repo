## What makes a good variable or function name?
A good variable of function name is:
- Clear and descriptive of its putpose.
- Consistent with naming convention(camelCase for JavaScript)
- Avoids vauge abbreviations or overly generic names.
Specific enough do the reader can understand its intent without needing extra comments.
## What issues can arise from poorly named variables?
- Confusion when reading the code, making it harder to understand.
- Increased chance of introducing bugs because the purpose of a variable/function is unclear.
- Misuse of functions or variables if other developers musunderstand their intnet.
- Slower onboarding for new team members who need to guess what a name means.
## Example: Improving poor naming
### Before
```js
// Poor naming: unclear, inconsistent styles
let x = "John";
let addr = "123 Street";
let p = "123-456";

function doStuff(a, b) {
    return a * b;
}
```
### After
``` js
// Improved naming: descriptive and consistent
let customerName = "John";
let customerAddress = "123 Street";
let customerPhoneNumber = "123-456";

function calculateTotalPrice(price, quantity) {
    return price * quantity;
}
```
## How did refactoring improve code readability?
- The old version had vague name (x, addr, p) that gave no contest about what values represented
- The refactored version uses clear, descriptive names
- The function name was changed from doStuff (ambiguous) to calculateTotalPrice (specific nad meaningful)
- This improved readability, reduced confusion, and made the code more maintainable
## Evidenc of chages
The before and after code snippets above serve as evidence of how I improved naming for better readbility.