import { NextPage } from "next";

import { MainContent } from "../components/pages/about/MainContent";

import { Wrapper } from "../components/Wrapper";

export const About: NextPage = () => {
    return (
        <Wrapper>
            <div className="about">
                <MainContent />
            </div>
        </Wrapper>
    );
};

export default About;
