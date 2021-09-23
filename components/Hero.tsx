import React from "react";

import Navbar from "./Navbar";

interface IProps {
	children: React.ReactNode;
}
interface IState {}

export class Hero extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
	}
	render() {
		return (
			<section className="hero">
				<div className="hero-head">
					<Navbar></Navbar>
				</div>
				<div className="hero-body">{this.props.children}</div>
			</section>
		);
	}
}
