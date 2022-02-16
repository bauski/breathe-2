import React, { useState } from 'react'
import Menu from './components/menu'
import Viewport from './components/viewport'
import './styles/App.css'

function App() {
  const [settings, setSettings] = useState({
    background: './images/japanese-garden.jpg'
  })

  return (
    <div className="App">
      <Menu settings={settings} />
      <Viewport settings={settings} />
    </div>
  );
}

export default App;
