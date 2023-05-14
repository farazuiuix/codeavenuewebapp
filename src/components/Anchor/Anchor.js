import React from 'react'
import './Anchor.css'
import { Link } from 'react-router-dom';

export default function Anchor({ children, onClick, to }) {
  return (
    <Link to={to || "#"} onClick={onClick}>
      {children}
    </Link>
  );
}
