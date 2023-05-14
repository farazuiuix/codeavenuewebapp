import React from 'react'
import './Button.css'

export default function Button({ children, onClick, accent }) {
  const accentStyle = {
    color: 'var(--font-color)',
    backgroundColor: 'var(--background-color)'
  }
  return (
    <button className="btn-primary" style={accent ? accentStyle: {}}  onClick={onClick}>
      {children}
    </button>
  );
}
