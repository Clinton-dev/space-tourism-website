import { Switch, Route, Link } from 'react-router-dom'

import './App.css'
import DesignSystem from './pages/DesignSystem'
import Home from './pages/Home'

function App() {

  return (
    <div className="text-3xl font-bold underline">
      <Switch>
      <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/design-system'>
          <DesignSystem/>
        </Route>
      </Switch>
    </div>
  )
}

export default App
