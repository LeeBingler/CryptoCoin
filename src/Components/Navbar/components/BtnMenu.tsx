import React from 'react';

interface BtnMenuProps {
    triggerFunc: React.Dispatch<React.SetStateAction<boolean>>;
    boolean: boolean;
    colors: Array<string>
}

function BtnMenu({ colors, boolean, triggerFunc }: BtnMenuProps) {
    const openColor = colors[0];
    const closeColor = colors[1];

    return (
        <div onClick={() => triggerFunc((prev) => !prev)} className='btnMenu'>
            <div
                style={
                    !boolean
                        ? { transform: 'rotate(45deg)', backgroundColor: openColor }
                        : { transform: 'rotate(0deg)', backgroundColor: closeColor }
                }
            />
            <div
                style={
                    !boolean
                        ? { transform: 'translateX(20px)', opacity: '0' }
                        : { transform: 'translateX(0px)', opacity: '1' }
                }
            />
            <div
                style={
                    !boolean
                        ? { transform: 'rotate(-45deg)', backgroundColor: openColor }
                        : { transform: 'rotate(0deg)', backgroundColor: closeColor }
                }
            />
        </div>
    );
}

export default BtnMenu;
