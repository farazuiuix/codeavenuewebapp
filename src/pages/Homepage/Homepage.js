import React from 'react'
import './Homepage.css'
import Navigation from '../../components/Navigation/Navigation'
import Hero from '../../components/Hero/Hero'
import LogoFull from './../../assets/LogoFull.png'
import Button from '../../components/Button/Button'

export default function Homepage() {
  return (
    <div>
      <Navigation />
      <Hero
        full
        subTitle={"A software development company"}
        align="center"
        img={LogoFull}
        actions={<div>
          <Button>Let's work together</Button>
        </div>}
      />
    </div>
  );
}
