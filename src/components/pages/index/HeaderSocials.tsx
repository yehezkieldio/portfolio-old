import React from "react";

import Link from "next/link";
import { FaGithub, FaInstagram, FaDiscord } from "react-icons/fa";

interface HeaderSocialsStates {}

interface HeaderSocialsProps {}

export class HeaderSocials extends React.Component<HeaderSocialsProps, HeaderSocialsStates> {
    constructor(props: HeaderSocialsProps) {
        super(props);
    }

    render() {
        return (
            <ul className="socials">
                <li className="socials-item">
                    <span className="is-icon">
                        <Link href="https://www.instagram.com/yhezkiel.dio/" passHref>
                            <FaInstagram size={28} />
                        </Link>
                    </span>
                </li>
                <li className="socials-item">
                    <span className="is-icon">
                        <Link href="https://github.com/LichKing112" passHref>
                            <FaGithub size={28} />
                        </Link>
                    </span>
                </li>
                <li className="socials-item">
                    <span className="is-icon">
                        <Link href="https://discord.com/users/327849142774923266" passHref>
                            <FaDiscord size={28} />
                        </Link>
                    </span>
                </li>
            </ul>
        );
    }
}
