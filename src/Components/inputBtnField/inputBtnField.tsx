import React from 'react';

interface inputBtnFieldProps {
    onClick: React.MouseEventHandler;
    content: string;
}

function inputBtnField({ onClick, content }:inputBtnFieldProps) {
    return (
        <>
            <input type='text' />
            <button onClick={onClick}> {content} </button>
        </>
    );
}

export default inputBtnField;
