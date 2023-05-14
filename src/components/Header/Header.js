import React from 'react'
import './Header.css'

export default function Header({ children, size, bold, upper, align }) {
  return (
    <div
      className="codeavenue-header"
      style={{
        fontSize:
          size === "xs"
            ? "1.8rem"
            : size === "sm"
            ? "2rem"
            : size === "md"
            ? "2.2rem"
            : "6rem",
        width: '100%',
        fontWeight: bold ? "bold" : "",
        textTransform: upper ? "uppercase" : "",
        letterSpacing: upper ? "0.5rem" : "",
        textAlign: align === "center" ? "center" : "left",
      }}
    >
      {children}
    </div>
  );
}
