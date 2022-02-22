module.exports = {
    "/mf-root/**": {
        target: "http://localhost:5000",
        pathRewrite: { "^/mf-root": "" }
      },
    "/mf/satd-deployment/**": {
        target: "http://localhost:7000",
        pathRewrite: { "^/mf/satd-deployment": "" }
    },
    "/mf/satd-overview/**": {
        target: "http://localhost:7001",
        pathRewrite: { "^/mf/satd-overview": "" }
    },
    "/mf/satd-insight/**": {
        target: "http://localhost:7002",
        pathRewrite: { "^/mf/satd-insight": "" }
    }
};
