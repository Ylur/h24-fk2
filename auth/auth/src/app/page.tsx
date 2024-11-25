'use client'
import { useState } from "react";
import Expenses from "./expense";
import LoginPage from "./LoginPage";

export default function HomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  const handleLogin = () => {
    setIsLoggedIn(true); // Updates the state to indicate the user is logged in
  };

  return (
    <main className="flex justify-center items-center min-h-screen bg-gray-100">
      {isLoggedIn ? (
        <Expenses /> // Render Expenses when or if the user is logged in
      ) : (
        <LoginPage onLoginSuccess={handleLogin} /> // Render LoginPage if the user is not logged in
      )}
    </main>
  );
}
