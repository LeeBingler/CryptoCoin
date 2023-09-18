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
                <a href={twitterLink} target='_blank' rel='noreferrer'>
                    <RiTwitterXFill />
                </a>
            ) : null}

            {discordLink ? (
                <a href={discordLink} target='_blank' rel='noreferrer'>
                    <RiDiscordFill />
                </a>
            ) : null}

            {youtubeLink ? (
                <a href={youtubeLink} target='_blank' rel='noreferrer'>
                    <RiYoutubeFill />
                </a>
            ) : null}

            {facebookLink ? (
                <a href={facebookLink} target='_blank' rel='noreferrer'>
                    <RiFacebookFill />
                </a>
            ) : null}
        </div>
    );
}

export default SocialBar;
