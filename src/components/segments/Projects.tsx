import { ProjectCard } from "../pieces/ProjectCard";

export const Projects = () => {
    return (
        <section className="index section">
            <div className="container is-max-desktop">
                <div className="columns">
                    <div className="column">
                        <main className="main">
                            <article className="projects" id="projects">
                                <div className="columns">
                                    <div className="column is-8">
                                        <h1 className="title">My projects so far.</h1>
                                        <div className="columns is-multiline">
                                            <div className="column is-6">
                                                <ProjectCard username="imperia-project" repository="imperia" />
                                            </div>
                                            <div className="column is-6">
                                                <ProjectCard username="LichKing112" repository="portfolio" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </main>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
