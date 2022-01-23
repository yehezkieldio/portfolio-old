import { NextPage } from "next";

import { HeaderIntroduction } from "../components/pages/index/HeaderIntroduction";
import { FeaturedProjects } from "../components/pages/index/FeaturedProjects";

import { Wrapper } from "../components/Wrapper";

export const Index: NextPage = () => {
    return (
        <Wrapper>
            <div className="index">
                <HeaderIntroduction />
                <hr />
                <FeaturedProjects />
            </div>
        </Wrapper>
    );
};

export default Index;
