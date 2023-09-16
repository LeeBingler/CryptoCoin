import { useNavigate } from "react-router-dom";

function MarketCard({ coinStats }: any) {
    const navigate = useNavigate()
    function handleOnClick() {
        navigate(`/coin/${coinStats.id}`);
    }

    return (
        <div className='marketCard' onClick={handleOnClick}>
            <img src={coinStats.image} alt={`image of ${coinStats.name}`} />
            <p> {coinStats.current_price} $</p>
            <p> {coinStats.market_cap_change_percentage_24h} %</p>
            <p> {coinStats.market_cap} $</p>
        </div>
    );
}

export default MarketCard;
