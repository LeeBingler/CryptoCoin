import './assets/styles.scss';
import Home from './Pages/Home';
import Coin from './Pages/Coin';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {

    return (
        <>
          <Navbar />
          <Home />
          <Coin />
          <Footer />
        </>
    );
}

export default App;
