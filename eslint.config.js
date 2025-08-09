const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");
const prettierRecommended = require("eslint-plugin-prettier/recommended");

module.exports = tseslint.config(
  {
    files: ["**/*.js"],
    extends: [prettierRecommended],
    rules: {
      "eol-last": "warn",
      semi: "warn",
      indent: ["off", 2, { SwitchCase: 1 }],
    },
  },
  {
    files: ["**/*.ts"],
    extends: [
      prettierRecommended,
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      "prettier/prettier": "warn",
      "@typescript-eslint/no-require-imports": "warn",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/consistent-indexed-object-style": "off",
      "@typescript-eslint/no-inferrable-types": "warn",
      "@typescript-eslint/prefer-for-of": "warn",
      "@angular-eslint/no-input-rename": ["off"],
      "@angular-eslint/no-async-lifecycle-method": ["warn"],
      "@angular-eslint/no-attribute-decorator": ["warn"],
      "@angular-eslint/no-conflicting-lifecycle": ["warn"],
      "@angular-eslint/no-duplicates-in-metadata-arrays": ["warn"],
      "@angular-eslint/no-lifecycle-call": ["warn"],
      "@angular-eslint/no-inputs-metadata-property": ["warn"],
      "@angular-eslint/no-output-native": ["warn"],
      "@angular-eslint/no-outputs-metadata-property": ["warn"],
      "@angular-eslint/no-empty-lifecycle-method": ["warn"],
      "@angular-eslint/no-pipe-impure": ["warn"],
      "@angular-eslint/no-queries-metadata-property": ["warn"],
      "@angular-eslint/prefer-on-push-component-change-detection": ["warn"],
      "@angular-eslint/use-injectable-provided-in": ["warn"],
      "@angular-eslint/use-lifecycle-interface": ["warn"],
      "@angular-eslint/prefer-output-readonly": ["warn"],
      "@angular-eslint/prefer-standalone": ["warn"],
      "@angular-eslint/relative-url-prefix": ["warn"],
      "@angular-eslint/sort-lifecycle-methods": ["warn"],
      "@angular-eslint/use-pipe-transform-interface": ["warn"],
      "@angular-eslint/no-output-on-prefix": ["warn"],
      "@angular-eslint/directive-selector": [
        "warn",
        {
          type: "attribute",
          prefix: "",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "warn",
        {
          type: "element",
          prefix: "",
          style: "kebab-case",
        },
      ],
      "eol-last": "warn",
      semi: "warn",
      indent: ["off", 2, { SwitchCase: 1 }],
      quotes: ["warn", "single", { avoidEscape: true }],
    },
  },
  {
    files: ["**/*.html"],
    extends: [
      prettierRecommended,
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {
      "prettier/prettier": "warn",
      "@angular-eslint/template/attributes-order": "warn",
      "@angular-eslint/template/alt-text": "warn",
      "@angular-eslint/template/banana-in-box": "warn",
      "@angular-eslint/template/click-events-have-key-events": "warn",
      "@angular-eslint/template/elements-content": "warn",
      "@angular-eslint/template/no-duplicate-attributes": "warn",
      "@angular-eslint/template/no-interpolation-in-attributes": "warn",
      "@angular-eslint/template/no-negated-async": "warn",
      "@angular-eslint/template/prefer-control-flow": "warn",
      "@angular-eslint/template/prefer-self-closing-tags": "warn",
      "@angular-eslint/template/use-track-by-function": "warn",
      "@angular-eslint/template/conditional-complexity": [
        "warn",
        { maxComplexity: 3 },
      ],
      "@angular-eslint/template/eqeqeq": [
        "warn",
        { allowNullOrUndefined: true },
      ],
      "@angular-eslint/template/no-call-expression": [
        "warn",
        {
          allowList: ["get", "hasError"],
          allowPrefix: "$",
          allowSuffix: "$",
        },
      ],
    },
  },
  {
    ignores: [
      "**/*.spec.ts",
      "dist/**",
      "node_modules/**",
      "public/**",
      "libs/**",
      ".angular/**",
    ],
  },
);
