## How do unit tests help keep code clean?
By catching bugs earky, ensuring each part of the code works as expected, and making it safer to refactor or updaye code. They encourage writing modular, well-structured functions and help prenvent future errors. Also keeping the error in a controlable mode when testing a short amount of code at a time.
## What issues did I find while testing?
Functions not handling input correctly, unexpected results for edge cases, missing errors that cause tests to fail.
# Main code
```js
// discount.js
function calculateDiscount(price, rate) {
    if (price < 0) throw new Error("Invalid price");
    return price * rate;
}

module.exports = calculateDiscount;
```

## Unit tests written (using Jest)
I used Jest as my testing framework because it is widely used in Javascript porjects, easy to configure, and integrates well with npm.
``` js
// discount.test.js
const calculateDiscount = require("./discount");

test("applies 15% discount correctly", () => {
    expect(calculateDiscount(200, 0.15)).toBe(30);
});

test("returns 0 when price is 0", () => {
    expect(calculateDiscount(0, 0.15)).toBe(0);
});

test("throws error for negative price", () => {
    expect(() => calculateDiscount(-50, 0.15)).toThrow("Invalid price");
});
```
## What issues did I find while testing?
When writing and runing the tests, I discovered:
- The original version did not handle negative prices, which produced incorrect results. I fixed this by adding a validation check that throws an error.
- I had not considered adge cases such as when the price is 0. Writing a test for this scenario forced me to confirm the function returned 0 as expected.

## Reflection
Writing these unit tests improved my code in several ways: 
- More robust logic: By adding error handling for valid input, I made the function safer.
- Better design: Thinking about test cases encouraged me to write the function in a cleaner, modular way.
- Easier debugging: If something breaks in the future, the tests will show exactly which scenario failed.