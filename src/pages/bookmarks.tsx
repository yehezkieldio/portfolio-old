import type { NextPage } from "next";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

import Default from "../components/layouts/Default";
import Section from "../components/Section";
import Markdown from "../components/Markdown";

interface IProps {
    bookmarksMarkdown: string;
}

export const Index: NextPage<IProps> = ({ bookmarksMarkdown }) => {
    return (
        <Default>
            <Section>
                <div className="content">
                    <Markdown content={bookmarksMarkdown} />
                </div>
            </Section>
        </Default>
    );
};

export async function getStaticProps() {
    const contents = path.join(process.cwd(), "contents");

    const content = fs
        .readFileSync(`${contents}/bookmarks/Bookmarks.md`)
        .toString();
    const data = matter(content).content;

    return {
        props: {
            bookmarksMarkdown: data,
        },
    };
}

export default Index;
