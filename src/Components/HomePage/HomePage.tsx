import inputBtnField from "../inputBtnField";

function HomePage() {
    return (
        <section className='homepageContainer'>
            <div className="homepage">
                <div className="hero">
                    <h1>
                        Find the Next Crypto Gem on <span> CryptoCoin </span>
                    </h1>
                    <p> Buy and sell BTC, ETH, LTC, DOGE, and other altcoins </p>
                    <inputBtnField content={'Get Started'} onClick={() => console.log('click')} />
                </div>

                <div>
                    <div>
                        <p>200 +</p>
                        <p> Countries Covered</p>
                    </div>

                    <div>
                        <p> 700+ </p>
                        <p> Coins </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomePage;
