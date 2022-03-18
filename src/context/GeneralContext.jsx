import { createContext, useState } from "react";

export const TrackerContext = createContext([]);

export const TrackerProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);
  const data = {
    expenses: expenses,
    setExpenses: setExpenses,
  };
  return (
    <TrackerContext.Provider value={data}>{children}</TrackerContext.Provider>
  );
};
