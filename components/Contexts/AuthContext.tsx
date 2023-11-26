"use client";

import axios from "axios";
import React, { useEffect, useContext, useState, createContext } from "react";

interface User {
  Name: string;
  Image: string;
  Token: string;
}

interface Users {
  Name: string;
  Image: string;
}

interface AuthContextProps {
  isAuthenticated: boolean;
  user: User | null;
  loading: boolean;
  Users: Users[];
}

const AuthContext = createContext<AuthContextProps>({ isAuthenticated: false, user: null, loading: true, Users: [] });

export const AuthStateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [Users, setUsers] = useState<Users[]>([]);

  useEffect(() => {
    async function loadUserFromCookies() {
      try {
        // await fetch("api/Sinis", {
        //   method: "POST",
        // })
        const response = await axios.get("api/token");
        const userData = response.data.user;
        console.log(userData)
        if (userData) {
          setUser(userData);
          setLoading(false);

          const Users = localStorage.getItem("Users");

          if (Users) {
            const UsersArray: User[] = JSON.parse(Users);

            if (!UsersArray.find((element) => element.Name === userData.Name)) {
              const ExtractedSessionToken = await fetch("api/Sinis", {
                body: JSON.stringify({ Name: userData.Name }),
                method: "POST",
              }).then(async (res) => {
                return await res.json();
              });

              UsersArray.push({
                Name: userData.Name,
                Image: userData.Image,
                Token: ExtractedSessionToken.data,
              });

              localStorage.setItem("Users", JSON.stringify(UsersArray));
            }
          } else {
            localStorage.setItem("Users", JSON.stringify([{ Name: userData.Name, Image: userData.Image, Token: "" }]));
          }
          setUsers(JSON.parse(Users || "[]"));
        }
      } catch (error) {
        console.error("Error loading user from cookies:", error);
      }
    }

    loadUserFromCookies();
  }, []);

  return <AuthContext.Provider value={{ isAuthenticated: !!user, user, loading, Users }}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextProps => useContext(AuthContext);
