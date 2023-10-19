module.exports = function (api) {
    api.cache(true);
    return {
        presets: ["babel-preset-expo"],
        plugins: [
            [
                "module-resolver",
                {
                    root: ["./src"],
                    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
                    alias: {
                        "@": "./src",
                        "@assets": "./src/assets",
                        "@components": "./src/components",
                        "@config": "./src/config",
                        "@constants": "./src/constants",
                        "@hooks": "./src/hooks",
                        "@routes": "./src/routes",
                        "@screens": "./src/screens",
                        "@services": "./src/services",
                        "@styles": "./src/styles",
                        "@utils": "./src/utils",
                    },
                },
            ],
        ],
    };
};
