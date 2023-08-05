import React, { createContext, useState } from "react";
import type { IModalContext } from "../../models";

export const ModalContext = createContext<IModalContext>({
  modal: false,
  toggle: () => {
    console.log("toggle");
  },
});

export const ModalState: any = ({ children }: { children: React.ReactNode }) => {
  const [modal, setModelWindow] = useState(false);
  const toggle = (): void => {
    if (modal) {
      setModelWindow(false);
    } else {
      setModelWindow(true);
    }
  };
  return <ModalContext.Provider value={{ modal, toggle }}>{children}</ModalContext.Provider>;
};
