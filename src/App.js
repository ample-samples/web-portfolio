import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Homepage } from './routes/homepage';
import { Topbar } from './components/topbar';
import { Portfolio } from './routes/portfolio';
import { About } from './routes/about';
import { Box } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Topbar />
      <Box sx={{backgroundColor: 'background.default', color:'text.primary'}}>
        <Routes >
          <Route path='/' element={<Homepage />} />
          <Route path='/about' element={<About />} />
          <Route path='/portfolio' element={<Portfolio />} />
        </Routes>
      </Box>
    </div>
  );
}

export default App;
