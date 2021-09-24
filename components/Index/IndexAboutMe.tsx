import React from "react";

import Image from "next/image";
import { withTranslation } from "next-i18next";
import type { TFunction } from "react-i18next";
import AboutMeIllust from "../../public/illust/about-me.svg";

interface IProps {
	t: TFunction;
}
interface IState {}

class IndexAboutMe extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
	}
	render() {
		return (
			<div className="index-about-me">
				<div className="columns">
					<div className="column is-5">
						<figure className="image">
							<Image
								className="about-me-illust"
								src={AboutMeIllust}
								alt="My avatar"
							/>
						</figure>
					</div>
					<div className="column is-half">
						<p className="pretitle subtitle">
							{this.props.t("index-about-me-pretitle")}
						</p>
						<h1 className="title">
							{this.props.t("index-about-me-title")}
						</h1>
						<div className="block">
							<p className="text-aftertitle subtitle">
								{this.props.t(
									"index-about-me-text-aftertitle-one"
								)}
							</p>
							<p className="text-aftertitle subtitle">
								{this.props.t(
									"index-about-me-text-aftertitle-two"
								)}
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default withTranslation("index")(IndexAboutMe);
