module.exports = {
  plugins: [
    'stylelint-declaration-strict-value',
    'stylelint-selector-bem-pattern',
  ],
  rules: {
    'indentation': 2,
    'number-leading-zero': 'never',
    'string-quotes': 'single',
    'selector-max-id': 0,
    'selector-list-comma-newline-after': 'always',
    'rule-empty-line-before': [
      'always',
      { ignore: ['after-comment', 'first-nested'] },
    ],
    'comment-empty-line-before': [
      'always',
      { except: ['first-nested'] },
    ],
    'block-opening-brace-space-before': 'always',
    'declaration-colon-space-after': 'always',
    'declaration-colon-space-before': 'never',
    'declaration-block-single-line-max-declarations': 1,
    'declaration-property-value-blacklist': {
      '/^border/': ['none'],
      '/^(@|--).+/': ['/^#/', '/^rgb/'],
    },
    'at-rule-empty-line-before': [
      'always',
      { ignore: ['after-comment'], except: ['first-nested', 'after-same-name'] },
    ],

    'scale-unlimited/declaration-strict-value': [[
      'background-image',
      'background',
      '/color/',
      'fill',
      'stroke',
    ], {
      ignoreKeywords: [
        'currentColor',
        'transparent',
        'inherit',
      ],
    }],
    'max-empty-lines': 1,
    'declaration-no-important': true,
    'no-duplicate-selectors': true,
    'color-named': 'never',
    'function-url-scheme-blacklist': ['/^data:/'],
    'length-zero-no-unit': true,
    'property-blacklist': [/^\./],
    'declaration-block-semicolon-newline-after': 'always',
    'no-extra-semicolons': true,
    'declaration-block-trailing-semicolon': 'always',
    'block-opening-brace-newline-after': 'always',
    'block-closing-brace-newline-before': 'always',
    'function-linear-gradient-no-nonstandard-direction': true,
    'plugin/selector-bem-pattern': {
      'componentName': '^[A-Z][a-zA-Z0-9]+$',
      'componentSelectors': '^\\.{componentName}(?:__[a-z][a-zA-Z0-9]*)?(?:--[a-z][a-zA-Z0-9]*)?$',
      'implicitComponents': true,
      'ignoreCustomProperties': /.*/,
    },
  },
};