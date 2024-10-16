import React, {
  createContext,
  useContext,
  ReactElement,
  useState,
} from "react";

// Создаем контекст
const AppContext = createContext<unknown>(null);

// Провайдер
export const AppProvider = ({ children }: { children: ReactElement }) => {
  const [state, setState] = useState();
  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};

// Хук для использования контекста
export const useApp = () => {
  return useContext(AppContext);
};
