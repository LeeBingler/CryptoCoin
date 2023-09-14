import React from 'react';
import { RiMenuLine } from 'react-icons/ri'

interface BtnMenuProps {
    triggerFunc: React.Dispatch<React.SetStateAction<boolean>>
}

function BtnMenu({triggerFunc}:BtnMenuProps ) {

    return (
        <div onClick={() => triggerFunc(prev => !prev)}  className='btnMenu'>
            <RiMenuLine />
        </div>
    );
}

export default BtnMenu;
