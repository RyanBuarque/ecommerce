import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/global.css'

import { BrowserRouter } from 'react-router-dom'
import Rotas from './Routes'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
          <Rotas />
      </div>
    </BrowserRouter>
  )
}

export default App
