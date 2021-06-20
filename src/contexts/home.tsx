import { createContext, ReactNode, useContext } from "react";
import axios from 'axios';

interface HomeContextData {
    sendEmail(data: SendEmailProps): Promise<void>;
}

interface HomeProviderProps {
    children: ReactNode;
}

interface SendEmailProps {
    name: string;
    email: string;
}

const HomeContext = createContext({} as HomeContextData);

function HomeProvider({ children }: HomeProviderProps) {

    async function sendEmail(data: SendEmailProps) {
        await axios.post('https://api.jungledevs.com/api/v1/challenge-newsletter/', data);
    }
    
    return (
        <HomeContext.Provider value={{ sendEmail }}>
            {children}
        </HomeContext.Provider>
    );
}

function useHome(): HomeContextData {
    const context = useContext(HomeContext);

    if (!context) {
        throw new Error('UseHome must be used  within an AuthProvider');
    }

    return context;
}

export { HomeProvider, useHome };