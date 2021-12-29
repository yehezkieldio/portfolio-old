import { ReactNode } from "react";

interface IProps {
    children: ReactNode;
}

export const Section = (props: IProps) => {
    return (
        <section className="section">
            <div className="container is-max-desktop">
                <div className="columns">
                    <div className="column">
                        <main className="main">{props.children}</main>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section;
