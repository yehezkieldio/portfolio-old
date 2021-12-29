import Link from "next/link";
import { InstagramLogo, GithubLogo, DiscordLogo } from "phosphor-react";

export const Socials = () => {
    return (
        <div className="columns">
            <div className="column is-1">
                <div className="socials">
                    <span className="is-icon">
                        <Link href="https://www.instagram.com/yhezkiel.dio/" passHref>
                            <InstagramLogo size={38} weight="light" />
                        </Link>
                    </span>
                    <span className="is-icon">
                        <Link href="https://discord.com/users/327849142774923266" passHref>
                            <DiscordLogo size={38} weight="light" />
                        </Link>
                    </span>
                    <span className="is-icon">
                        <Link href="https://github.com/LichKing112" passHref>
                            <GithubLogo size={38} weight="light" />
                        </Link>
                    </span>
                    <div className="vertical"></div>
                </div>
            </div>
        </div>
    );
};

export default Socials;
