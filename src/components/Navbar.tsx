import { useState } from "react";
import Link from "next/link";

export const Navbar = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <header className="page-header">
            <nav className="navbar is-transparent" role="navigation">
                <div className="navbar-brand">
                    <a
                        onClick={() => {
                            setIsActive(!isActive);
                        }}
                        role="button"
                        className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
                        aria-label="menu"
                        aria-expanded="false"
                        data-target="navbar-menu"
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                    <Link href="/" passHref>
                        <a className="navbar-item" href="/">
                            yehezkieldio
                        </a>
                    </Link>
                </div>
                <div id="navbar-menu" className={`navbar-menu ${isActive ? "is-active" : ""}`}>
                    <div className="navbar-end">
                        <Link href="/technologies" passHref>
                            <a className="navbar-item" href="/technologies">
                                technologies
                            </a>
                        </Link>
                        <Link href="/projects" passHref>
                            <a className="navbar-item" href="/projects">
                                projects
                            </a>
                        </Link>
                        <Link href="/notes" passHref>
                            <a className="navbar-item" href="/notes">
                                notes
                            </a>
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
