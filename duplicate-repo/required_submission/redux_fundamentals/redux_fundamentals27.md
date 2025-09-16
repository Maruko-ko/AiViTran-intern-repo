## When should I use Redux instead of useState?
- Use useState when state is local to a single component and only affects that component (heandling form inputs)
- Use Redux when state needs to be: 
    - Shared across multiple components in different parts of the app
    - Persisted and upadted in a predictable, centralized way
    - Managed with complex logic (multiple actions, async calls)
    - Debugged or tracked easily using tools like Redux DevTools
    