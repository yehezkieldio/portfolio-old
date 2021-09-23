import React from "react";

import Link from "next/link";
import { withTranslation, useTranslation } from "next-i18next";
import type { TFunction } from "react-i18next";
import { withRouter, NextRouter } from "next/router";

interface WithRouterProps {
	router: NextRouter;
}

interface IProps extends WithRouterProps {
	t: TFunction;
}
interface IState {
	isActive: boolean;
}

class Navbar extends React.Component<IProps, IState> {
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
						<Link href="https://blog.yehezkieldio.xyz">
							<a className="navbar-item">Blog</a>
						</Link>
						<Link
							href="/"
							locale={
								this.props.router.locale === "eng"
									? "ind"
									: "eng"
							}
						>
							{/* <a className="navbar-item">Change Language</a> */}
							<a className="navbar-item">
								{this.props.t("change-language")}
							</a>
						</Link>
					</div>
				</div>
			</nav>
		);
	}
}

const translationsHoc = withTranslation("common")(Navbar);
export default withRouter(translationsHoc);
