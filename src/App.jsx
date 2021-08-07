import Main from './pages/Main'

import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div>
        <Router>
          <div>
            <Switch>
              <Route path="/">
                <Main />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  )
}


export default App
