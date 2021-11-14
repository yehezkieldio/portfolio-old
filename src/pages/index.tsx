import type { NextPage } from "next";
import Link from "next/link";

import Default from "../components/layouts/Default";
import Section from "../components/Section";

import {
    ANILIST_LINK,
    GITHUB_LINK,
    DISCORD_LINK,
    INSTAGRAM_LINK,
} from "../config/links";

export const Index: NextPage = () => {
    return (
        <Default>
            <Section>
                <h1 className="title">Yehezkiel Dio</h1>
                <p className="subtitle">
                    Hey, I am Yehezkiel Dio, a{" "}
                    <span className="strikethrough">fullstack</span> web
                    developer. A vocational software engineering student. I go
                    by Liz or LichKing112 on the internet!
                </p>
                <p className="subtitle">
                    Primarily working on the javascript ecosystem such as{" "}
                    <Link href="https://nestjs.com">
                        <a>Nest.js</a>
                    </Link>{" "}
                    and{" "}
                    <Link href="https://nextjs.org">
                        <a>Next.js</a>
                    </Link>
                    . Currently looking into php development and{" "}
                    <Link href="https://laravel.com/">
                        <a>Laravel</a>
                    </Link>
                    .
                </p>
                <p className="subtitle">
                    Outside of programming, I spent most of my time reading
                    light/web novel and manga/manhwa/manhua.{" "}
                    <Link href={ANILIST_LINK}>
                        <a>AniList</a>
                    </Link>
                </p>
                <p className="subtitle">
                    Find me on{" "}
                    <Link href={GITHUB_LINK}>
                        <a>GitHub</a>
                    </Link>
                    ,{" "}
                    <Link href={INSTAGRAM_LINK}>
                        <a>Instagram</a>
                    </Link>{" "}
                    or{" "}
                    <Link href={DISCORD_LINK}>
                        <a>Discord</a>
                    </Link>
                    .
                </p>
            </Section>
        </Default>
    );
};

export default Index;
