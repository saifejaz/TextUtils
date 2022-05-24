import React, { useState } from 'react'
import './App.css';
import Navbar from './Components/Navbar'
import Alert from './Components/Alert'
import TextForm from './Components/TextForm'
// import About from './Components/About'
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState(['light'])
  const [alert, setAlert] = useState(null)

  const [darkModeText, setDarkModeText] = useState(['Enable Dark Mode'])

  const showAlert = (type, message) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout( () => {
      setAlert(null)
    }, 1500)
  }

  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'grey'
      setDarkModeText('Disable Dark Mode')
      showAlert('dark', 'Dark mode has been enabled')
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      setDarkModeText('Enable Dark Mode')
      showAlert('success', 'Light mode has been enabled')
    }
  }

  return (
    <div>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} darkModeText={darkModeText}/>
      <Alert alert={alert} />
      <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />
      {/*<About />*/}
    
      {/*<BrowserRouter>
          <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} darkModeText={darkModeText}/>
          <Alert alert={alert} />
        <Routes>
          <Route path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />} />
          <Route path="about" element={<About />} />
        </Routes>
      </BrowserRouter>*/}
    </div>
  );
}

export default App;
