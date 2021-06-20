import { AxiosError } from "axios";
import { createContext, ReactNode, useContext } from "react";
import { ToastTypes, useToast } from "./toast";

interface AppErrorContextData {
    validError(e: Error | AxiosError): void;
}

interface AppErrorProviderProps {
    children: ReactNode;
}

const AppErrorContext = createContext({} as AppErrorContextData);

function AppErrorProvider({ children }: AppErrorProviderProps) {
    const { showToast } = useToast();

    function validError(e: Error | AxiosError) {
        if (e.isAxiosError) {
            if (e.message) {
                showToast({
                    message: e.message,
                    type: ToastTypes.ERROR,
                })
                return;
            }
        }
        showToast({
            message: 'Could not perform the operation, please try again.',
            type: ToastTypes.ERROR,
        })
        return;
    }

    return (
        <AppErrorContext.Provider value={{ validError }}>
            {children}
        </AppErrorContext.Provider>
    );
}

function useAppError(): AppErrorContextData {
    const context = useContext(AppErrorContext);

    if (!context) {
        throw new Error('useAppError must be used  within an AuthProvider');
    }

    return context;
}

export { AppErrorProvider, useAppError }
