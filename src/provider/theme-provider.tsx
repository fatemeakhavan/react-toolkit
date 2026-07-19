import { createContext, useContext, type ReactNode } from "react";
const dragContext = createContext(null);
export default function DragProvider({ children }: { children: ReactNode }) {
  return <dragContext.Provider value={null}>{children}</dragContext.Provider>;
}

export const useDrag = () => {
  const context = useContext(dragContext);

  if (!context) {
    throw new Error("must be used useDrag inside DragProvider");
  }

  return context;
};
