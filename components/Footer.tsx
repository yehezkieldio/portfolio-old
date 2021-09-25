import React from "react";

import Link from "next/link";

interface IProps {}
interface IState {}

export default class Footer extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
	}
	render() {
		return (
			<footer className="footer">
				<div className="has-text-centered">
					<div className="block">
						<p>
							Powered by{" "}
							<Link href="https://vercel.com/">
								<a className="is-underlined">Vercel</a>
							</Link>{" "}
							with{" "}
							<Link href="https://nextjs.org">
								<a className="is-underlined">Next.js</a>
							</Link>
							,{" "}
							<Link href="https://bulma.io/">
								<a className="is-underlined">Bulma</a>
							</Link>{" "}
							and{" "}
							<Link href="https://www.typescriptlang.org">
								<a className="is-underlined">Typescript</a>
							</Link>
							.
						</p>
					</div>
					<div className="block">
						<p>
							Copyright © 2021 Yehezkiel Dio. All Rights Reserved
						</p>
					</div>
				</div>
			</footer>
		);
	}
}
