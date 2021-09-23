import React from "react";

import Image from "next/image";
import AboutMeIllust from "../../public/illust/about-me.svg";

interface IProps {}
interface IState {}

export class IndexAboutMe extends React.Component<IProps, IState> {
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
						<p className="pretitle subtitle">Who am i?</p>
						<h1 className="title">About Me.</h1>
						<div className="block">
							<p className="text-aftertitle subtitle">
								A Indonesian 15 years old student at SMK Negeri
								2 Balikpapan majoring in software engineering
								with a keen interest in web development. I go by
								LichKing112 or Liz on the Internet!
							</p>
							<p className="text-aftertitle subtitle">
								A manga enthusiast! with over 12 thousand
								chapters read. Currently managing a Discord
								community server centered around Genshin Impact
								while taking freelance works related to by
								expertise.
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
