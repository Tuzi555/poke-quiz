/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
    printWidth: 80,
    trailingComma: "es5",
    tabWidth: 4,
    useTabs: false,
    semi: true,
    plugins: ["prettier-plugin-tailwindcss"],
};

export default config;
