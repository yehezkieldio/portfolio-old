import React from "react";

interface MainProps {
    title: string;
    children: React.ReactNode;
}

export const Main = (props: React.PropsWithChildren<MainProps>) => {
    return (
        <main className="page-main">
            <div className="main-container">
                <header className="main-header">
                    <h1 className="title">{props.title}</h1>
                </header>
                <div className="main-content">{props.children}</div>
            </div>
        </main>
    );
};

export default Main;
