## Why is code formatting important?
Code formatting is important because it:
- Makes the code clean, consistent, and easier to read.
- Helps developers quickly spot erros and avoid mistakes.
- Ensures a consistnet style across the team, which makes collaboration smoother.
- Improves maintainability over time.
## What issues did the linter detect?
It detect 4 errors were identified in the eslint configuration which is set for browser code, but this project is written in Node.js and use Node.js globals.
To fix that simply modify a bit in the configuration file 
### From:
 `languageOptions: { globals: globals.browser },`
### To:
  `languageOptions: { globals: globals.node },`
## Examle of a formatting fix
### Before
```js
function add(a,b){return a+b;}
```
### After
```js
function add(a, b) {
    return a + b;
}
```
## Did formatting the code make it easier to read?
Yes, it makes it easier to read by ensuring consistent indentation and structure. Before formatting, some lines were craped and inconsistent, making debugging slower. After formatting, the structure is aligned and consistent, so it's easier to see the flow of the code at a glance