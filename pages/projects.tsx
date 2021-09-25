import type { NextPage } from "next";

import { Hero } from "../components/Hero";

import ProjectsCard from "../components/Projects/ProjectsCard";
import { CommissionCard } from "../components/Projects/commission";
import { commission, projects } from "../config/projects";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const initializeProjects = projects.map((p) => (
	<ProjectsCard key={p.name} name={p.name} link={p.link} slug={p.slug} />
));

const initializeCommissions = commission.map((p) => (
	<CommissionCard
		key={p.name}
		name={p.name}
		domain={p.domain}
		link={p.link}
		image={p.image}
	/>
));

const Projects: NextPage = () => {
	return (
		<Hero>
			<div className="projects-wrapper">
				<div className="container">
					<div className="projects">
						<h1 className="pretitle">Projects.</h1>
						<div className="columns is-multiline">
							{initializeProjects}
						</div>
					</div>
					<div className="commissions">
						<h1 className="pretitle">Commissions.</h1>
						<div className="columns is-multiline">
							{initializeCommissions}
						</div>
					</div>
				</div>
			</div>
		</Hero>
	);
};

export async function getStaticProps({ locale }: { locale: string }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ["common", "index"])),
		},
	};
}

export default Projects;
