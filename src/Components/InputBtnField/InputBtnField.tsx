import { useState } from 'react';

interface inputBtnFieldProps {
    onClick: Function;
    content: string;
    className: string;
}

function InputBtnField({ onClick, content, className }: inputBtnFieldProps) {
    const [inputValue, setInputValue] = useState('');
    const [styleError, setStyleError] = useState<React.CSSProperties>({
        visibility: 'hidden',
        color: 'rgb(255, 45, 45)'
    });

    function handleOnClick() {
        if (
            inputValue.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
        ) {
            onClick();
        } else {
            setStyleError((prev) => ({ ...prev, visibility: 'visible' }));
        }
    }

    return (
        <div className={className}>
            <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={handleOnClick}> {content} </button>
            <p style={styleError}> Need a valid email to register </p>
        </div>
    );
}

export default InputBtnField;