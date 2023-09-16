import './assets/styles.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { lazy } from 'react';

const NoPage = lazy(() => import('./Pages/NoPage'));
const Coin = lazy(() => import('./Pages/Coin'));

function App() {

    return (
        <>
          <Navbar>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/coin/:id' element={<Coin />} />
              <Route path='*' element={<NoPage />} />
            </Routes>
          </Navbar>
          <Footer />
        </>
    );
}

export default App;
