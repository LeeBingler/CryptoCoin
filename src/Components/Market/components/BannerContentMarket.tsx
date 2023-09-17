import useWindowSize from '../../../hook/useWindowSize';

interface BannerContentMarketProps {
    smBreakpointPx: number;
    mdBreakpointPx: number
}

function BannerContentMarket({smBreakpointPx, mdBreakpointPx}:BannerContentMarketProps) {
    const { width } = useWindowSize();

    return (
        <div className='bannerContentMarket'>
            <p> Coin </p>
            <p> Price </p>
            {width > smBreakpointPx ? <p> 24h Change </p> : null}
            {width > mdBreakpointPx ? <p> Market Cap </p> : null}
        </div>
    );
}

export default BannerContentMarket;
