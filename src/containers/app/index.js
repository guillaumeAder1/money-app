import React from 'react';
import { Route, Link } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from '../header'
import Home from '../home'
import About from '../about'

const App = () => (
  <MuiThemeProvider>
    <Header/>
    <header>
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
    </main>
  </MuiThemeProvider>
)

export default App
