import { createContext, useContext, useState } from "react";

const SinglePopoverContext = createContext<
  | {
      popoverId: string | undefined;
      setPopoverId: (popover: string | undefined) => void;
    }
  | undefined
>(undefined);

const SinglePopoverProvider = ({
  children,
}: {
  children: React.ReactNode;
  popoverId: string | undefined;
}) => {
  const [popoverId, setPopoverId] = useState<string | undefined>(undefined);

  return (
    <SinglePopoverContext.Provider value={{ popoverId, setPopoverId }}>
      {children}
    </SinglePopoverContext.Provider>
  );
};

const useSinglePopoverContext = () => {
  const context = useContext(SinglePopoverContext);

  if (!context) {
    throw new Error(
      "useSinglePopoverContext must be used within a SinglePopoverProvider"
    );
  }

  return context;
};

export { SinglePopoverProvider, useSinglePopoverContext };
