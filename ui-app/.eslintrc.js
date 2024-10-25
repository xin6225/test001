const path = require('path');

module.exports = {
    "root": true,
    "ignorePatterns": [
        "docs"
    ],
    "plugins": ["deprecation"],
    "overrides": [
        {
            "files": [
                "*.ts"
            ],
            "parserOptions": {
                "project": [
                    path.join(__dirname, 'tsconfig.json'),
                ],
                "createDefaultProgram": false
            },
            "extends": [
                "plugin:@typescript-eslint/recommended",
                "plugin:@angular-eslint/recommended",
                "plugin:@angular-eslint/template/process-inline-templates"
            ],
            "rules": {
                // Eslint rules. see https://github.com/eslint/eslint/tree/03ac8cfc773279c01a62897692160f9a883ff4f5/docs/rules
                "arrow-body-style": ["error", "as-needed"],
                "brace-style": [
                    "error",
                    "1tbs"
                ],
                "id-blacklist": "off",
                "id-match": "off",
                "max-len": [
                    "error",
                    {
                        "code": 140,
                        "ignoreTemplateLiterals": true,
                        "ignoreStrings": true
                    }
                ],
                "no-bitwise": "error",
                "no-caller": "error",
                "no-console": "error",
                "no-restricted-imports": ["error", {
                    "paths": [
                        "@angular/material/card",
                        "@angular/material/paginator",
                    ]
                }],
                "no-undef": "off",
                "no-underscore-dangle": "off",
                "no-unused-expressions": "error",
                "no-useless-escape": "error",
                "prefer-arrow/prefer-arrow-functions": [
                    "off"
                ],
                "quotes": ["error", "single"],
                "space-before-function-paren": [
                    "error",
                    {
                        "anonymous": "never",
                        "named": "never",
                        "asyncArrow": "always"
                    }
                ],
                // @Typescript-eslint rules.
                // see https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin/docs/rules
                "@typescript-eslint/consistent-type-definitions": "error",
                "@typescript-eslint/consistent-type-assertions": "off",
                "@typescript-eslint/dot-notation": "off",
                "@typescript-eslint/explicit-member-accessibility": [
                    "off",
                    {
                        "accessibility": "explicit"
                    }
                ],
                "@typescript-eslint/member-ordering": [
                    "warn",
                    {
                        "default": [
                            "static-field",
                            "instance-field",
                            "static-method",
                            "instance-method"
                        ]
                    }
                ],
                "@typescript-eslint/naming-convention": "off",
                "@typescript-eslint/no-namespace": "off",
                "@typescript-eslint/no-non-null-assertion": "off",
                "@typescript-eslint/prefer-for-of": "off",
                "@typescript-eslint/parameter-properties": "error",
                "@typescript-eslint/no-unused-vars": "off",
                "@typescript-eslint/no-explicit-any": "off",
                "@typescript-eslint/no-empty-function": "off",
                // Angular related rules.
                // see https://github.com/angular-eslint/angular-eslint/tree/master/packages/eslint-plugin/docs/rules
                "@angular-eslint/component-selector": [
                    "error",
                    {
                        "type": "element",
                        "prefix": "app",
                        "style": "kebab-case"
                    }
                ],
                "@angular-eslint/component-class-suffix": [
                    "error"
                ],
                "@angular-eslint/contextual-lifecycle": [
                    "error"
                ],
                "@angular-eslint/directive-class-suffix": [
                    "error"
                ],
                "@angular-eslint/directive-selector": [
                    "error",
                    {
                        "type": "attribute",
                        "prefix": "app",
                        "style": "camelCase"
                    }
                ],
                "@angular-eslint/no-conflicting-lifecycle": [
                    "error"
                ],
                "@angular-eslint/no-empty-lifecycle-method": "off",
                "@angular-eslint/no-host-metadata-property": [
                    "off"
                ],
                "@angular-eslint/no-input-rename": [
                    "error"
                ],
                "@angular-eslint/no-inputs-metadata-property": [
                    "error"
                ],
                "@angular-eslint/no-output-native": [
                    "error"
                ],
                "@angular-eslint/no-output-on-prefix": [
                    "error"
                ],
                "@angular-eslint/no-output-rename": [
                    "error"
                ],
                "@angular-eslint/no-outputs-metadata-property": [
                    "error"
                ],
                "@angular-eslint/use-lifecycle-interface": [
                    "error"
                ],
                "@angular-eslint/use-pipe-transform-interface": [
                    "error"
                ],
                "deprecation/deprecation": "error"
            }
        },
        {
            "files": [
                "*.html"
            ],
            "extends": [
                "plugin:@angular-eslint/template/recommended"
            ],
            "rules": {
                "@angular-eslint/template/eqeqeq": [
                    "error",
                    {
                        "allowNullOrUndefined": true
                    }
                ],
                "@angular-eslint/template/no-negated-async": "off"
            }
        }
    ]
}
