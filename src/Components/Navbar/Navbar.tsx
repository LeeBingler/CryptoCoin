import { RiTwitterXFill, RiDiscordFill, RiYoutubeFill, RiFacebookFill } from 'react-icons/ri';
import BtnMenu from './components/BtnMenu';
import ListLinkOnHome from './components/ListLinkOnHome';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import useScreenSizeShow from '../../hook/useScreenSizeShow';

interface NavbarProps {
    children: JSX.Element;
}

function Navbar({ children }: NavbarProps) {
    const [showMenu, setShowMenu] = useState(false);

    useScreenSizeShow({ setShowMenu: setShowMenu, size: 640 });

    return (
        <>
            <nav className='navContainer'>
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
                            onClick={() => setShowMenu((prev) => !prev)}
                        >
                            Home, Market, Choose Us, Join
                        </ListLinkOnHome>

                        <div>
                            <RiTwitterXFill />
                            <RiDiscordFill />
                            <RiYoutubeFill />
                            <RiFacebookFill />
                        </div>
                    </div>

                    <BtnMenu
                        triggerFunc={setShowMenu}
                        boolean={showMenu}
                        colors={['#f3f2f4']}
                        sizeToDisappearPx={640}
                    />
                </div>
            </nav>

            {children}
        </>
    );
}

export default Navbar;
