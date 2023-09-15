import { RiTwitterXFill, RiDiscordFill, RiYoutubeFill, RiFacebookFill } from 'react-icons/ri';

interface SocialProps {
    twitterLink?: string;
    discordLink?: string;
    youtubeLink?: string;
    facebookLink?: string;
    className: string;
}

function SocialBar({ twitterLink, discordLink, youtubeLink, facebookLink, className}: SocialProps) {
    return (
        <div className={className}>
            {twitterLink ? (
                <a href={twitterLink}>
                    <RiTwitterXFill />
                </a>
            ) : null}

            {discordLink ? (
                <a href={discordLink}>
                    <RiDiscordFill />
                </a>
            ) : null}

            {youtubeLink ? (
                <a href={youtubeLink}>
                    <RiYoutubeFill />
                </a>
            ) : null}

            {facebookLink ? (
                <a href={facebookLink}>
                    <RiFacebookFill />
                </a>
            ) : null}
        </div>
    );
}

export default SocialBar;
