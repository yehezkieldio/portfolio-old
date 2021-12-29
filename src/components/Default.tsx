import { ReactNode } from "react";
import Navbar from "./pieces/Navbar";
import Socials from "./pieces/Socials";

interface IProps {
    children: ReactNode;
}

export const Default = (props: IProps) => {
    return (
        <>
            <Socials />
            <div className="hero">
                <div className="hero-head">
                    <Navbar />
                </div>
                <div className="hero-body">{props.children}</div>
            </div>
        </>
    );
};

export default Default;
