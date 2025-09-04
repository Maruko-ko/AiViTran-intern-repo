# API Calls with Axios – Reflection

## Why is it useful to create a reusable Axios instance?
A reusable Axios instance provides a **centralized configuration** for API requests.  
- Base URL and headers are defined once, reducing duplication.  
- Consistency across requests (timeouts, interceptors, tokens).  
- Easier to maintain and update if API changes.  

## How does intercepting requests help with authentication?
Request interceptors allow us to **automatically attach authentication tokens** to every request.  
- This ensures secure access without manually adding headers each time.  
- It also helps detect expired tokens and redirect users to login when needed.  

## What happens if an API request times out, and how can you handle it?
If a request exceeds the timeout limit (e.g., 10s), Axios throws an **ECONNABORTED error**.  
- Handling it prevents the app from hanging indefinitely.  
- We can:  
  - Show a **user-friendly error message**.  
  - Retry the request if appropriate.  
  - Cancel the request with `AbortController` when the component unmounts.  
