import { createContext, useRef } from "react";

interface Props {
  children: React.ReactNode;
}

type ContextType = {
  refHome: any;
  refProjects: any;
  refAbout: any;
  refContact: any;
};

const initialValue = {
  refHome: null,
  refProjects: null,
  refAbout: null,
  refContact: null,
};

export const AppContext = createContext<ContextType>(initialValue);

export function AppContextProvider({ children }: Props) {
  //nav:
  const refHome = useRef<HTMLInputElement>(initialValue.refHome);
  const refProjects = useRef<HTMLInputElement>(initialValue.refProjects);
  const refAbout = useRef<HTMLInputElement>(initialValue.refAbout);
  const refContact = useRef<HTMLInputElement>(initialValue.refContact);

  return (
    <AppContext.Provider value={{ refHome, refProjects, refAbout, refContact }}>
      {children}
    </AppContext.Provider>
  );
}
