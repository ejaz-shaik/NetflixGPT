import React from "react";
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";

const App = () => {
    return (
        <div>
            <h1 className="font-bold text-center text-4xl m-4 text-gray-200">This is working!</h1>
        </div>
    )
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
