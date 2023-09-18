import SocialBar from '../SocialBar';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className='container'>
            <article className='footer'>
                <SocialBar
                    className='socialBarFooter'
                    facebookLink='https://facebook.com/'
                    youtubeLink='https://youtube.com/'
                    discordLink='https://discord.com/'
                    twitterLink='https://twitter.com/'
                />
                <div className='linkFooter'>
                  <Link to='/Privacy'>Privacy</Link>
                  <Link to='/Term-Of-Use'>Term of Use</Link>
                </div>
            </article>
        </footer>
    );
}

export default Footer;
