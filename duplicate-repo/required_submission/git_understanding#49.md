## What does ##git bisect## do?

It is used to identify the bug that was introduced to the program by performinf a binary search beterrn a known good commit and a bad commit.
Which helps developers to save time during the debugging session.

## When whould I use it in a real-world debugging situation?

When the code worked well last time but there is an error showing up and we need to find which commit that started causing the bug. With that command, developers don't need to check one by one manually.
For example, in my internship, if a unit test suddenly fials after weeks of development, I could use **git bisect** to find the exact commit where the failure started
## How does it compare to manually reviewing commits?
- Manual review: I would have to guess which commit caused the bug and test each one sequentially. This is slow and error-prone.
- **git bisect**: Cuts the search space in helf each time (binary search). Even in a history of 100 commits, I would onlt need to check about 7 commits
## Demo: Using git bisect

### Step 1: Create commits
In my test repo, I created the following commits:
- `commit a1b2c3d`: Initial commit – add `add()` function (works fine).
- `commit d4e5f6g`: Add `subtract()` function (still works).
- `commit h7i8j9k`: Change `subtract()` but accidentally introduce a bug.
- `commit m1n2o3p`: Add `multiply()` function (bug still exists).

### Step 2: Start bisect
```bash
git bisect start
git bisect bad m1n2o3p       # current buggy commit
git bisect good a1b2c3d      # last known good commit
```
## When I use it in a real world debugging situation?
I would use **git bisect** when:
- The code worked previously but is now broken.
- I don't know which commit introduced the bug.
- The commit history is long, and manually reviewing would waste time.
Example: In my internship project, if a unit test suddenly starts failing after several weeks, I could use git bisect to find the exact commit where the failure was introduced, instead of reading dozens of commits manually.