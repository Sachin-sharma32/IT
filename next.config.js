/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    webpack: (config, { isServer }) => {
        if (!isServer) {
            // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
            config.resolve.fallback = {
                fs: false,
                net: false,
                dns: false,
                child_process: false,
                tls: false,
                setImmediate: false,
            };
        }

        return config;
    },
    env: {
        SANITY_TOKEN:
            "skU3fU2TdDBukyZxKNtddPuYmboPQuIssHCSApi5VaJXwgCzdFNRErGrgZ0h96mK8py6UQkiPius9an638uuIabDtVeT9SvboNkUCSD6Yc9RaOPXpr4PgDendI5yv0q6h0gDlRNxTqz6MyEUuvgisISINMoGu8OhFQasjUNZ6ANRkRRLLCNm",
        SANITY_PROJECT_ID: "7h45ty04",
        SANITY_DATASET: "production",
    },
};

module.exports = nextConfig;
