export default {
  presets: [
    [
      "@babel/preset-env",
      {
        modules: "commonjs",
        targets: "last 5 versions",
        useBuiltIns: false,
      },
    ],
    "@babel/react",
  ],
  plugins: ["@babel/plugin-transform-runtime"],
  overrides: [
    {
      test: ["./client/**/*.ts"],
      presets: [
        "@babel/preset-typescript",
        [
          "@babel/preset-env",
          {
            targets: {
              node: "current",
            },
          },
        ],
        "@babel/preset-react",
      ],
    },
  ],
};
