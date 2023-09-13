import { RiTwitterXFill, RiDiscordFill } from 'react-icons/ri';

function Navbar() {
    return (
        <nav>
            <div className='navbar'>
                <div className='logo'>
                    <a href='#Home'> Awesomecrypt </a>
                </div>

                <ul className='listNavbar'>
                    <li>
                        <a href='#Home'> Home </a>
                    </li>
                    <li>
                        <a href='#Market'> Market </a>
                    </li>
                    <li>
                        <a href='#ChooseUs'> Choose Us </a>
                    </li>
                    <li>
                        <a href='#Join'> Join </a>
                    </li>
                </ul>

                <div>
                    <RiTwitterXFill />
                    <RiDiscordFill />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
