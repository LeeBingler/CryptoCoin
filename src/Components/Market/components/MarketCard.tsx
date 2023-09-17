import { useNavigate } from 'react-router-dom';
import useWindowSize from '../../../hook/useWindowSize';

interface MarketCardProps {
    smBreakpointPx: number;
    mdBreakpointPx: number;
    coinStats: any;
}

function MarketCard({ coinStats, smBreakpointPx, mdBreakpointPx }:MarketCardProps) {
    const navigate = useNavigate();
    const { width } = useWindowSize();
    const colorPercentage = coinStats.market_cap_change_percentage_24h >= 0 ? {color: 'rgb(59, 241, 114)'} : {color: 'rgb(255, 38, 38)'};

    function handleOnClick() {
        navigate(`/coin/${coinStats.id}`);
    }

    return (
        <div className='marketCard' onClick={handleOnClick}>
            <img src={coinStats.image} alt={`image of ${coinStats.name}`} />
            <p> {coinStats.current_price.toFixed(2)} $</p>
            {width > smBreakpointPx ? <p style={colorPercentage}> {coinStats.market_cap_change_percentage_24h.toFixed(2)} %</p> : null}
            {width > mdBreakpointPx ? <p> {coinStats.market_cap.toLocaleString('en-US')} $</p> : null}
        </div>
    );
}

export default MarketCard;
