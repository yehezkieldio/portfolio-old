import type { NextPage } from "next";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

import Default from "../components/layouts/Default";
import Section from "../components/Section";
import List from "../components/List";

import {
    ProjectsInterface,
    CommissionsInterface,
} from "../interfaces/Projects";

interface IProps {
    projects: ProjectsInterface[];
    commissions: CommissionsInterface[];
}

export const Projects: NextPage<IProps> = ({ projects, commissions }) => {
    return (
        <Default>
            <Section>
                <List display="Projects" projects={projects} />
                <List display="Commissions" projects={commissions} />
            </Section>
        </Default>
    );
};

export async function getStaticProps() {
    const contents = path.join(process.cwd(), "contents");

    const content = fs
        .readFileSync(`${contents}/projects/Projects.md`)
        .toString();
    const dataProjects = matter(content).data.projects;
    const dataCommissions = matter(content).data.commissions;

    return {
        props: {
            projects: dataProjects,
            commissions: dataCommissions,
        },
    };
}

export default Projects;
