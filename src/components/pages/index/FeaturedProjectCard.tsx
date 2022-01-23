import React from "react";

interface FeaturedProjectCardStates {}

interface FeaturedProjectCardProps {
    title: string;
    subtitle: string;
    link: string;
}

export class FeaturedProjectCard extends React.Component<FeaturedProjectCardProps, FeaturedProjectCardStates> {
    constructor(props: FeaturedProjectCardProps) {
        super(props);
    }

    render() {
        return (
            <div className="column">
                <article className="project columns">
                    <div className="project-media column is-1 ">
                        <figure className="image is-64x64">
                            <img src={this.props.link} alt={this.props.title} />
                        </figure>
                    </div>
                    <div className="project-information column">
                        <h2 className="title">{this.props.title}</h2>
                        <p className="subtitle">{this.props.subtitle}</p>
                    </div>
                </article>
            </div>
        );
    }
}
