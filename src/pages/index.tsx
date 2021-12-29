import type { NextPage } from "next";

import { Header } from "../components/segments/Header";
import { AboutMe } from "../components/segments/AboutMe";
import { TechnologyStack } from "../components/segments/TechnologyStack";
import { Projects } from "../components/segments/Projects";
import { Default } from "../components/Default";

export const Index: NextPage = () => {
    return (
        <Default>
            <Header />
            <AboutMe />
            <TechnologyStack />
            <Projects />
        </Default>
    );
};

export default Index;
