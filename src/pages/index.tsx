import { NextPage } from "next";
import Navbar from "../components/Navbar";
import Main from "../components/Main";

import Link from "next/link";
import { FaGithub, FaInstagram, FaDiscord } from "react-icons/fa";

export const Index: NextPage = () => {
    return (
        <>
            <Navbar />
            <Main title="yehezkieldio">
                <p className="subtitle">
                    I'm Yehezkiel Dio <span className="username">(mirae)</span>, a web developer based in Indonesia. I
                    specialize in full-stack development and interface design. Currently, I'm:
                </p>
                <ul>
                    <li>IT Intern at Department of Labor and Social Balikpapan.</li>
                    <li>Vocational software engineering student at SMK Negeri 2 Balikpapan.</li>
                </ul>
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
                            <Link href="https://github.com/yehezkieldio" passHref>
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
            </Main>
        </>
    );
};

export default Index;
