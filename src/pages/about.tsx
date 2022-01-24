import { NextPage } from "next";

import { AboutContent } from "../components/pages/about/AboutContent";

import { Wrapper } from "../components/Wrapper";

export const About: NextPage = () => {
    return (
        <Wrapper>
            <div className="about">
                <AboutContent />
            </div>
        </Wrapper>
    );
};

export default About;
