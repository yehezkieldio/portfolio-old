import React from "react";

import Image from "next/image";
import { withTranslation } from "next-i18next";
import type { TFunction } from "react-i18next";
import AvatarImage from "../../public/Avatar.jpg";
import { DISCORD_LINK, GITHUB_LINK, INSTAGRAM_LINK } from "../../config/links";

interface IProps {
	t: TFunction;
}
interface IState {}

class IndexHeading extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
	}
	render() {
		return (
			<div className="index-heading">
				<div className="columns">
					<div className="column is-6">
						<div className="block">
							<p className="pretitle subtitle">
								{this.props.t("index-heading-pretitle")}
							</p>
							<h1 className="title">
								{this.props.t("index-heading-title")}
							</h1>
							<p className="aftertitle subtitle">
								{this.props.t("index-heading-aftertitle")}
							</p>
							<a
								href={GITHUB_LINK}
								className="call-to-action call-to-action-regular"
							>
								GitHub
							</a>
							<a
								href={DISCORD_LINK}
								className="call-to-action call-to-action-regular"
							>
								Discord
							</a>
							<a
								href={INSTAGRAM_LINK}
								className="call-to-action call-to-action-regular"
							>
								Instagram
							</a>
						</div>
					</div>
					<div className="column is-offset-1 is-128x128">
						<figure className="image">
							<Image
								className="avatar-image"
								src={AvatarImage}
								alt="My avatar"
								blurDataURL=""
							/>
						</figure>
					</div>
				</div>
			</div>
		);
	}
}

export default withTranslation("index")(IndexHeading);
