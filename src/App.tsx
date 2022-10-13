import { Container, Navbar } from 'react-bootstrap';
import { Link, Route, Routes } from 'react-router-dom';

import './App.css';

import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import NotFoundPage from './Pages/NotFoundPage';
import TicTacToe from './Game/TicTacToe';
import Calculator from './Applications/Calculator';

function App() {
  return (
    <div className='App'>
      <Container>
        <Navbar expand='lg' variant='light' bg='light'>
          <Container>
            <Link className='nav-link' to='/'>Home</Link>
            <Link className='nav-link' to='/tictactoe'>Tic Tac Toe</Link>
            <Link className='nav-link' to='/calculator'>Calculator</Link>
            <Link className='nav-link' to='/about'>About Me</Link>
          </Container>
        </Navbar><br />

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/tictactoe' element={<TicTacToe />} />
          <Route path='/calculator' element={<Calculator />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;