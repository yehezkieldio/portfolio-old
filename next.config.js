/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    swcMinify: true,
    async redirects() {
        return [
            {
                source: "/schoolwork",
                destination: "https://schoolwork.yehezkieldio.xyz",
                permanent: true,
            },
        ];
    },
};
