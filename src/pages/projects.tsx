import { NextPage } from "next";
import Navbar from "../components/Navbar";
import Main from "../components/Main";

export const Projects: NextPage = () => {
    return (
        <>
            <Navbar />
            <Main title="projects">
                <p className="subtitle">No available projects to showcase.</p>
            </Main>
        </>
    );
};

export default Projects;
