interface CardCoinProps {
    data: any;
}

function CardCoin({ data }: CardCoinProps) {
    return (
        <div className='cardCoin'>
            <div className='headCardCoin'>
                <img src={data.image.large} alt={`Image of ${data.name}`} />
                <h1> {data.name ? data.name : '...'} </h1>
                <p>
                    {' '}
                    Rank: <span>{data.coingecko_rank ? '#' + data.coingecko_rank : '...'}</span>
                </p>
            </div>
            <div className='bodyCardCoin'>
                <div>
                    <p>
                        Price:{' '}
                        <span>
                            {data.market_data ? '$' + data.market_data.current_price.usd : '...'}
                        </span>
                    </p>
                    <p>
                        24h Change:{' '}
                        <span
                            className={
                                data.market_data.price_change_percentage_24h >= 0
                                    ? 'green-text'
                                    : 'red-text'
                            }
                        >
                            {data.market_data
                                ? data.market_data.price_change_percentage_24h.toFixed(2) + '%'
                                : '...'}
                        </span>
                    </p>
                    <p>
                        Symbol: <span>{data.symbol ? data.symbol : '...'}</span>
                    </p>
                </div>
                <div
                    className='descriptionCardCoin'
                    dangerouslySetInnerHTML={{
                        __html: data.description ? data.description.en : '...'
                    }}
                ></div>
            </div>
        </div>
    );
}

export default CardCoin;
