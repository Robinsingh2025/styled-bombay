import React, { useState } from 'react';

const styles = {
  slide: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  slideCenter: {
    flex: '1 1 auto',
    textAlign: 'center'
  }
};

// TODO: Convert to a function component with hooks
export default function Instructions({ instructions }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  function goLeft() {
    setCurrentSlide(currentSlide - 1);
  }
  function goRight() {
    setCurrentSlide(currentSlide + 1);
  }

  const currentInstruction = instructions[currentSlide];
  const { video, text } = currentInstruction;
  // const { video, text } = instructions[currentSlide];
  return (
    <div style={styles.slide}>
      {currentSlide > 0 && <div onClick={goLeft}>&#9664;</div>}
      <div style={styles.slideCenter}>
        <video src={`/video/${video}`} style={{ background: '#000' }} />
        <p>{text}</p>
      </div>
      {currentSlide < instructions.length - 1 && (
        <div onClick={goRight}>&#9654;</div>
      )}
    </div>
  );
}
