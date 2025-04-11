import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LoggingPage from './pages/Loggingpage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoggingPage />} />
        {/* Możesz dodać inne trasy jak np: */}
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
