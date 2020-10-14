import React, { useState } from "react";
const ModalContext = React.createContext();
const { Provider } = ModalContext;

const ModalProvider = ({ children }) => {
  const [isShowing, setIsShowing] = useState(false);

  const openModalHandler = () => {
    setIsShowing(true);
  };

  const closeModalHandler = () => {
    setIsShowing(false);
  };

  return (
    <Provider value={{ isShowing, openModalHandler, closeModalHandler }}>
      {children}
    </Provider>
  );
};

export { ModalProvider, ModalContext };
