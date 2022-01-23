import React from "react";

interface MainContentStates {}

interface MainContentProps {}

export class MainContent extends React.Component<MainContentProps, MainContentStates> {
    constructor(props: MainContentProps) {
        super(props);
    }

    render() {
        return (
            <main>
                <h1 className="title">About</h1>
                <p className="subtitle">
                    I'm Yehezkiel Dio, an Indonesian-based web developer with over two years of experience. I specialize
                    in full-stack development and interface design.
                </p>
                <p className="subtitle">
                    Currently a second-grade student of a vocational high school majoring in software engineering. I
                    have a keen interest in web development, javascript ecosystem in particular.
                </p>
                <p className="subtitle">
                    Follow my Instagram for occasional insights into my life. If you have any inquiries of sorts, feel
                    free to contact me through Discord or by sending me a mail!
                </p>
            </main>
        );
    }
}
