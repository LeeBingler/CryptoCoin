import { useEffect, useState } from 'react';

function useWindowWidth() {
    const [screenSize, setScreenSize] = useState(getCurrentDimension());

    function getCurrentDimension() {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        };
    }

    /* Effect to know when the resize as occur */
    useEffect(() => {
        const updateDimension = () => {
            setScreenSize(getCurrentDimension());
        };
        window.addEventListener('resize', updateDimension);

        return () => {
            window.removeEventListener('resize', updateDimension);
        };
    }, [screenSize]);

    return screenSize;
}

export default useWindowWidth;
