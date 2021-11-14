import { ReactNode } from "react";
import Navbar from "./Navbar";

interface IProps {
    children: ReactNode;
}

export const Section = (props: IProps) => {
    return (
        <>
            <Navbar />
            {props.children}
        </>
    );
};

export default Section;
