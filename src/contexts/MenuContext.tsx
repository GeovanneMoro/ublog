import React, { createContext, ReactNode, useState } from 'react';

interface IMenuContextType {
  active: boolean;
  toogleActive: () => void;
}

interface IMenuContextProviderProps {
  children: ReactNode;
}

const MenuContext = createContext({} as IMenuContextType);

const MenuContextProvider = ({
  children,
}: IMenuContextProviderProps): JSX.Element => {
  const [active, setActive] = useState<boolean>(false);

  const toogleActive = () => {
    setActive(!active);
  };

  return (
    <MenuContext.Provider value={{ active, toogleActive }}>
      {children}
    </MenuContext.Provider>
  );
};

export { MenuContext, MenuContextProvider };
