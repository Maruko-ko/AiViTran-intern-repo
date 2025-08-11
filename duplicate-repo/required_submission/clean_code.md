## Why is code formatting important?
It helps the the code's structure looks more clean, easy to read, understand and maintain. Also it helps developers quickly spot errors and collaborate effectively with others.
## What issues did the linter detect?
It detect 4 errors were identified in the eslint configuration which is set for browser code, but this project is written in Node.js and use Node.js globals.
To fix that simply modify a bit in the configuration file 
### From:
 `languageOptions: { globals: globals.browser },`
### To:
  `languageOptions: { globals: globals.node },`
## Did formatting the code make it easier to read?
Yes, it makes it easier to read by ensuring consistent indentation and structure.