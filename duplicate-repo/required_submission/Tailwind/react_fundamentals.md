## Step I follows:
2. Created a React project
```bash
   npx create-react-app my-app
   cd my-app
```
2. Installed Tailwind CSS
```bash
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
```
3. Configure Tailwind
In tailwind.config.js , updated the content section to include React files:
```bash
    module.exports = {
        content: [
            "./src/**/*.{js,jsx,ts,tsx}",
        ],
        theme: {
            extend: {},
        },
        plugins: [],
    }
```
4. Added Tailwind directives
In src/index.css
```bash
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
```
5. Tested Tailwind
Edited App.js
```bash
function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">
        Tailwind CSS is working!
      </h1>
    </div>
  );
}

```
6. Ran the project
```bash
npm start
```

## What challenges did I face during setup?
- **Remembering the configuration**: The biggest challenge was making sure the `tailwind.config.js` file had the correct `content` paths. Without this, classes won’t be applied.  
- **CSS import order**: I needed to confirm that `@tailwind` directives were added to `index.css` and that `index.css` was actually imported in `index.js`.  
- **Dependencies**: Installing the right dev dependencies (`tailwindcss`, `postcss`, `autoprefixer`) in the correct order was critical. If I missed one, the project wouldn’t compile.  
- **Verifying it worked**: At first it wasn’t clear if Tailwind was running, so I tested by applying a `bg-red-500` class to confirm it applied styles.  
