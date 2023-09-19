import useFetchData from '../hook/useFetchData';
import { useParams } from 'react-router-dom';
import Loading from '../Components/Loading';
import { useNavigate } from 'react-router-dom';
import CardCoin from '../Components/CardCoin';

function Coin() {
    const navigate = useNavigate();
    const { id } = useParams();
    const url = `https://api.coingecko.com/api/v3/coins/${id}`;
    const { isLoading, error, data } = useFetchData(url);

    return (
        <section className='container'>
            <article className='coin'>
                {isLoading ? (
                    <Loading
                        width='15rem'
                        height='15rem'
                        classNameContainer='containerLoadingMarket'
                    />
                ) : null}
                {!isLoading && error ? (
                    <div className='errorMessageCoin'>
                        <p> Sorry Error Try Later: {error.message}</p>
                        <button aria-label='Go Home button' onClick={() => navigate('/')}>
                            Go Home
                        </button>
                    </div>
                ) : null}
                {!isLoading && !error ? <CardCoin data={data} /> : null}
            </article>
        </section>
    );
}

export default Coin;
