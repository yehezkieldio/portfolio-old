import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Hero } from "../components/Hero";

const Index: NextPage = () => {
	return (
		<Hero>
			<h1 className="title">Hello, world!</h1>
		</Hero>
	);
};

export const getStaticProps = async ({ locale }: { locale: string }) => {
	return {
		props: {
			...(await serverSideTranslations(locale, ["common", "footer"])),
		},
	};
};

export default Index;
