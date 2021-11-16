import type { NextPage } from "next";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

import Default from "../components/layouts/Default";
import Section from "../components/Section";
import Markdown from "../components/Markdown";

interface IProps {
    indexMarkdown: string;
}

export const Index: NextPage<IProps> = ({ indexMarkdown }) => {
    return (
        <Default>
            <Section>
                <Markdown content={indexMarkdown} />
            </Section>
        </Default>
    );
};

export async function getStaticProps() {
    const contents = path.join(process.cwd(), "contents");

    const content = fs.readFileSync(`${contents}/index/Index.md`).toString();
    const data = matter(content).content;

    return {
        props: {
            indexMarkdown: data,
        },
    };
}

export default Index;
