import React from "react";

import { HeaderSocials } from "./HeaderSocials";

interface HeaderIntroductionStates {}

interface HeaderIntroductionProps {}

export class HeaderIntroduction extends React.Component<HeaderIntroductionProps, HeaderIntroductionStates> {
    constructor(props: HeaderIntroductionProps) {
        super(props);
    }

    render() {
        return (
            <header>
                <h1 className="title">Full-stack web developer.</h1>
                <p className="subtitle">
                    I'm Yehezkiel Dio, an Indonesian-based web developer with over two years of experience. I specialize
                    in full-stack development and interface design.
                </p>
                <p className="subtitle">
                    Currently, a vocational software engineering student doing open-source projects. I go by the name
                    Liz on the internet.
                </p>
                <HeaderSocials />
            </header>
        );
    }
}
