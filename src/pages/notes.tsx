import { NextPage } from "next";
import Navbar from "../components/Navbar";
import Main from "../components/Main";

export const Notes: NextPage = () => {
    return (
        <>
            <Navbar />
            <Main title="notes">
                <h2 className="title">about the site</h2>
                <ul>
                    <li>
                        built with <a href="https://nextjs.org/">Next.js</a>, a react framework and{" "}
                        <a href="https://bulma.io/">Bulma</a>, a css framework.
                    </li>
                    <li>
                        fonts: <a href="https://fonts.google.com/specimen/Be+Vietnam+Pro">Be Vietnam Pro</a> and{" "}
                        <a href="https://fonts.google.com/specimen/Space+Mono">Space Mono</a>.
                    </li>
                    <li>
                        hosted on <a href="https://vercel.com/">Vercel</a>.
                    </li>
                </ul>
            </Main>
        </>
    );
};

export default Notes;
