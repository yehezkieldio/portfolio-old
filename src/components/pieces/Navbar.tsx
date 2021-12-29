import Link from "next/link";
import { Link as ReactScrollLink } from "react-scroll";
import { Component } from "react";

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
                        <Link href="" passHref>
                            <ReactScrollLink to="header" smooth={true} className="navbar-item">
                                Home
                            </ReactScrollLink>
                        </Link>
                        <Link href="" passHref>
                            <ReactScrollLink to="about-me" smooth={true} className="navbar-item">
                                About
                            </ReactScrollLink>
                        </Link>
                        <Link href="" passHref>
                            <ReactScrollLink to="projects" smooth={true} className="navbar-item">
                                Projects
                            </ReactScrollLink>
                        </Link>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;
