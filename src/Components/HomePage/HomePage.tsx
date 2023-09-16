import InputBtnField from "../InputBtnField";

function HomePage() {
    return (
        <section className='homepageContainer'>
            <div className="homepage">
                <div className="hero">
                    <h1>
                        Find the Next Crypto Gem on <span> CryptoCoin </span>
                    </h1>
                    <p> Buy and sell BTC, ETH, LTC, DOGE, and other altcoins </p>
                    <InputBtnField content={'Get Started'} onClick={() => window.alert('You are subscribe to our news letter')} className='btnHomePage' />
                </div>

                <div className="statsHomePage">
                    <div>
                        <p> +700 </p>
                        <p> Coins </p>
                    </div>

                    <div>
                        <p> +1000 </p>
                        <p> trade per day</p>
                    </div>

                    <div>
                        <p> +200 </p>
                        <p> Countries Covered</p>
                    </div>

                    <div>
                        <p> 99.9% </p>
                        <p> customer satisfaction </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomePage;
