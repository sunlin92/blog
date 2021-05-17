import projectConfig from '/site/pagic.config.js';
import ReactHooksTest from './react_hooks_test_content.js';
import Ga from '/site/_ga.js';
import Gitalk from '/site/_gitalk.js';
export default {
    'prev': {
        "text": "Front matter test",
        "link": "test_pages/front_matter_test.html"
    },
    'next': undefined,
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "test_pages/react_hooks_test.tsx",
    'layoutPath': "_layout.tsx",
    'outputPath': "test_pages/react_hooks_test.html",
    'title': "React hooks test",
    'content': React.createElement(ReactHooksTest, { config: {
            branch: 'main',
            description: 'Use this template to create a Pagic site with the docs theme',
            exclude: [
                '**/.*',
                '**/package.json',
                '**/package-lock.json',
                '**/node_modules',
                'pagic.config.ts',
                'pagic.config.tsx',
                '**/config.gypi',
                '**/CVS',
                '**/npm-debug.log',
                'LICENSE',
                'dist'
            ],
            ga: {
                id: 'G-63JET49G8Z'
            },
            gitalk: {
                admin: [
                    'sunlin92'
                ],
                clientID: '692a6b422e67b368cc70',
                clientSecret: 'f80785fb814bc4a5d391b4dbbd02ae3dfbb6b853',
                owner: 'sunlin92',
                pagerDirection: 'last',
                proxy: 'https://cors-anywhere.azm.workers.dev/https://github.com/login/oauth/access_token',
                repo: 'site'
            },
            github: 'https://github.com/sunlin92/site',
            include: undefined,
            nav: [
                {
                    link: '/site/introduction/index.html',
                    text: 'Docs'
                },
                {
                    align: 'right',
                    link: '/site/about/index.html',
                    text: 'About'
                }
            ],
            outDir: 'dist',
            plugins: [
                'clean',
                'init',
                'md',
                'tsx',
                'script',
                'layout',
                'out',
                'sidebar',
                'prev_next',
                'gitalk',
                'ga'
            ],
            port: 8000,
            root: '/site/',
            serve: false,
            sidebar: {
                '/': [
                    'introduction/README.md',
                    {
                        children: [
                            'starlette/index.md',
                            {
                                link: 'starlette/applications.md',
                                text: 'applications'
                            },
                            {
                                link: 'starlette/authentication.md',
                                text: 'authentication'
                            },
                            {
                                link: 'starlette/background.md',
                                text: 'background'
                            },
                            {
                                link: 'starlette/concurrency.md',
                                text: 'concurrency'
                            },
                            {
                                link: 'starlette/config.md',
                                text: 'config'
                            },
                            {
                                link: 'starlette/convertors.md',
                                text: 'convertors'
                            },
                            {
                                link: 'starlette/datastructures.md',
                                text: 'datastructures'
                            },
                            {
                                link: 'starlette/endpoints.md',
                                text: 'endpoints'
                            },
                            {
                                link: 'starlette/exceptions.md',
                                text: 'exceptions'
                            },
                            {
                                link: 'starlette/formparsers.md',
                                text: 'formparsers'
                            },
                            {
                                link: 'starlette/graphql.md',
                                text: 'graphql'
                            },
                            {
                                link: 'starlette/middleware.md',
                                text: 'middleware'
                            },
                            {
                                link: 'starlette/requests.md',
                                text: 'requests'
                            },
                            {
                                link: 'starlette/responses.md',
                                text: 'responses'
                            },
                            {
                                link: 'starlette/routing.md',
                                text: 'routing'
                            },
                            {
                                link: 'starlette/schemas.md',
                                text: 'schemas'
                            },
                            {
                                link: 'starlette/staticfiles.md',
                                text: 'staticfiles'
                            },
                            {
                                link: 'starlette/status.md',
                                text: 'status'
                            },
                            {
                                link: 'starlette/templating.md',
                                text: 'templating'
                            },
                            {
                                link: 'starlette/testclient.md',
                                text: 'testclient'
                            },
                            {
                                link: 'starlette/types.md',
                                text: 'types'
                            },
                            {
                                link: 'starlette/websockets.md',
                                text: 'websockets'
                            }
                        ],
                        text: 'Starlette'
                    },
                    {
                        children: [
                            'test_pages/markdown_test.md',
                            'test_pages/front_matter.md',
                            'test_pages/react_hooks_test.tsx'
                        ],
                        link: 'test_pages/README.md'
                    }
                ]
            },
            srcDir: '.',
            theme: 'docs',
            title: 'Pagic template docs',
            tools: {
                backToTop: true,
                editOnGitHub: true
            },
            watch: false
        }, content: null, head: null, layoutPath: "_layout.tsx", outputPath: "test_pages/react_hooks_test.html", pagePath: "test_pages/react_hooks_test.tsx", script: null, title: "React hooks test" }),
    'head': React.createElement(React.Fragment, null,
        React.createElement(Ga, { id: "G-63JET49G8Z" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/site/index.js", type: "module" })),
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
        ], clientID: "692a6b422e67b368cc70", clientSecret: "f80785fb814bc4a5d391b4dbbd02ae3dfbb6b853", id: "test_pages/react_hooks_test.html", owner: "sunlin92", pagerDirection: "last", proxy: "https://cors-anywhere.azm.workers.dev/https://github.com/login/oauth/access_token", repo: "site", title: "React hooks test" })
};
