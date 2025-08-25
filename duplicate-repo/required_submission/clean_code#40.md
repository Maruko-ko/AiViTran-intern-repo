## When should I add comments?
I should add commetns when:
- The logic is complex or not immediately obvious.
- Explaining *why* a decision was made (not just what the code does).
- Sharing important context for teammates or my future self.
- Marking tricky edge cases or warnings for debugging later.
## When should I avoid comments and instead improve the code?
I should avoid comments when the code itself can be made clearer by:
- Using better variable and function names.
- Simplifying logic to make it more readable.
- Removing redundancy  instead of explaining it in comments

## Example of Poor vs Improved comments
### Before
```js
// This function adds two numbers
// It takes a and b
// It returns a + b
function add(a, b) {
    return a + b; // add them
}
```
### After
```js
// Calculates the total price including tax.
// Used in checkout flow.
function calculateTotalPrice(basePrice, taxRate) {
    return basePrice + (basePrice * taxRate);
}
```