import './assets/styles.scss';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Privacy from './Pages/Privacy';
import { lazy } from 'react';

const NoPage = lazy(() => import('./Pages/NoPage'));
const Coin = lazy(() => import('./Pages/Coin'));

function App() {

    return (
        <Router>
            <Navbar>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/coin/:id' element={<Coin />} />
                    <Route path='/privacy' element={<Privacy />} />
                    <Route path='*' element={<NoPage />} />
                </Routes>
            </Navbar>
            <Footer />
        </Router>
    );
}

export default App;
