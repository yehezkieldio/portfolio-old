import React from "react";

import { withTranslation } from "next-i18next";
import Link from "next/link";

interface IProps {
	name: string;
	link: string;
	slug: string;
}

interface IState {}

export const ProjectsCard = (props: IProps) => {
	return (
		<div className="column is-4">
			<Link href={props.link} passHref>
				<div className="card">
					<div className="card-content">
						<div className="content">
							<h1 className="card-title title">{props.name}</h1>
							<p className="card-subtitle subtitle ">
								{props.slug}
							</p>
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default withTranslation("index")(ProjectsCard);
