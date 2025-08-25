# Clean Code – Refactoring Complex Code

### Before
```js
// Complex code: multiple nested conditions
function getUserStatus(user) {
    if (user !== null && user !== undefined) {
        if (user.isActive === true) {
            if (user.isAdmin === true) {
                return "Active Admin";
            } else {
                return "Active User";
            }
        } else {
            return "Inactive";
        }
    } else {
        return "No User";
    }
}
```
```js
// Refactored: simplified with early returns
function getUserStatus(user) {
    if (!user) return "No User";
    if (!user.isActive) return "Inactive";
    return user.isAdmin ? "Active Admin" : "Active User";
}
```
## What made the original code complex?
- The original version used deeply nested **if** statements, which made it hard to follow the logic at first glance
- Repeared checks **(user != null && user != undefined)** cluttered the flow
- As the project grows, this pattern increases the chance of bugs and makes debugging slower.
## How did refactoring improve it?
- Used early returns to eliminate deep nesting
- Simplified null/undefined checks with **if (!user)**
- Made the logic shorter, clearer, and easier to maintain
- Any developer reading the refactored function can now understand it in just a few lines.
## Evidence of changes
All required code changes have been included directly in this markdown file. 
The before and after code snippets above serve as evidence of how the function was simplified during refactoring.