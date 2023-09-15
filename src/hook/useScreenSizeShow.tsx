import React, { useState, useEffect } from 'react';

interface useScreenProps {
    setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
    size: number;
}

function useScreenSizeShow({ setShowMenu, size }:useScreenProps) {
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

        if (screenSize.width >= size) {
            setShowMenu(true);
        } else {
            setShowMenu(false);
        }

        return () => {
            window.removeEventListener('resize', updateDimension);
        };
    }, [screenSize, setShowMenu]);
}

export default useScreenSizeShow;