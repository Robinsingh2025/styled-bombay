import React from 'react';

export default function Nav({ items, setIndex }) {
  return (
    <nav>
      {items.map((item, index) => (
        <button onClick={() => setIndex(index)} key={item.id}>
          {item.name}
        </button>
      ))}
    </nav>
  );
}
