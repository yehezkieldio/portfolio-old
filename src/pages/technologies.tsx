import { NextPage } from "next";

import { Wrapper } from "../components/Wrapper";

export const Technologies: NextPage = () => {
    return (
        <Wrapper>
            <div className="technologies">
                <h1 className="title">Technologies</h1>
                <p className="subtitle">Products and technologies I use on daily basis.</p>
                <hr />
            </div>
        </Wrapper>
    );
};

export default Technologies;
