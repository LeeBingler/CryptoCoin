import useFetchData from '../../hook/useFetchData';
import MarketCard from './components/MarketCard';
import BannerContentMarket from './components/BannerContentMarket';
import Loading from '../Loading';

interface itemData {
    id: string;
}

interface errorMessage {
    message: string;
}

function Market() {
    const url =
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en';
    /*const {isLoading, data, error:errorMessage} = useFetchData(url);*/
    const smBreakpointPx = 640;
    const mdBreakpointPx = 768;
    const data = [
        {
            ath: 69045,
            ath_change_percentage: -61.53391,
            ath_date: '2021-11-10T14:24:11.849Z',
            atl: 67.81,
            atl_change_percentage: 39067.10923,
            atl_date: '2013-07-06T00:00:00.000Z',
            circulating_supply: 19487562,
            current_price: 26579,
            fully_diluted_valuation: 558068163433,
            high_24h: 26834,
            id: 'bitcoin',
            image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
            last_updated: '2023-09-16T18:39:18.248Z',
            low_24h: 26348,
            market_cap: 517875615958,
            market_cap_change_24h: 4315390106,
            market_cap_change_percentage_24h: 0.84029,
            market_cap_rank: 1,
            max_supply: 21000000,
            name: 'Bitcoin',
            price_change_24h: 186.37,
            price_change_percentage_24h: 0.70616,
            roi: null,
            symbol: 'btc',
            total_supply: 21000000,
            total_volume: 5605578057
        },
        {
            ath: 4878.26,
            ath_change_percentage: -66.44258,
            ath_date: '2021-11-10T14:24:19.604Z',
            atl: 0.432979,
            atl_change_percentage: 377982.69353,
            atl_date: '2015-10-20T00:00:00.000Z',
            circulating_supply: 120223330.911376,
            current_price: 1635.04,
            fully_diluted_valuation: 196836072996,
            high_24h: 1652.73,
            id: 'ethereum',
            image: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880',
            last_updated: '2023-09-16T19:09:54.130Z',
            low_24h: 1619.22,
            market_cap: 196836072996,
            market_cap_change_24h: 2121240640,
            market_cap_change_percentage_24h: 1.08941,
            market_cap_rank: 2,
            max_supply: null,
            name: 'Ethereum',
            price_change_24h: 14.38,
            price_change_percentage_24h: 0.88712,
            roi: { times: 81.2777092162587, currency: 'btc', percentage: 8127.77092162587 },
            symbol: 'eth',
            total_supply: 120223330.911376,
            total_volume: 5846002652
        }
    ];
    const isLoading = true;
    const error = null;

    return (
        <section className='marketContainer'>
            <article className='market'>
                <h2> Market Update </h2>
                <div>
                    <BannerContentMarket smBreakpointPx={smBreakpointPx} mdBreakpointPx={mdBreakpointPx}/>
                    {isLoading ? <Loading width='15rem' height='15rem' classNameContainer='containerLoadingMarket' />: null}
                    {error ? <p> Error Try Later: {error}</p> : null}
                    {!isLoading && !error
                        ? data.map((coinStats: itemData) => {
                              return <MarketCard key={coinStats.id} smBreakpointPx={smBreakpointPx} mdBreakpointPx={mdBreakpointPx} coinStats={coinStats} />;
                          })
                        : null}
                </div>
            </article>
        </section>
    );
}

export default Market;
