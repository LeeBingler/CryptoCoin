import './assets/styles.scss';
import Home from './Pages/Home';
import Market from './Pages/Market';
import ChooseUs from './Pages/ChooseUs';
import JoinUs from './Pages/JoinUs';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

function App() {

    return (
        <>
          <Navbar />
          <Home />
          <Market />
          <ChooseUs />
          <JoinUs />
          <Footer />
        </>
    );
}

export default App;
