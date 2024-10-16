import js from "@eslint/js";

export default [
    js.configs.recommended,
    {
        rules: {
            "no-unused-vars": "warn",
            "no-trailing-spaces": "warn",
            "no-unused-vars": "error",
        }
    }
];