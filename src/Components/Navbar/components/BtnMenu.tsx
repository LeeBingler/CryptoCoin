import React from 'react';
import useWindowSize from '../../../hook/useWindowSize';

interface BtnMenuProps {
    triggerFunc: React.Dispatch<React.SetStateAction<boolean>>;
    boolean: boolean;
    colors: Array<string>
    sizeToDisappearPx: number
}

function BtnMenu({ colors, boolean, triggerFunc, sizeToDisappearPx }: BtnMenuProps) {
    const openColor = colors[0];
    const closeColor = colors[1] || colors[0];

    if (useWindowSize().width >= sizeToDisappearPx) {
        return null;
    }

    return (
        <div onClick={() => triggerFunc((prev) => !prev)} className='btnMenu'>
            <div
                style={
                    boolean
                        ? { transform: 'rotate(45deg)', backgroundColor: openColor }
                        : { transform: 'rotate(0deg)', backgroundColor: closeColor }
                }
            />
            <div
                style={
                    boolean
                        ? { transform: 'translateX(20px)', opacity: '0', backgroundColor: openColor }
                        : { transform: 'translateX(0px)', opacity: '1', backgroundColor: closeColor }
                }
            />
            <div
                style={
                    boolean
                        ? { transform: 'rotate(-45deg)', backgroundColor: openColor }
                        : { transform: 'rotate(0deg)', backgroundColor: closeColor }
                }
            />
        </div>
    );
}

export default BtnMenu;
