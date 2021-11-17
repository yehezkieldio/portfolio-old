import { Bot, Layout, FileCode } from "lucide-react";
import Link from "next/link";

import { ProjectsInterface } from "../interfaces/Projects";

interface IProps {
    display: string;
    projects: ProjectsInterface[];
}

export const List = (props: IProps) => {
    return (
        <div className="list">
            <h1 className="title">{props.display}</h1>
            <div className="columns is-multiline is-desktop list-item">
                {props.projects.map((item: ProjectsInterface) => {
                    return (
                        <div className="column is-5" key={item.name}>
                            {(() => {
                                switch (item.icon) {
                                    case "bot":
                                        return (
                                            <span className="is-icon">
                                                <Bot size={28} />
                                            </span>
                                        );
                                    case "web":
                                        return (
                                            <span className="is-icon">
                                                <Layout size={28} />
                                            </span>
                                        );
                                    default:
                                        return (
                                            <span className="is-icon">
                                                <FileCode size={28} />
                                            </span>
                                        );
                                }
                            })()}
                            <h2 className="title is-4">
                                <Link href={item.link}>
                                    <a>{item.name}</a>
                                </Link>
                            </h2>
                            <p className="subtitle">{item.desc}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default List;
