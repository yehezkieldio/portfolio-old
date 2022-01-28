import React from "react";

import Link from "next/link";
import { FaGithub, FaInstagram, FaDiscord } from "react-icons/fa";

interface HomeIntroductionStates {}

interface HomeIntroductionProps {}

export class HomeIntroduction extends React.Component<HomeIntroductionProps, HomeIntroductionStates> {
    constructor(props: HomeIntroductionProps) {
        super(props);
    }

    render() {
        return (
            <div className="home-introduction">
                <div className="home-introduction-content">
                    <h1 className="title">Full-stack web developer.</h1>
                    <p className="subtitle">
                        I'm Yehezkiel Dio, an Indonesian-based web developer with over two years of experience. I
                        specialize in full-stack development and interface design.
                    </p>
                    <p className="subtitle">
                        Currently, a vocational software engineering student doing open-source projects. I go by the
                        name Liz on the internet.
                    </p>
                </div>
                <div className="home-socials">
                    <ul className="home-socials-link">
                        <li className="home-socials-link-item">
                            <span className="is-icon">
                                <Link href="https://www.instagram.com/yhezkiel.dio/" passHref>
                                    <FaInstagram size={28} />
                                </Link>
                            </span>
                        </li>
                        <li className="home-socials-link-item">
                            <span className="is-icon">
                                <Link href="https://github.com/yehezkieldio" passHref>
                                    <FaGithub size={28} />
                                </Link>
                            </span>
                        </li>
                        <li className="home-socials-link-item">
                            <span className="is-icon">
                                <Link href="https://discord.com/users/327849142774923266" passHref>
                                    <FaDiscord size={28} />
                                </Link>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
