import id2storeImage from "../public/projects/DewataSolusiTeknologi.jpg";
import dewataImage from "../public/projects/DewataSolusiTeknologi.jpg";

export interface IGitHubProjectsProps {
	name: string;
	link: string;
	slug: string;
}

export const projects: IGitHubProjectsProps[] = [
	{
		name: "Alaia",
		link: "https://github.com/TheRealKizu/Alaia",
		slug: "TheRealKizu/Alaia",
	},
	{
		name: "ProjectileHP",
		link: "https://github.com/LichKing112/ProjectileHP",
		slug: "LichKing112/ProjectileHP",
	},
];

export interface ICommissionProps {
	name: string;
	link: string;
	domain: string;
	image: StaticImageData | undefined;
}

export const commission: ICommissionProps[] = [
	{
		name: "id2store",
		link: "https://id2store.com/",
		domain: "id2store.com",
		image: id2storeImage,
	},
	{
		name: "PT. Dewata Solusi Tehnologi",
		link: "https://dewata.net.id",
		domain: "dewata.net.id",
		image: dewataImage,
	},
];
