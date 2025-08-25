## Why is breaking down functions beneficial?
Breaking large functions into smaller ones helps because:
- Each function does **one clear thing**, which makes it easier to read and test
- Bugs are easier to isolate since the scope of each function is small.
- Smaller functions can be **reused** in other parts of the codebase.
- Future updates are safer, since changes are limited to focused areas instead of a long block of logic.
## Example of refactoring
### Before
### Before
```js
// A long, complex function handling multiple steps at once
function processOrder(order) {
    // validate
    if (!order || !order.items || order.items.length === 0) {
        throw new Error("Invalid order");
    }

    // calculate total
    let total = 0;
    for (let item of order.items) {
        total += item.price * item.quantity;
    }

    // apply discount
    if (order.coupon === "SALE10") {
        total = total * 0.9;
    }

    // save order
    database.save(order);

    // send email
    email.send(order.customerEmail, "Your order is confirmed");

    return total;
}
```
### After
```js
function validateOrder(order) {
    if (!order || !order.items || order.items.length === 0) {
        throw new Error("Invalid order");
    }
}

function calculateTotal(order) {
    return order.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function applyDiscount(total, coupon) {
    return coupon === "SALE10" ? total * 0.9 : total;
}

function processOrder(order) {
    validateOrder(order);
    let total = calculateTotal(order);
    total = applyDiscount(total, order.coupon);

    database.save(order);
    email.send(order.customerEmail, "Your order is confirmed");

    return total;
}

```
## How did refactoring improve the structure of the code?
- The original processOrder function tried ti handle validation, calculation, discounting, saving, and emailing all in one place. This made it long and harder to maintain.
- After refactoring, each step was broken down into small, focused functions (validateOrder, calculateTotal, applyDiscount).
- This reduced duplication, made the code much easier to read, adn allowed me to test part individually.
- The main processOrder function now reads like a cleare sequence of steps, almost like plain English.