import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Homepage } from './routes/homepage';
import { Topbar } from './components/topbar';
import { Portfolio } from './routes/portfolio';
import { About } from './routes/about';
import { Container } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Topbar />
      <Container className="main-content" maxWidth='lg' sx={{color:'text.primary'}}>
        <Routes >
          <Route path='/' element={<Homepage />} />
          <Route path='/about' element={<About />} />
          <Route path='/portfolio' element={<Portfolio />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
