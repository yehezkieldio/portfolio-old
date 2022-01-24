import React, { ReactNode } from "react";

import { Navbar } from "./Navbar";

interface WrapperStates {}

interface WrapperProps {
    children: ReactNode;
}

export class Wrapper extends React.Component<WrapperProps, WrapperStates> {
    constructor(props: WrapperProps) {
        super(props);
    }

    render() {
        return (
            <>
                <div className="wrapper">
                    {/* <Navbar /> */}
                    <div className="container is-max-desktop">{this.props.children}</div>
                </div>
            </>
        );
    }
}
