import useFetchData from '../../hook/useFetchData';
import MarketCard from './components/MarketCard';
import BannerContentMarket from './components/BannerContentMarket';
import ListPagination from './components/ListPagination';
import Loading from '../Loading';
import { useState } from 'react';

interface itemData {
    id: string;
}

function Market() {
    const [currrentPage, setCurrentPage] = useState('1');
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${currrentPage}&sparkline=false&locale=en`;
    const { isLoading, data, error } = useFetchData(url);
    const smBreakpointPx = 640;
    const mdBreakpointPx = 768;

    return (
        <section className='container' id='Market'>
            <article className='market'>
                <h2 className='titleSection'> Market Update </h2>
                <div>
                    <BannerContentMarket
                        smBreakpointPx={smBreakpointPx}
                        mdBreakpointPx={mdBreakpointPx}
                    />
                    {isLoading ? (
                        <Loading
                            width='15rem'
                            height='15rem'
                            classNameContainer='containerLoadingMarket'
                        />
                    ) : null}
                    {error ? (
                        <div className='errorMessageMarket'>
                            <p> Error Try Later: {error.message}</p>
                        </div>
                    ) : null}
                    {!isLoading && !error
                        ? data.map((coinStats: itemData) => {
                              return (
                                  <MarketCard
                                      key={coinStats.id}
                                      smBreakpointPx={smBreakpointPx}
                                      mdBreakpointPx={mdBreakpointPx}
                                      coinStats={coinStats}
                                  />
                              );
                          })
                        : null}
                    {!isLoading && !error ? (
                        <ListPagination
                            setPage={setCurrentPage}
                            currrentPage={currrentPage}
                            numberOfPage={5}
                            className='listMarketBtn'
                        />
                    ) : null}
                </div>
            </article>
        </section>
    );
}

export default Market;
