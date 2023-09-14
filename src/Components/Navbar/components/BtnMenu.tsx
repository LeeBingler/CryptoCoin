import React from 'react';

interface BtnMenuProps {
    triggerFunc: React.Dispatch<React.SetStateAction<boolean>>;
    boolean: boolean;
}

function BtnMenu({ boolean, triggerFunc }: BtnMenuProps) {
    return (
        <div onClick={() => triggerFunc((prev) => !prev)} className='btnMenu'>
            <div style={!boolean ? { transform: 'rotate(45deg)' } : { transform: 'rotate(0)' }} />
            <div
                style={
                    !boolean
                        ? { transform: 'translateX(20px)', opacity: '0' }
                        : { transform: 'translateX(0)', opacity: '1' }
                }
            />
            <div
                style={!boolean ? { transform: 'rotate(-45deg)' } : { transform: 'rotate(0deg)' }}
            />
        </div>
    );
}

export default BtnMenu;
