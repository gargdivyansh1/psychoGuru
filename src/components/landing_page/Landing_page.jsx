import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './hero/Hero'
import Body from './body/Body'
import Us from './us/Us'
import Customer from './customer/Customer'
import EmotionAISection from './ai/Ai'
import Service from './serviceUsed/Service'
import Animation from './animationUsed/Animation'

function Landing_page() {
  return (
    <div>
      <Hero/>
      <EmotionAISection/>
      <Service/>
      <Customer/>
      <Us/>
      <Body/>
      <Animation/>
      
    </div>
  )
}

export default Landing_page