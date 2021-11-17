import Link from "next/link";
import { Component, createRef } from "react";

import { Album, Github, Instagram } from "lucide-react";

interface IProps {}

interface IStates {
    isActive: boolean;
}

export class Navbar extends Component<IProps, IStates> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            isActive: false,
        };
    }

    private _handleNavigation = () => {
        this.setState((prevState) => {
            return {
                isActive: !prevState.isActive,
            };
        });
    };

    private _handleTheme = (theme: string) => {
        if (process.browser) {
            switch (theme) {
                case "personal":
                    document.documentElement.setAttribute(
                        "data-theme",
                        "personal"
                    );
                    localStorage.setItem("theme", "personal");
                    break;
                case "tokyo-night-storm":
                    document.documentElement.setAttribute(
                        "data-theme",
                        "tokyo-night-storm"
                    );
                    localStorage.setItem("theme", "tokyo-night-storm");

                    break;
                case "gruvbox":
                    document.documentElement.setAttribute(
                        "data-theme",
                        "gruvbox"
                    );
                    localStorage.setItem("theme", "gruvbox");
                    break;
                case "levamentum":
                    document.documentElement.setAttribute(
                        "data-theme",
                        "levamentum"
                    );
                    localStorage.setItem("theme", "levamentum");
                    break;
            }
        }
    };

    render() {
        return (
            <nav className="navbar" role="navigation">
                <div className="navbar-brand">
                    <a
                        onClick={this._handleNavigation}
                        className={
                            this.state.isActive
                                ? "navbar-burger is-active"
                                : "navbar-burger"
                        }
                        aria-label="menu"
                        aria-expanded="false"
                        data-target="navbarMenu"
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div
                    className={
                        this.state.isActive
                            ? "navbar-menu is-active "
                            : "navbar-menu"
                    }
                    id="navbarMenu"
                >
                    <div className="navbar-end">
                        <Link href="/">
                            <a className="navbar-item">Home</a>
                        </Link>
                        <Link href="/projects">
                            <a className="navbar-item">Projects</a>
                        </Link>
                        <Link href="/schoolwork">
                            <a className="navbar-item">Schoolwork</a>
                        </Link>
                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link">Theme</a>

                            <div className="navbar-dropdown">
                                <a
                                    className="navbar-item"
                                    onClick={() =>
                                        this._handleTheme("personal")
                                    }
                                >
                                    Personalized
                                </a>
                                <a
                                    className="navbar-item"
                                    onClick={() =>
                                        this._handleTheme("tokyo-night-storm")
                                    }
                                >
                                    Tokyo Night Storm
                                </a>
                                <a
                                    className="navbar-item"
                                    onClick={() =>
                                        this._handleTheme("levamentum")
                                    }
                                >
                                    Levamentum
                                </a>
                                <a
                                    className="navbar-item"
                                    onClick={() => this._handleTheme("gruvbox")}
                                >
                                    Gruvbox
                                </a>
                            </div>
                        </div>

                        <Link href="/bookmarks">
                            <a className="navbar-item is-icon">
                                <span className="is-hidden-desktop">
                                    Bookmarks
                                </span>
                                <span className="is-hidden-mobile">
                                    <Album size={18} />
                                </span>
                            </a>
                        </Link>
                        <Link href="https://github.com/LichKing112">
                            <a className="navbar-item is-icon">
                                <span className="is-hidden-desktop">
                                    GitHub
                                </span>
                                <span className="is-hidden-mobile">
                                    <Github size={18} />
                                </span>
                            </a>
                        </Link>
                        <Link href="https://www.instagram.com/yhezkiel.dio/">
                            <a className="navbar-item is-icon">
                                <span className="is-hidden-desktop">
                                    Instagram
                                </span>
                                <span className="is-hidden-mobile">
                                    <Instagram size={18} />
                                </span>
                            </a>
                        </Link>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;
