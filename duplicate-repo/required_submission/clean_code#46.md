# Clean Code Principles

## Simplicity – Keep code as simple as possible  
Simplicity reduces bugs, makes the code easier to maintain, and easier to understand. If logic can be expressed concisely while still being clear, that is better than making it complex. Avoid over-engineering—don’t add features “just in case” or “for later.”

## Readability – Code should be easy to understand  
Code should read almost like prose: clear variable and function names, proper indentation, clean structure, and straightforward expressions. Future readers (including you) should be able to follow the code without guesswork.

## Maintainability – Future developers (including you!) should be able to work with the code easily  
Code should be easy to fix, extend, and debug. If adding a feature requires editing many unrelated parts, or if the code has lots of tight coupling, it becomes hard to maintain. Break down responsibilities, keep functions small, and add tests when possible.

## Consistency – Follow style guides and project conventions  
Projects should have consistent rules (naming conventions, spacing, file structures). Consistency makes codebases predictable, easier to read, and easier for teams to collaborate.

## Efficiency – Write performant, optimized code without premature over-engineering  
Don’t obsess over optimization too early, but when performance matters (large datasets, critical paths), code should be efficient. Avoid unnecessary loops or repeated calculations. Optimize only when needed, not prematurely.


# Messy Code Example

```bash
function doStuff(a,b,c) {
  let x = a * b;
  if(c) {
    x = x + b * c;
    for(let i=0;i<10;i++){
      console.log("Hi "+a);
    }
  } else {
    for(let i=0;i<10;i++){
      console.log("Hi "+a);
    }
  }
  return x;
}
```
Why this code is messy:
- Function and variable names are meaningless (doStuff, a, b, c, x).
- Code duplication: the for loop printing "Hi "+a appears in both branches.
- The if/else structure is more complex than necessary.
- The purpose of c is unclear.

# Clean code example:
```bash
    function repeatGreeting(name, times) {
    for (let i = 0; i < times; i++) {
        console.log("Hi " + name);
    }
    }

    function calculateValue(multiplier, baseValue, extraValue = 0) {
    return multiplier * baseValue + extraValue * baseValue;
    }

    function processCalculation(baseValue, multiplier, extraMultiplier, includeExtra) {
    let result = multiplier * baseValue;
    if (includeExtra) {
        result = calculateValue(multiplier, baseValue, extraMultiplier);
    }
    repeatGreeting(baseValue, 10);
    return result;
    }
```

Improvements:
- Meaningful function and variable names.
- Function responsibilities are separated (repeatGreeting, calculateValue, processCalculation).
- Reduced duplication: the greeting function is reused.
- Default parameter (extraValue = 0) makes the function flexible.