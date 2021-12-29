// Reference: https://github.com/janleigh/portfolio/blob/master/src/components/ProjectCard.tsx

import { Star } from "phosphor-react";
import { useEffect, useState } from "react";
import Link from "next/link";

const getRepository = (username: string, repository: string): any => {
    const [response, setResponse] = useState({});
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(`https://api.github.com/repos/${username}/${repository}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(async (response) => {
                setResponse(await response.json());
                setLoading(false);
            })
            .catch(() => {
                setError(true);
                setLoading(false);
            });
    }, [repository]);

    return [response, error, loading];
};

export const ProjectCard = ({ username, repository }: { username: string; repository: string }) => {
    const [data, _hasError, loading] = getRepository(username, repository);

    if (!data.name) data.name = "I'm a placeholder!";
    if (!data.description) data.description = "You are seeing this cause you are rate limited.";
    if (!data.html_url) data.html_url = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    if (!data.language) data.language = "GitHub";
    if (!data.stargazers_count) data.stargazers_count = 112;

    if (loading)
        return (
            <div className="card">
                <div className="card-content">
                    <div className="repository">
                        <p className="subtitle">Loading...</p>
                    </div>
                </div>
            </div>
        );

    return (
        <div className="card">
            <div className="card-content">
                <div className="repository">
                    <h1 className="title">
                        <Link href={data.html_url}>
                            <a>
                                @{username}/{data.name}
                            </a>
                        </Link>
                    </h1>
                    <p className="subtitle">{data.description}</p>
                    <p className="subtitle">
                        {data.language} <br />
                        <Star size={16} /> <span>{data.stargazers_count} Stars</span>
                    </p>
                </div>
            </div>
        </div>
    );
};
