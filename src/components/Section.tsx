import { ReactNode } from "react";

interface IProps {
    children: ReactNode;
}

export const Section = (props: IProps) => {
    return (
        <section className="section">
            <div className="container is-max-desktop">{props.children}</div>
        </section>
    );
};

export default Section;
