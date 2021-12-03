import React, { useState, useEffect } from 'react'
import {  Switch, Route } from 'react-router'
import './assets/scss/global.scss'
import { Home, Contact } from './pages'

import Header from './components/Header'

export default function App() {


  return (
    <section className="main">
      <section className="page container">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/home" component={Home} />
        </Switch>
      </section>
    </section>
  )
}
