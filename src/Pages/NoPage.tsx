import { useNavigate } from 'react-router-dom';
import BtcImage from '../assets/images/bitcoin.png';

function NoPage() {
    const navigate = useNavigate();
    return (
        <section className='nopage'>
            <div className='nopageTitle'>
                4 <img src={BtcImage} alt='Bitcoin image that stand for a zero' /> 4
            </div>
            <p> There's nothing to see here</p>
            <button aria-label='Go Home button' onClick={() => navigate('/')}>
                Go Home
            </button>
        </section>
    );
}

export default NoPage;
