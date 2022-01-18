module.exports = {
  env: {
    browser: true
  },
  globals: {
    Mousetrap: "readonly"
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname
  },
  plugins: [
    "@typescript-eslint",
    "jsx-ally"
  ],
  extends: [
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:react/recommended",
    "plugin:import/recommended",
    "prettier",
    "prettier/prettier"
  ],
  settings: {
    react: {
      version: "detect"
    }
  },
  rules: {
    "@typescript-eslint/no-explicit-any": 2,
    "@typescript-eslint/naming-convention": 
    [
      "error",
      {
        selector: "interface",
        format: ["PascalCase"],
        custom: {
          regex: "^I[A-Z]",
          match: true
        }
      }
    ],
    "lines-between-class-members": "off",
    "@typescript-eslint/lines-between-class-members": "off",
    "import/extensions:": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
    "import/named": "off",
    "import/namespace": "off",
    "import/no-unresolved": "off",
    "react/display-name": "off",
    "react/prop-types": "off",
    "react/style-prop-object": ["error", {
      "allow": ["FormattedNumber"]
    }],
    "spaced-comment": ["error", "always", {
        "markers": ["/"]
    }],
    "prefer-destructuring": ["error", {"object": true, "array": false}],
    "@typescript-eslint/no-use-before-define": ["error", { "functions": false, "classes": true }],
    "no-nested-ternary": "off",
    "react/react-in-jsx-scope": "off"
  }
};
// NOTE: JSON below because the linter was freaking out VSCode that the project directory changed
// {
//     "env": {
//       "browser": true
//     },
//     "globals": {
//       "Mousetrap": "readonly"
//     },
//     "parser": "@typescript-eslint/parser",
//     "parserOptions": {
//       "project": "./tsconfig.json"
//     },
//     "plugins": [
//       "@typescript-eslint",
//       "jsx-a11y"
//     ],
//     "extends": [
//         "airbnb-typescript",
//         "airbnb/hooks",
//         "plugin:react/recommended",
//         "plugin:import/recommended",
//         "prettier",
//         "prettier/prettier"
//     ],
//     "settings": {
//       "react": {
//         "version": "detect"
//       }
//     },
//     "rules": {
//         "@typescript-eslint/no-explicit-any": 2,
//         "@typescript-eslint/naming-convention": [
//           "error",
//           {
//           "selector": "interface",
//           "format": ["PascalCase"],
//           "custom": {
//             "regex": "^I[A-Z]",
//             "match": true
//            }
//           }
//         ],
//         "lines-between-class-members": "off",
//         "@typescript-eslint/lines-between-class-members": "off",
//         "import/extensions": [
//           "error",
//           "ignorePackages",
//           {
//             "js": "never",
//             "jsx": "never",
//             "ts": "never",
//             "tsx": "never"
//           }
//         ],
//         "import/named": "off",
//         "import/namespace": "off",
//         "import/no-unresolved": "off",
//         "react/display-name": "off",
//         "react/prop-types": "off",
//         "react/style-prop-object": ["error", {
//           "allow": ["FormattedNumber"]
//         }],
//         "spaced-comment": ["error", "always", {
//             "markers": ["/"]
//         }],
//         "prefer-destructuring": ["error", {"object": true, "array": false}],
//         "@typescript-eslint/no-use-before-define": ["error", { "functions": false, "classes": true }],
//         "no-nested-ternary": "off",
//         "react/react-in-jsx-scope": "off"
//     }
//   }