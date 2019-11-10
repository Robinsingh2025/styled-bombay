import React, { useState } from 'react';

export default function InstructionSlides({ instructions }) {
  const [index, setIndex] = useState(0);
  function goLeft() {
    setIndex(index - 1);
  }
  function goRight() {
    setIndex(index + 1);
  }
  const { video, text } = instructions[index];
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {index > 0 && <div onClick={goLeft}>&#9664;</div>}
      <div style={{ flex: '1 1 auto', textAlign: 'center' }}>
        <video src={`/video/${video}`} style={{ background: '#000' }} />
        <p>{text}</p>
      </div>
      {index < instructions.length - 1 && <div onClick={goRight}>&#9654;</div>}
    </div>
  );
}
