import React from 'react'
import Header from '../Header/Header';
import './Hero.css'

export default function Hero({
  title,
  subTitle,
  desc,
  align,
  img,
  actions,
  full,
  noPad,
  children,
  className,
}) {
  return (
    <div
      className={"codeavenue-hero " + (className || "")}
      style={{
        textAlign: align === "center" ? "center" : "left",
        minHeight: full ? "70vh" : "",
        padding: noPad ? "5vh 0rem 10vh" : "",
      }}
    >
      {img && <img src={img} className="codeavenue-hero-img" alt="hero" />}
      {title && <Header align={align}>{title}</Header>}
      {subTitle && (
        <Header upper size={"md"} align={align}>
          {subTitle}
        </Header>
      )}
      {desc && <p>{desc}</p>}
      {(actions || children) && <br />}
      {(actions || children) && <br />}
      {actions}
      {children}
    </div>
  );
}
