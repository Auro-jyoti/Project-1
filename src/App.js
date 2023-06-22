import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const App = () => {
    return (
        <div className="App"></div>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />

    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);