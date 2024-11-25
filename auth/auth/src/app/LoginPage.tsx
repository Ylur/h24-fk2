"use client";
import { useState } from "react";

interface LoginPageProps {
  onLoginSuccess: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleLogin = async () => {
    setError(""); // Reset any previous error messages
    setIsLoading(true); // Show a loading state while the login is processing #soCool

    if (!username || !password) {
      setError("Please enter both username and password.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fakeLogin(username, password);

      if (response.success) {
        onLoginSuccess(); // Notify HomePage that login is successful
      } else {
        setError("Invalid username or password.");
      }
    } catch (err) {
      console.error("Error during login:", err);
      setError("An unexpected error occurred. Please try again later.");
    } finally {
      setIsLoading(false); // Stop loading state
    }
  };

  const fakeLogin = (username: string, password: string): Promise<{ success: boolean }> =>
    new Promise((resolve) =>
      setTimeout(() => {
        if (username === "admin" && password === "password123") {
          resolve({ success: true });
        } else {
          resolve({ success: false });
        }
      }, 1000)
    );

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded shadow-md">
      <h1 className="text-xl font-semibold mb-4 text-black">Login</h1>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <div className="flex flex-col gap-2 mb-4">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded w-full text-black"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded w-full text-black"
        />
        <button
          onClick={handleLogin}
          disabled={isLoading}
          className={`${
            isLoading ? "bg-blue-300" : "bg-blue-500"
          } text-white px-4 py-2 rounded`}
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
