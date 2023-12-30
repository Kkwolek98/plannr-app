import { ReactNode, createContext, useContext, useState } from "react";

export type Toast = {
  id: string;
  title: string;
  message: string;
  type: "success" | "error" | "warning" | "info";
};

const ToastContext = createContext<
  | {
      toasts: Toast[];
      displayToast: (toast: Omit<Toast, "id">, timeout?: number) => void;
      removeToast: (toast: Toast) => void;
    }
  | undefined
>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const removeToast = (toast: Toast) => {
    setToasts(toasts.filter((t) => t.id !== toast.id));
  };

  const addToast = (toast: Toast) => {
    setToasts([...toasts, toast]);
  };

  const displayToast = (toast: Omit<Toast, "id">, timeout = 5000) => {
    const newToast = {
      ...toast,
      id: Math.random().toString(36).substring(2, 9),
    };

    addToast(newToast);
    setTimeout(() => {
      removeToast(newToast);
    }, timeout);
  };

  const context = { toasts, displayToast, removeToast };

  return (
    <ToastContext.Provider value={context}>{children}</ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}
