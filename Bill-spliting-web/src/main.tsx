import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Screens/Login.tsx";
import { AuthProvider } from "./context/AuthProvider.tsx";
import TransactionScreen from "./Screens/TransactionScreen.tsx";
import Dashboard from "./Screens/Dashboard.tsx";
import GroupScreen from "./Screens/Group.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "Dashboard",
        element: <Dashboard />
      },
      {
        path: "Groups",
        element: <GroupScreen />
      }
    ]
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/AddNewTransaction",
    element: <TransactionScreen />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
