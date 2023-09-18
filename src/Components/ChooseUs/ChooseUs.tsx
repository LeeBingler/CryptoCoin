import CardChooseUs from './components/CardChooseUs';
import { RiWallet3Line, RiExchangeDollarFill } from 'react-icons/ri';
import { LiaCoinsSolid } from 'react-icons/lia';
import { BiLayerPlus } from 'react-icons/bi';
import { MdOutlineVerified } from 'react-icons/md';
import { BsCashStack } from 'react-icons/bs';

function ChooseUs() {
    return (
        <section className='containerChooseUs'>
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
                        title='Staking on-chain'
                        content='Generate passive income by securing blockchain'
                        icon={<BsCashStack />}
                    />
                </div>
            </article>
        </section>
    );
}

export default ChooseUs;
