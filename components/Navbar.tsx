import React from "react";

import Link from "next/link";

interface IProps {}
interface IState {
	isActive: boolean;
}

export class Navbar extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);

		this.state = {
			isActive: false,
		};
	}
	private handleNavigation = () => {
		this.setState((prevState) => {
			return {
				isActive: !prevState.isActive,
			};
		});
	};
	render() {
		return (
			<nav className="navbar is-spaced">
				<div className="navbar-brand">
					{/* <Link href="/">
						<a className="navbar-item navbar-title">
							Yehezkiel Dio
						</a>
					</Link> */}
					<a
						className={
							this.state.isActive
								? "navbar-burger is-active"
								: "navbar-burger"
						}
						aria-label="menu"
						aria-expanded="false"
						data-target="navbarMenu"
						onClick={this.handleNavigation}
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
						<Link href="/">
							<a className="navbar-item">Projects</a>
						</Link>
						<Link href="/">
							<a className="navbar-item">Blog</a>
						</Link>
					</div>
				</div>
			</nav>
		);
	}
}
