module.exports = {
    extends: ['stylelint-config-recommended'],
    rules: {
        'at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: [
                    //TailwindCSS
                    'tailwind',
                    'apply',
                    'responsive',
                    'variants',
                    //CSS Extend Rule Specification
                    'extend',
                ],
            },
        ],
    },
}
