// import { React } from 'https://deno.land/x/pagic/mod.ts';

export default {
    srcDir: ".",
    exclude: ["LICENSE"],
    root: "/site/",

    theme: "docs",
    plugins: ["sidebar", "prev_next", "gitalk", "ga"],
    title: "Pagic template docs",
    description: "Use this template to create a Pagic site with the docs theme",
    // To use jsx syntax, please rename this file to pagic.config.tsx
    // head: <>
    //   <link rel="icon" type="image/png" href="/favicon.png" />
    //   <script src="/assets/custom.js" />
    // </>,
    nav: [
        {
            text: "Docs",
            link: "/site/introduction/index.html",
        },
        {
            text: "About",
            link: "/site/about/index.html",
            align: "right",
        },
    ],
    github: "https://github.com/sunlin92/site",
    sidebar: {
        "/": [
            "introduction/README.md",
            {
                text: "Starlette",
                children: [
                    "starlette/index.md",
                    {
                        text: "applications",
                        link: "starlette/applications.md",
                    },
                    {
                        text: "authentication",
                        link: "starlette/authentication.md",
                    },
                    {
                        text: "background",
                        link: "starlette/background.md",
                    },
                    {
                        text: "concurrency",
                        link: "starlette/concurrency.md",
                    },
                    {
                        text: "config",
                        link: "starlette/config.md",
                    },
                    {
                        text: "convertors",
                        link: "starlette/convertors.md",
                    },
                    {
                        text: "datastructures",
                        link: "starlette/datastructures.md",
                    },
                    {
                        text: "endpoints",
                        link: "starlette/endpoints.md",
                    },
                    {
                        text: "exceptions",
                        link: "starlette/exceptions.md",
                    },
                    {
                        text: "formparsers",
                        link: "starlette/formparsers.md",
                    },
                    {
                        text: "graphql",
                        link: "starlette/graphql.md",
                    },
                    {
                        text: "middleware",
                        link: "starlette/middleware.md",
                    },
                    {
                        text: "requests",
                        link: "starlette/requests.md",
                    },
                    {
                        text: "responses",
                        link: "starlette/responses.md",
                    },
                    {
                        text: "routing",
                        link: "starlette/routing.md",
                    },
                    {
                        text: "schemas",
                        link: "starlette/schemas.md",
                    },
                    {
                        text: "staticfiles",
                        link: "starlette/staticfiles.md",
                    },
                    {
                        text: "status",
                        link: "starlette/status.md",
                    },
                    {
                        text: "templating",
                        link: "starlette/templating.md",
                    },
                    {
                        text: "testclient",
                        link: "starlette/testclient.md",
                    },
                    {
                        text: "types",
                        link: "starlette/types.md",
                    },
                    {
                        text: "websockets",
                        link: "starlette/websockets.md",
                    },
                ],
            },
            {
                link: "test_pages/README.md",
                children: [
                    "test_pages/markdown_test.md",
                    "test_pages/front_matter.md",
                    "test_pages/react_hooks_test.tsx",
                ],
            },
        ],
    },
    tools: {
        editOnGitHub: true,
        backToTop: true,
    },
    gitalk: {
        clientID: "692a6b422e67b368cc70",
        clientSecret: "f80785fb814bc4a5d391b4dbbd02ae3dfbb6b853",
        repo: "site",
        owner: "sunlin92",
        admin: ["sunlin92"],
        pagerDirection: "last",
        proxy:
        "https://cors-anywhere.azm.workers.dev/https://github.com/login/oauth/access_token",
    },
    ga: {
        id: "G-63JET49G8Z",
    },
    port: 8000,
};
