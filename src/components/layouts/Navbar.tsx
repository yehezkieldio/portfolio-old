import Link from "next/link";
import { Component } from "react";

import { Album, Github, Instagram } from "lucide-react";
import { GITHUB_LINK, INSTAGRAM_LINK } from "../../config/links";

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
                        <Link href={GITHUB_LINK}>
                            <a className="navbar-item is-icon">
                                <span className="is-hidden-desktop">
                                    GitHub
                                </span>
                                <span className="is-hidden-mobile">
                                    <Github size={18} />
                                </span>
                            </a>
                        </Link>
                        <Link href={INSTAGRAM_LINK}>
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
