import { RiTwitterXFill, RiDiscordFill } from 'react-icons/ri';
import BtnMenu from './components/BtnMenu';
import ListLinkOnHome from './components/ListLinkOnHome';
import { Link } from 'react-router-dom';
import { useState } from 'react';

interface NavbarProps {
    children: JSX.Element;
}

function Navbar({ children }: NavbarProps) {
    const [menuHidden, setMenuHidden] = useState(true);

    return (
        <>
            <nav>
                <div className='navbar'>
                    <div className='logo'>
                        <Link to={'/'}>
                            Awesomecrypt
                        </Link>
                    </div>

                    <div className='midSectionNavbar' style={menuHidden ? {transform: 'translate(100%)'} : {transform: 'translate(0%)'}}>
                        <ListLinkOnHome className='listNavbar'>
                            Home,
                            Market,
                            Choose Us,
                            Join
                        </ListLinkOnHome>

                        <div>
                            <RiTwitterXFill />
                            <RiDiscordFill />
                        </div>
                    </div>

                    <BtnMenu triggerFunc={setMenuHidden} />
                </div>
            </nav>

            {children}
        </>
    );
}

export default Navbar;
