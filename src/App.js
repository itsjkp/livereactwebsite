import React from 'react'
import { Route, Switch } from 'react-router'
import { NavLink } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Gallery from './Gallery'
import ToDo from './ToDo'
import Timer from './components/timer'
import PageError from './components/PageError'
import A from './components/A'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ClassComponent from './components/ClassComponent'
import Redux from './components/Redux'
const style = {
  backgroundColor: '#e3f2fd'
}
const App = () => {
  return (
    <>
      <div className="navbar_wrapper">
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={style}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink exact to="/" className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/about" className="nav-link">About us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/contact" className="nav-link">Contact us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/gallery" className="nav-link">Gallery</NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/ToDo" className="nav-link">ToDo</NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/timer" className="nav-link">Timer</NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/context" className="nav-link">Context</NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/class-comp" className="nav-link">Class Component</NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/redux" className="nav-link">Redux</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about/:id" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/ToDo" component={ToDo} />
        <Route exact path="/timer" component={Timer} />
        <Route exact path="/context" component={A} />
        <Route exact path="/class-comp" component={ClassComponent} />
        <Route exact path="/redux" component={Redux} />
        <Route path="" component={PageError} />
        
      </Switch>
    </>
  )
}

export default App
