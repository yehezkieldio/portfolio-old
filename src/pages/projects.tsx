import { NextPage } from "next";

import { Wrapper } from "../components/Wrapper";

export const Projects: NextPage = () => {
    return (
        <Wrapper>
            <div className="projects">
                <h1 className="title">Projects</h1>
                <p className="subtitle">
                    Here's a small selection of some of my recent projects, commissions, and experiences.
                </p>
                <hr />
            </div>
        </Wrapper>
    );
};

export default Projects;
