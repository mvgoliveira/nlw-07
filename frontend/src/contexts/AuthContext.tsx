import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

type UserType = {
  id: string;
  name: string;
  login: string;
  avatar_url: string;
}

type AuthResponseType = {
  token: string;
  user: {
    id: string;
    avatar_url: string;
    name: string;
    login: string;
  }
}

type AuthContextType = {
  user: UserType | null;
  signInUrl: string;
  signOut: () => void;
}

type AuthContextProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider(props: AuthContextProviderProps) {
  const [user, setUser] = useState<UserType | null>(null);

  const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=${import.meta.env.VITE_GITHUB_CLIENT_ID}`; 

  useEffect(() => {
    const url = window.location.href;
    const hasGithubCode = url.includes("?code=");

    if (hasGithubCode) {
      const [urlWithoutCode, githubCode] = url.split('?code=');
      window.history.pushState({}, "", urlWithoutCode);

      signIn(githubCode);
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("@dowhile:token");

    api.defaults.headers.common.authorization = `Bearer ${token}`;

    if (token) {
      api.get<UserType>('profile').then(response => {
        setUser(response.data);
      });
    }
  }, [])

  async function signIn(githubCode: string) {
    const response = await api.post<AuthResponseType>("authenticate", {
      code: githubCode
    });

    const {token, user} = response.data;

    localStorage.setItem('@dowhile:token', token);

    api.defaults.headers.common.authorization = `Bearer ${token}`;
    
    setUser(user);
  }

  async function signOut() {
    setUser(null);
    localStorage.removeItem('@dowhile:token');
  }

  return (
    <AuthContext.Provider value={{ signInUrl, user, signOut }}>
      { props.children }
    </AuthContext.Provider>
  );
}