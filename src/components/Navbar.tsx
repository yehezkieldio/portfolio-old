import React from "react";
import Link from "next/link";

interface NavbarStates {
    isActive: boolean;
}

interface NavbarProps {}

export class Navbar extends React.Component<NavbarProps, NavbarStates> {
    constructor(props: NavbarProps) {
        super(props);

        this.state = {
            isActive: false,
        };
    }

    private __handleNavigation = () => {
        this.setState((previousState) => {
            return {
                isActive: !previousState.isActive,
            };
        });
    };

    render() {
        return (
            <nav className="navbar" role="navigation">
                <div className="navbar-brand">
                    <a
                        onClick={this.__handleNavigation}
                        className={this.state.isActive ? "navbar-burger is-active" : "navbar-burger"}
                        aria-label="menu"
                        aria-expanded="false"
                        data-target="navbarMenu"
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div className={this.state.isActive ? "navbar-menu is-active " : "navbar-menu"} id="navbarMenu">
                    <div className="navbar-end">
                        <Link href="/" passHref>
                            <a className="navbar-item">Home</a>
                        </Link>
                        <Link href="/about" passHref>
                            <a className="navbar-item">About</a>
                        </Link>
                        <Link href="/projects" passHref>
                            <a className="navbar-item">Projects</a>
                        </Link>
                        <Link href="/technologies" passHref>
                            <a className="navbar-item">Technologies</a>
                        </Link>
                    </div>
                </div>
            </nav>
        );
    }
}
