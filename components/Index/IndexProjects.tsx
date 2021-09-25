import React from "react";
import { withTranslation } from "next-i18next";
import type { TFunction } from "react-i18next";
import Image from "next/image";
import Link from "next/link";

import id2storeImage from "../../public/projects/id2store.jpg";
import dewataImage from "../../public/projects/DewataSolusiTeknologi.jpg";
import { GITHUB_LINK } from "../../config/links";

interface IProps {
	t: TFunction;
}
interface IState {}

class IndexProjects extends React.Component<IProps, IState> {
	render() {
		return (
			<div className="index-projects">
				<div className="columns">
					<div className="column">
						<div className="columns">
							<div className="column is-5">
								<div
									className="
										projects-heading
										has-text-centered-mobile
									"
								>
									<h2 className="pretitle subtitle">
										{this.props.t(
											"index-projects-pretitle"
										)}
									</h2>
									<h1 className="title">
										{this.props.t("index-projects-title")}
									</h1>
									<p className="aftertitle subtitle">
										{this.props.t(
											"index-projects-aftertitle"
										)}
									</p>
									<a
										href={GITHUB_LINK}
										className="call-to-action call-to-action-regular"
									>
										GitHub
									</a>
									<Link href="/projects">
										<a className="call-to-action call-to-action-regular">
											{this.props.t(
												"index-projects-call-to-action"
											)}
										</a>
									</Link>
								</div>
							</div>
							<div
								className="
									services-detail
									columns
									is-multiline is-variable is-0-desktop
								"
							>
								<div className="column is-half">
									<div className="card first">
										<div className="card-image">
											<figure className="image">
												<Image
													className="projects-image"
													src={id2storeImage}
													alt="id2store.com"
													width={450}
													height={450}
													blurDataURL=""
												/>
											</figure>
										</div>
										<div className="card-content is-overlay">
											<div className="content">
												<h1 className="card-title title">
													id2store
												</h1>
												<p
													className="
														card-subtitle
														subtitle
													"
												>
													id2store.com
												</p>
											</div>
										</div>
									</div>
								</div>
								<div className="column is-half">
									<div className="card second">
										<div className="card-image">
											<figure className="image">
												<Image
													className="projects-image"
													src={dewataImage}
													alt="id2store.com"
													width={450}
													height={450}
													blurDataURL=""
												/>
											</figure>
										</div>
										<div className="card-content is-overlay">
											<div className="content">
												<h1 className="card-title title">
													PT. Dewata Solusi Tehnologi
												</h1>
												<p
													className="
														card-subtitle
														subtitle
													"
												>
													dewata.net.id
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default withTranslation("index")(IndexProjects);
