import { createContext, useState, useContext } from "react";

const PopupContext = createContext();

export function PopupProvider({ children }) {
  const [hasSeenPopup, setHasSeenPopup] = useState(false);
  const [hasSeenPopup2, setHasSeenPopup2] = useState(false);
  const [hasSeenPopup3, setHasSeenPopup3] = useState(false);
  const [hasSeenPopup4, setHasSeenPopup4] = useState(false);
  return (
    <PopupContext.Provider
      value={{
        hasSeenPopup,
        setHasSeenPopup,
        hasSeenPopup2,
        setHasSeenPopup2,
        hasSeenPopup3,
        setHasSeenPopup3,
        hasSeenPopup4,
        setHasSeenPopup4,
      }}
    >
      {children}
    </PopupContext.Provider>
  );
}

export const usePopup = () => useContext(PopupContext);
