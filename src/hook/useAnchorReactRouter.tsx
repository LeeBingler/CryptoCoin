import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function useAnchorReactRouter() {
    const { hash, key } = useLocation();
    useEffect(() => {
        if (hash) {
            const targetElement = document.getElementById(hash.substring(1));
            targetElement?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [key, hash]);
}

export default useAnchorReactRouter