import React from "react";

import { FeaturedProjectCard } from "./FeaturedProjectCard";

interface FeaturedProjectsStates {}

interface FeaturedProjectsProps {}

export class FeaturedProjects extends React.Component<FeaturedProjectsProps, FeaturedProjectsStates> {
    constructor(props: FeaturedProjectsProps) {
        super(props);
    }

    render() {
        return (
            <section>
                <h1 className="title">Featured projects</h1>
                <p className="subtitle">A collection of some open-source projects.</p>
                <div className="projects columns">
                    <FeaturedProjectCard
                        title="imperia"
                        subtitle="☕ all-purpose discord bot, powered using the sapphire framework."
                        link="https://cdn.discordapp.com/avatars/911590809873301514/52634bdd2590f41763ed265ca3408e20.webp"
                    />
                </div>
            </section>
        );
    }
}
