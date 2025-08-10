## Why pushing directly to main problematic?
Pushign directly to main is risky because it can override stable code, introduce bugs to production and bypass the review and testing process. This can pause problems for other team members working from the same branch.
## How do branches help with reviewing code?
Branches allow developers to work on features or fixes separately from the main branch. This separation makes it easier to review changes in pull requests before merging, ensuring higher code quality and reducing the chances of breaking functionality.
## What happens of two people edit the same file on different branches?
If two people edit different parts of the file, Git can merge changes automatically. However, if they edit the same lines, Git will create a merge conflict that must be manually resolved before the branches can be merged.