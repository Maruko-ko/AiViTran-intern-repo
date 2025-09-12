## What is the purpose of CI/CD?
Continuous Integration (CI) and continuous Deployment/ Delivery (CD) are practices that automate the process of building, testing, and deploying software.
- CI (continuous integration): Developers frequently merges code changes into the main branch. Automated workflows (build, test) ensuring changes do not break the application.
- CD (continuous deployment): Automates delivery of applications to production or staging environments after successfu; CI checks
**Purpose**:  
- Detect issues early by running tests and checks automatically.  
- Improve developer productivity by reducing manual steps.  
- Ensure consistent and reliable builds across environments.  
- Shorten feedback loops, enabling faster iteration and delivery.  

## How does automating style checks improve project quality?
- **Consistency**: Automated linting enforces coding style guidelines, preventing inconsistent formatting across contributors.  
- **Readability**: Consistent code style improves readability, making code easier to maintain.  
- **Reduced Manual Review**: Reviewers can focus on logic and architecture instead of style issues.  
- **Error Prevention**: Spell checks and lint rules often catch small mistakes (typos, unused variables) before they reach production.  
- **Developer Onboarding**: New contributors quickly align with the project’s coding standards without needing extensive manual guidance.  

## What are some challenges with enforcing checks in CI/CD?
- **Developer Frustration**: Strict rules may block commits/PRs, leading to frustration if checks feel excessive or unclear.  
- **Configuration Complexity**: Setting up workflows (linting, spell check, tests) requires careful configuration to avoid false positives.  
- **Performance**: Running many checks can slow down CI/CD pipelines.  
- **Tool Compatibility**: Ensuring all contributors have the same tools (e.g., Husky for Git hooks) can be challenging across different environments.  
- **Balance**: Projects must balance between strict enforcement and developer flexibility.  

## How do CI/CD pipelines differ between small projects and large teams?
- **Small Projects**:  
  - Pipelines are usually simple (lint, test, build).  
  - Fewer contributors, so the focus is on catching basic errors early.  
  - Less infrastructure required; may run on a single hosted CI tool (e.g., GitHub Actions).  

- **Large Teams**:  
  - Pipelines are more complex (multi-stage builds, integration tests, security scans, deployments).  
  - Include environment-specific checks (staging, QA, production).  
  - Require scalability, parallelization, and monitoring.  
  - Stronger enforcement of coding standards and branching strategies (e.g., GitFlow).  
  - Often integrated with monitoring and rollback mechanisms for reliability.  
