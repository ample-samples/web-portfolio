import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Homepage } from './routes/homepage';
import { Topbar } from './components/topbar';

function App() {
  return (
    <div className="App">
      <Topbar />
        <Routes >
          <Route path='/' element={<Homepage />} />
        </Routes>
    </div>
  );
}

export default App;
