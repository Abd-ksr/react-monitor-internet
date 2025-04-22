import { useEffect, useState } from 'react';

export const useMonitorInternet = () => {
    const[isOnline, setIsOnline ] = useState(navigator.onLine);
    
    const handleInternetStatus = () => {
        setIsOnline(navigator.onLine);
    }

    useEffect(()=> {
        window.addEventListener('online', handleInternetStatus);
        window.addEventListener('offline', handleInternetStatus);

        return () => {
            window.removeEventListener('online', handleInternetStatus);
            window.removeEventListener('offline', handleInternetStatus);
        }
    },[]);
    return { 
        isOnline 
    };
}