import { createContext, ReactNode, useContext } from "react";
import { useToasts } from "react-toast-notifications";
import { useCallback } from "react";

interface ToastContextData {
    showToast({ message, type }: ToastProps): void;
}

export enum ToastTypes {
    SUCCESS = 'success',
    ERROR = 'error',
    WARN = 'warning',
    INFO = 'info'
}

interface ToastProps {
    message: string;
    type: ToastTypes;
}

interface ToastProviderProps {
    children: ReactNode;
}

const ToastContext = createContext({} as ToastContextData);

function ToastAppProvider({ children }: ToastProviderProps) {
    const { addToast } = useToasts();
    
    const showToast = useCallback(({ message, type }: ToastProps) => {
        addToast(message, { appearance: type, autoDismiss: true });
    }, [addToast]);
 
    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
        </ToastContext.Provider>
    );
}

function useToast(): ToastContextData {
    const context = useContext(ToastContext);

    if (!context) {
        throw new Error('UseToast must be used  within an AuthProvider');
    }

    return context;
}

export { ToastAppProvider, useToast };