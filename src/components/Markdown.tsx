import { FunctionComponent } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface IProps {
    content: string;
}

export const Markdown: FunctionComponent<IProps> = ({ content }) => {
    return (
        <div className="markdown-body">
            <ReactMarkdown
                components={{
                    h1: ({ children }) => {
                        return <h1 className="title">{children}</h1>;
                    },
                    h2: ({ children }) => {
                        return <h2 className="title is-4">{children}</h2>;
                    },

                    /* eslint-disable */
                    p: ({ children }) => {
                        return <p className="subtitle">{children}</p>;
                    },
                }}
                remarkPlugins={[remarkGfm]}
                children={content}
            />
        </div>
    );
};

export default Markdown;
