#### Before 
```
    const discount = price * 0.15;
```
### After
```
    DISCOUNT_RATE = 0.15;
    discount = price * DISCOUNT_RATE;
```
## What code smells did I find in my code?
The above code is the example of the ##`Magic Number & String`##. It refers to using unexplained hardcoded numeric values directly in the code, which makes it unclear what the value represents and harder to maintain or update later.
## How did refactoring improve the readability and maintainability of the code?
It helps the code clearer, more meaningful to the developer and easier for future modification.
## How can avoiding code smells make future debugging easier?
Based on the easy to understand approach, it makes it easier to debug cause from the variable's name, developer can identify whether it is the issue or not (whether the issue relates to incorrect result or not, if it is then having a look at all variables that are linked to that).
