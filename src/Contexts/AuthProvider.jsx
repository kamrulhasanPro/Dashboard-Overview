import { useState } from "react";
import { AuthContext } from "./AuthContext";

const API_BASE = "https://task-api-eight-flax.vercel.app";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("user");
    return stored ? JSON.parse(stored) : null;
  });

  const [token, setToken] = useState(
    () => localStorage.getItem("token") || null,
  );

  const login = async (email, password) => {
    const res = await fetch(`${API_BASE}/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) throw new Error("Invalid credentials");

    const data = await res.json();

    // save to state
    setUser({ id: data.id, email: data.email });
    setToken(data.token);

    // persist in localStorage
    localStorage.setItem(
      "user",
      JSON.stringify({ id: data.id, email: data.email }),
    );
    localStorage.setItem("token", data.token);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{ user, token, login, logout, isAuthenticated: !!user }}
    >
      {children}
    </AuthContext.Provider>
  );
};
