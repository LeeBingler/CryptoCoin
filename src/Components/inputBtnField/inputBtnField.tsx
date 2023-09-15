import React from 'react'

interface Props {
    onClick: React.MouseEventHandler;
    content: string;
}

function inputBtnField({onClick, content}:Props) {
  return (
    <div>
        <input type="text" />
        <button onClick={onClick}> {content} </button>
    </div>
  )
}

export default inputBtnField