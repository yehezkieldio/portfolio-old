import React from "react";

import Image from "next/image";
import AvatarImage from "../../public/Avatar.jpg";

interface IProps {}
interface IState {}

export class IndexHeading extends React.Component<IProps, IState> {
	render() {
		return (
			<div className="index-heading">
				<div className="columns">
					<div className="column is-6">
						<div className="block">
							<p className="pretitle subtitle">
								Hey there!, I&apos;m-
							</p>
							<h1 className="title">Yehezkiel Dio.</h1>
							<p className="aftertitle subtitle">
								A web developer with great interest in web dev
								on the javascript ecosystem.
							</p>
							<a
								href=""
								className="call-to-action call-to-action-regular"
							>
								GitHub
							</a>
							<a
								href=""
								className="call-to-action call-to-action-regular"
							>
								Discord
							</a>
							<a
								href=""
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
