## What problem does useCallBack solve?
`useCallBack` solves the problem of unneccessary re-renders when funcitons are passed to child components.

## How does useCallBalc work differently from useMemo?
- `useCallBack(fn, deps)` returns the **memoized function itdelf**.
- `useMemo(fn,deps)` returns teh **result of executing the function**.
In fact, `useCallBack(fn,deps)` is equivalent to `useMemo(() =fn, deps)`.

## When would useCallback npt be useful?
`useCallback` is not useful if:
- The child component receriving the function is not wrapped in `React.memo`.
- The function is trivial and cheap to recreate.
- There are no performance concerns with re-renders.
In these cases, using `useCallback` cna actually add unnecessary complexity and overhead.
