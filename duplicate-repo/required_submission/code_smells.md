### Before 
```
    ///Magic NUmber & String
    const discount = price * 0.15;
```
### After
```
    DISCOUNT_RATE = 0.15;
    discount = price * DISCOUNT_RATE;
```

### Before
```

    // Duplicated code
    function getAdminUser(id) {
        return database.query("SELECT * FROM users WHERE id = " + id + " AND role = 'admin'");
    }

    function getNormalUser(id) {
        return database.query("SELECT * FROM users WHERE id = " + id + " AND role = 'normal'");
    }
```
### After
```
    function getUserByRole(id, role) {
        return database.query("SELECT * FROM users WHERE id = " + id + " AND role = '" + role + "'");
    }
```

### Before
```
    // Inconsistent naming
    let custName = "John";
    let CustomerAddress = "123 Street";
    let cust_phone_number = "123-456";

```
### After
```
    let customerName = "John";
    let customerAddress = "123 Street";
    let customerPhoneNumber = "123-456";
```
## What code smells did I find in my code?
I found three main code smells in my code:
- **Magic number & String**: using unexplained hardcodenumeric values directly in the code
- **Duplicate Code**: repeated functions that differed only slightly, which made the code harder to maintain
- **Inconsistent Naming**: Mixing different naming conventions (camelCase, PascalCase, snake_case) which made the code confusing and error-prone
## How did refactoring improve the readability and maintainability of the code?
- It helps the code clearer, more meaningful to the developer and easier for future modification.
- Removing duplicate code by combining similar functions into one reduced redundancy and simplified maintenance
- Standardising naming conventions improved readability, made the codebase more consistent, and reduced the chance of mistakes.
## How can avoiding code smells make future debugging easier?
Based on the easy to understand approach, it makes it easier to debug cause from the variable's name, developer can identify whether it is the issue or not (whether the issue relates to incorrect result or not, if it is then having a look at all variables that are linked to that).
