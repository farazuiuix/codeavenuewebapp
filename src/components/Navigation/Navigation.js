import React from 'react'
import './Navigation.css'
import { connect } from 'react-redux'
import icon from './../../assets/Icon.png'
import Anchor from '../Anchor/Anchor';
import Button from '../Button/Button';

 function Navigation(props) {
  // console.log("props", props);
  return (
    <nav className="codeave-nav">
      <div>
        <Anchor to="/">
          <img src={icon} width={40} alt="logo" />
        </Anchor>
      </div>
      <div className="center-links">
        <Anchor to="/about_us">About Us</Anchor>
        <Anchor to="/services">Services</Anchor>
        <Anchor to="/projects">Projects</Anchor>
      </div>
      <div className="right-links">
        <Button to="/careers">Careers</Button>
      </div>
    </nav>
  );
}

export default connect(state => ({...state}))(Navigation)
