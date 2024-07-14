
import './App.css'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import First_page from './login_page/first.jsx'
import Login_page from './login_page/login.jsx'

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<First_page/>} />
        <Route path="/login" element={<Login_page/>} />
      </Routes>
    </Router>
  )
}

export default App
