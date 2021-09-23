import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Index: NextPage = () => {
	return (
		<div>
			<p>Hello, world!</p>
		</div>
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
