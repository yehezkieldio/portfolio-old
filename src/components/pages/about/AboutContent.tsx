import React from "react";

interface AboutContentStates {}

interface AboutContentProps {}

export class AboutContent extends React.Component<AboutContentProps, AboutContentStates> {
    constructor(props: AboutContentProps) {
        super(props);
    }

    render() {
        return (
            <div className="about-me">
                <div className="about-title page-title">
                    <h1 className="title">About</h1>
                </div>

                <div className="about-content">
                    <p className="subtitle">
                        I'm Yehezkiel Dio, an Indonesian-based web developer with over two years of experience. I
                        specialize in full-stack development and interface design.
                    </p>
                    <p className="subtitle">
                        Currently a second-grade student of a vocational high school majoring in software engineering. I
                        have a keen interest in web development, javascript ecosystem in particular.
                    </p>
                    <p className="subtitle">
                        Follow my Instagram for occasional insights into my life. If you have any inquiries of sorts,
                        feel free to contact me through Discord or by sending me a mail!
                    </p>
                </div>
            </div>
        );
    }
}
