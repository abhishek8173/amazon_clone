import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header'

function App() {
  return (
    <Router>
      <div className='app'>
        <Routes>
          <Route path="/checkout" element={<h1>Checkout</h1>}/>
          <Route path="/login" element={<h1>Login Page</h1>}/>
          <Route path="/" element={<Header/>}/>
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
