import CardChooseUs from './components/CardChooseUs';
import { RiWallet3Line, RiExchangeDollarFill } from 'react-icons/ri';
import { LiaCoinsSolid } from 'react-icons/lia';
import { BiLayerPlus } from 'react-icons/bi';
import { MdOutlineVerified } from 'react-icons/md';
import { BsShieldLock } from 'react-icons/bs';

function ChooseUs() {
    return (
        <section className='container'>
            <article className='ChooseUs'>
                <h2 className='titleSection'> Choose Us </h2>
                <div className='containerCardChooseUse'>
                    <CardChooseUs
                        title='CONNECT YOUR WALLET'
                        content='Use Trust Wallet, Metamask or to connect to the app.'
                        icon={<RiWallet3Line />}
                    />
                    <CardChooseUs
                        title='CHOOSE YOUR COIN'
                        content='Among a Selection of over a Thousand of Coin.'
                        icon={<LiaCoinsSolid />}
                    />
                    <CardChooseUs
                        title='DRIVE YOUR COLLECTION'
                        content='We make it easy to Discover, Invest and Manage.'
                        icon={<BiLayerPlus />}
                    />
                    <CardChooseUs
                        title='FOR VERIFIED USERS'
                        content='Get up to 100 USDT in Rewards if you Register Now.'
                        icon={<MdOutlineVerified />}
                    />
                    <CardChooseUs
                        title='Easy Deposit & Withdrawal'
                        content='From Fiat to Crypto, Fast and Easy'
                        icon={<RiExchangeDollarFill />}
                    />
                    <CardChooseUs
                        title='Maximum Security'
                        content='Latest generation Anti-Hacker system'
                        icon={<BsShieldLock />}
                    />
                </div>
            </article>
        </section>
    );
}

export default ChooseUs;
