// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Homepage } from './routes/homepage';
import { Topbar } from './components/topbar';
import { Portfolio } from './routes/portfolio';
import { About } from './routes/about';
import { TryMobile } from './routes/try-mobile'
import { Container } from '@mui/material';
import { Footer } from './components/footer';

function App() {
  return (
    <div className="App">
      <Topbar />
      <Container className="main-content" maxWidth='lg' sx={{ color: 'text.primary' }}>
        <Routes >
          <Route path='/' element={<Homepage />} />
          <Route path='/about' element={<About />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/try-mobile' element={<TryMobile />} />
        </Routes>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
