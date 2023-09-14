import './assets/styles.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Coin from './Pages/Coin';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {

    return (
        <>
          <Navbar>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/coin/:id' element={<Coin />} />
            </Routes>
          </Navbar>
          <Footer />
        </>
    );
}

export default App;
