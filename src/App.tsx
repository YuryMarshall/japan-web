import React, { useState } from "react";
import Routing from "./ui/organisms/Routing";
import { ModalState } from "./ui/Context/ModalContext";

function App(): JSX.Element {
  const [menu, setMenu] = useState(false);

  const menuToggle = (): void => {
    if (!menu) {
      setMenu(true);
    } else {
      setMenu(false);
    }
  };

  return (
    <ModalState>
      <Routing menuState={menu} toggler={menuToggle} />
    </ModalState>
  );
}

export default App;
