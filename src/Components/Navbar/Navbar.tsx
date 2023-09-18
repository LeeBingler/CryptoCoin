import BtnMenu from './components/BtnMenu';
import ListLinkOnHome from './components/ListLinkOnHome';
import { Link } from 'react-router-dom';
import { useState, Suspense } from 'react';
import useScreenSizeShow from '../../hook/useScreenSizeShow';
import SocialBar from '../SocialBar';

interface NavbarProps {
    children: JSX.Element;
}

function Navbar({ children }: NavbarProps) {
    //quand desktop format appuyer lien fait bouger le menu bonne chance Lee du futur
    const [showMenu, setShowMenu] = useState(false);
    const [mobile, setMobile] = useState(false);
    const mobileSizeMaxPx = 768;

    useScreenSizeShow({ setShowMenu: setShowMenu, size: mobileSizeMaxPx });
    useScreenSizeShow({ setShowMenu: setMobile, size: mobileSizeMaxPx });

    return (
        <>
            <nav className='container navContainer'>
                <div className='navbar'>
                    <div className='logo'>
                        <Link to={'/'}>CryptoCoin</Link>
                    </div>

                    <div
                        className='midSectionNavbar'
                        style={
                            showMenu
                                ? { transform: 'translate(0%)' }
                                : { transform: 'translate(-100%)' }
                        }
                    >
                        <ListLinkOnHome
                            className='listNavbar'
                            onClick={mobile ? (() => null) : (() => setShowMenu((prev) => !prev))}
                        >
                            Home, Market, Choose Us, Join
                        </ListLinkOnHome>
                    </div>

                    <div className='containerBtnNav'>
                        <SocialBar
                            twitterLink='https://twitter.com'
                            discordLink='https://discord.com/'
                            className='socialBarNav'
                        />

                        <BtnMenu
                            triggerFunc={setShowMenu}
                            boolean={showMenu}
                            colors={['#f3f2f4']}
                            sizeToDisappearPx={mobileSizeMaxPx}
                        />
                    </div>
                </div>
            </nav>
            <Suspense>{children}</Suspense>
        </>
    );
}

export default Navbar;
