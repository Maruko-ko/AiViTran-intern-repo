## Before
```js
function getAdminUser(id) {
    return database.query("SELECT * FROM users WHERE id = " + id + " AND role = 'admin'");
}

function getNormalUser(id) {
    return database.query("SELECT * FROM users WHERE id = " + id + " AND role = 'normal'");
}
```

## After
```js
function getUserByRole(id, role) {
    return database.query("SELECT * FROM users WHERE id = " + id + " AND role = '" + role + "'");
}

```
## What were the issues with duplicated code?
In my code base, I found two functions that both queried users but only differed by role. This created unnecessary duplication and made maintenance harder.
## How did refactoring improve maintainability?
Refactoring is the process that help the existing code base becomes clearer and easier to understand. It helps reducing the risk of errors and inconsistencies in the future code base.
