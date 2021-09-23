import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Hero } from "../components/Hero";
import { IndexHeading } from "../components/IndexHeading";
import { IndexAboutMe } from "../components/IndexAboutMe";

const Index: NextPage = () => {
	const router = useRouter();
	const { t } = useTranslation("common");
	return (
		<Hero>
			<div className="index-wrapper">
				<div className="container">
					<IndexHeading />
					<IndexAboutMe />
				</div>
			</div>
		</Hero>
	);
};

export const getStaticProps = async ({ locale }: { locale: string }) => {
	return {
		props: {
			...(await serverSideTranslations(locale, ["common"])),
		},
	};
};

export default Index;
