import { NextPage } from "next";

import { HomeIntroduction } from "../components/pages/index/HomeIntroduction";

import { Wrapper } from "../components/Wrapper";

export const Index: NextPage = () => {
    return (
        <Wrapper>
            <div className="index">
                <hr />
                <HomeIntroduction />
                <hr />
            </div>
        </Wrapper>
    );
};

export default Index;
