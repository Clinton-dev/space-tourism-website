import { Switch, Route } from 'react-router-dom'

import './App.css'
import Crew from './pages/Crew'
import DesignSystem from './pages/DesignSystem'
import Destination from './pages/Destination'
import Home from './pages/Home'
import Technology from './pages/Technology'

function App() {

  return (
    <div >
      <Switch>
      <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/design-system'>
          <DesignSystem/>
        </Route>
        <Route path='/technology'>
          <Technology/>
        </Route>
        <Route path='/destination'>
          <Destination/>
        </Route>
        <Route path='/crew'>
          <Crew/>
        </Route>
      </Switch>
    </div>
  )
}

export default App
