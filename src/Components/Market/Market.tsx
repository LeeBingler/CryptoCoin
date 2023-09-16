import useFetchData from '../../hook/useFetchData';

function Market() {
    const url =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en';
    const {isLoading, data, error} = useFetchData(url)


    console.log(data);
    return <section>{url}</section>;
}

export default Market;
