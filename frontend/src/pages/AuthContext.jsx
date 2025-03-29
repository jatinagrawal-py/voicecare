import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [username, setUsername] = useState(localStorage.getItem("username") || "");

  // Effect to sync with localStorage
  useEffect(() => {
    if (username) {
      localStorage.setItem("username", username);
    }
  }, [username]);

  // Listen for changes in localStorage
  useEffect(() => {
    const syncUsername = (event) => {
      if (event.key === "username") {
        setUsername(event.newValue || ""); // Sync username if changed in another tab
      }
    };

    window.addEventListener("storage", syncUsername);
    return () => window.removeEventListener("storage", syncUsername);
  }, []);

  // Function to update username
  const updateUsername = (newUsername) => {
    setUsername(newUsername); 
    localStorage.setItem("username", newUsername); 
  };

  return (
    <AuthContext.Provider value={{ username, setUsername: updateUsername }}>
      {children}
    </AuthContext.Provider>
  );
};
