import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DropArea } from './components/DropArea/DropArea';

import './App.css';

export default function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          {/* <Route path="/convert" component={ConvertScreen} /> */}
          <Route path="/index.html" element={<DropArea />} />
        </Routes>
      </Router>
    </div>
  );
}
