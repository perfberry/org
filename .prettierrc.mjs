/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
const config = {
  printWidth: 100,
  singleQuote: false,
  semi: false,
  trailingComma: "es5",
  plugins: ["@ianvs/prettier-plugin-sort-imports"],
  importOrder: [
    ".*styles.css$",
    "",
    "dayjs",
    "^react$",
    "<BUILTIN_MODULES>",
    "<THIRD_PARTY_MODULES>",
    "^@mantine/(.*)$",
    "^@mantinex/(.*)$",
    "^@mantine-tests/(.*)$",
    "^@docs/(.*)$",
    "^@/.*$",
    "^../(?!.*.css$).*$",
    "^./(?!.*.css$).*$",
    "\\.css$",
  ],
  overrides: [
    {
      files: "*.mdx",
      options: {
        printWidth: 80,
      },
    },
  ],
};

export default config;
