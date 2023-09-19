import './assets/styles.scss';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { lazy } from 'react';

const NoPage = lazy(() => import('./Pages/NoPage'));
const Coin = lazy(() => import('./Pages/Coin'));
const Privacy = lazy(() => import('./Pages/Privacy'));
const TermOfUse = lazy(() => import('./Pages/TermOfUse'));


function App() {

    return (
        <Router>
            <Navbar>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/coin/:id' element={<Coin />} />
                    <Route path='/privacy' element={<Privacy />} />
                    <Route path='/term-of-use' element={<TermOfUse />} />
                    <Route path='*' element={<NoPage />} />
                </Routes>
            </Navbar>
            <Footer />
        </Router>
    );
}

export default App;
