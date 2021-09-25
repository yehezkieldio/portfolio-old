import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Hero } from "../components/Hero";
import IndexHeading from "../components/Index/IndexHeading";
import IndexAboutMe from "../components/Index/IndexAboutMe";
import IndexProjects from "../components/Index/IndexProjects";
import IndexTechnologies from "../components/Index/IndexTechnologies";

const Index: NextPage = () => {
	return (
		<Hero>
			<div className="index-wrapper">
				<div className="container">
					<IndexHeading />
					<IndexAboutMe />
					<IndexProjects />
					<IndexTechnologies />
				</div>
			</div>
		</Hero>
	);
};

export const getStaticProps = async ({ locale }: { locale: string }) => {
	return {
		props: {
			...(await serverSideTranslations(locale, ["common", "index"])),
		},
	};
};

export default Index;
