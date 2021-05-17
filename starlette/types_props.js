import projectConfig from '/site/pagic.config.js';
import Ga from '/site/_ga.js';
import Gitalk from '/site/_gitalk.js';
export default {
    'prev': {
        "text": "testclient",
        "link": "starlette/testclient.html"
    },
    'next': {
        "text": "websockets",
        "link": "starlette/websockets.html"
    },
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "starlette/types.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "starlette/types.html",
    'title': undefined,
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: ''
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement(Ga, { id: "G-63JET49G8Z" }),
        React.createElement(React.Fragment, { key: ".1" },
            React.createElement("link", { crossOrigin: "anonymous", href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css", integrity: "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X", rel: "stylesheet" }))),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/site/index.js", type: "module" })),
    'contentTitle': undefined,
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: ''
        } }),
    'toc': null,
    'author': "sunlin92",
    'contributors': [
        "sunlin92"
    ],
    'date': "2021-05-17T09:20:54.000Z",
    'updated': null,
    'excerpt': "",
    'cover': undefined,
    'sidebar': [
        {
            "text": "Introduction",
            "link": "introduction/index.html",
            "pagePath": "introduction/README.md"
        },
        {
            "text": "Starlette",
            "children": [
                {
                    "text": "applications",
                    "link": "starlette/applications.html",
                    "pagePath": "starlette/applications.md"
                },
                {
                    "text": "authentication",
                    "link": "starlette/authentication.html",
                    "pagePath": "starlette/authentication.md"
                },
                {
                    "text": "background",
                    "link": "starlette/background.html",
                    "pagePath": "starlette/background.md"
                },
                {
                    "text": "concurrency",
                    "link": "starlette/concurrency.html",
                    "pagePath": "starlette/concurrency.md"
                },
                {
                    "text": "config",
                    "link": "starlette/config.html",
                    "pagePath": "starlette/config.md"
                },
                {
                    "text": "convertors",
                    "link": "starlette/convertors.html",
                    "pagePath": "starlette/convertors.md"
                },
                {
                    "text": "datastructures",
                    "link": "starlette/datastructures.html",
                    "pagePath": "starlette/datastructures.md"
                },
                {
                    "text": "endpoints",
                    "link": "starlette/endpoints.html",
                    "pagePath": "starlette/endpoints.md"
                },
                {
                    "text": "exceptions",
                    "link": "starlette/exceptions.html",
                    "pagePath": "starlette/exceptions.md"
                },
                {
                    "text": "formparsers",
                    "link": "starlette/formparsers.html",
                    "pagePath": "starlette/formparsers.md"
                },
                {
                    "text": "graphql",
                    "link": "starlette/graphql.html",
                    "pagePath": "starlette/graphql.md"
                },
                {
                    "text": "middleware",
                    "link": "starlette/middleware.md"
                },
                {
                    "text": "requests",
                    "link": "starlette/requests.html",
                    "pagePath": "starlette/requests.md"
                },
                {
                    "text": "responses",
                    "link": "starlette/responses.html",
                    "pagePath": "starlette/responses.md"
                },
                {
                    "text": "routing",
                    "link": "starlette/routing.html",
                    "pagePath": "starlette/routing.md"
                },
                {
                    "text": "schemas",
                    "link": "starlette/schemas.html",
                    "pagePath": "starlette/schemas.md"
                },
                {
                    "text": "staticfiles",
                    "link": "starlette/staticfiles.html",
                    "pagePath": "starlette/staticfiles.md"
                },
                {
                    "text": "status",
                    "link": "starlette/status.html",
                    "pagePath": "starlette/status.md"
                },
                {
                    "text": "templating",
                    "link": "starlette/templating.html",
                    "pagePath": "starlette/templating.md"
                },
                {
                    "text": "testclient",
                    "link": "starlette/testclient.html",
                    "pagePath": "starlette/testclient.md"
                },
                {
                    "text": "types",
                    "link": "starlette/types.html",
                    "pagePath": "starlette/types.md"
                },
                {
                    "text": "websockets",
                    "link": "starlette/websockets.html",
                    "pagePath": "starlette/websockets.md"
                }
            ]
        },
        {
            "link": "test_pages/index.html",
            "children": [
                {
                    "text": "Markdown test",
                    "link": "test_pages/markdown_test.html",
                    "pagePath": "test_pages/markdown_test.md"
                },
                {
                    "text": "Front matter test",
                    "link": "test_pages/front_matter_test.html",
                    "pagePath": "test_pages/front_matter.md"
                },
                {
                    "text": "React hooks test",
                    "link": "test_pages/react_hooks_test.html",
                    "pagePath": "test_pages/react_hooks_test.tsx"
                }
            ],
            "pagePath": "test_pages/README.md",
            "text": "Test pages"
        }
    ],
    'gitalk': React.createElement(Gitalk, { admin: [
            'sunlin92'
        ], clientID: "692a6b422e67b368cc70", clientSecret: "f80785fb814bc4a5d391b4dbbd02ae3dfbb6b853", id: "starlette/types.html", owner: "sunlin92", pagerDirection: "last", proxy: "https://cors-anywhere.azm.workers.dev/https://github.com/login/oauth/access_token", repo: "site", title: undefined })
};
