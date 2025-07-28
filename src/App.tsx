import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import CoursePageReactTypescript from './Pages/CoursePageReactTypescript';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course-react-typescript" element={<CoursePageReactTypescript />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
