import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.scss'
import Header from './assets/components/header'
import Home from './assets/pages/home'
import About from './assets/pages/about'
import ResumePage from './assets/pages/resume'

function App() {

  return (
    <>
        <Router>
        <Header/>
        <Routes>
        <Route path="/" element={<Home/>} />  
        <Route path="/about" element={<About/>} />
        <Route path="/resume" element={<ResumePage/>} />
        </Routes>  
        </Router>
    </>
  )
}

export default App
