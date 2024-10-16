import React, {
  createContext,
  useState,
  useContext,
  ReactElement,
} from "react";

// Создаем контекст
const UserContext = createContext<unknown>(null);

// Провайдер
export const AuthProvider = ({ children }: { children: ReactElement }) => {
  const [user, setUser] = useState<string | null>("");

  const login = (userData: string) => {
    setUser(userData);
  };

  const create = () => {
    setUser("str");
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout, create }}>
      {children}
    </UserContext.Provider>
  );
};

// Хук для использования контекста
export const useUser = () => {
  return useContext(UserContext);
};
