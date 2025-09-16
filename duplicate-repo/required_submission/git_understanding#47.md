## What is a Pull Request (PR) and Why is it Used?  
A Pull Request (PR) is a request to merge code from one branch into another (typically into `main` or `develop`). It’s a way for developers to propose changes, share them with others, and start a review process before integrating them into the main codebase.  

PRs are important because they:  
- Enable **code review**, ensuring quality and catching bugs early.  
- Provide a **discussion space** for team members to ask questions and suggest improvements.  
- Keep a **history of changes**, linking commits to issues and documenting decisions.  
- Ensure that new code follows team standards and integrates properly before merging.

## Why are PRs Important in a Team Workflow?  
PRs serve as checkpoints in collaborative development. They prevent unreviewed or buggy code from entering production, help maintain consistency, and foster knowledge sharing among team members. Through comments and review, PRs encourage collaboration and collective ownership of the codebase.  

## What Makes a Well-Structured PR?  
A well-structured PR should:  
1. **Have a clear title and description** – Summarize what was changed and why.  
2. **Be small and focused** – Contain a single feature, bug fix, or refactor, making it easier to review.  
3. **Reference related issues** – Link to tickets or issues for context.  
4. **Include tests or documentation updates** – If applicable, ensure the change is verifiable.  
5. **Be consistent with project conventions** – Follow coding style and commit message guidelines.  

## Reflection from Reviewing an Open-Source PR  
By reviewing an open-source PR (e.g., from the React GitHub repo), I learned:  
- **Reviews are collaborative**: Multiple reviewers provide feedback, sometimes suggesting small improvements (naming, comments) or bigger design changes.  
- **Polite and constructive communication matters**: Comments are written respectfully, focusing on the code, not the developer.  
- **Iteration is normal**: Authors often push additional commits after addressing feedback, and the PR evolves over time.  
- **Approval is explicit**: A PR is only merged after approvals and passing automated tests (CI/CD).  

This process shows how PRs help ensure high-quality contributions in large, distributed teams.
