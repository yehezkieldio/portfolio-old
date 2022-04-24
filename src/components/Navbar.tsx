import { useState } from "react";
import Link from "next/link";

export const Navbar = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <header className="page-header">
            <nav className="navbar is-transparent" role="navigation">
                <div className="navbar-brand">
                    <Link href="/">
                        <a className="navbar-item">yehezkieldio</a>
                    </Link>
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
                </div>
                <div id="navbar-menu" className={`navbar-menu ${isActive ? "is-active" : ""}`}>
                    <div className="navbar-end">
                        <Link href="/technologies">
                            <a className="navbar-item">technologies</a>
                        </Link>
                        <Link href="/projects">
                            <a className="navbar-item">projects</a>
                        </Link>
                        <Link href="/notes">
                            <a className="navbar-item">notes</a>
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
