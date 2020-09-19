'use strict';

const path = require('path');

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      legacyDecorators: true
    }
  },
  plugins: [
    'ember'
  ],
  extends: [
    'eslint:recommended',
    'plugin:ember/recommended'
  ],
  env: {
    browser: true
  },
  rules: {
    'ember/no-arrow-function-computed-properties': ['error', { onlyThisContexts: true }]
  },
  overrides: [
    // node files
    {
      files: [
        '.eslintrc.js',
        '.template-lintrc.js',
        'ember-cli-build.js',
        'index.js',
        'testem.js',
        'blueprints/*/index.js',
        'config/**/*.js',
        'tests/dummy/config/**/*.js'
      ],
      excludedFiles: [
        'addon/**',
        'addon-test-support/**',
        'app/**',
        'tests/dummy/app/**'
      ],
      parserOptions: {
        sourceType: 'script'
      },
      env: {
        browser: false,
        node: true
      },
      plugins: ['node'],
      extends: ['plugin:node/recommended']
    },

    // vendor files
    {
      files: ['vendor/**/*.js'],
      parserOptions: {
        ecmaVersion: 5,
        sourceType: 'script'
      },
      env: {
        amd: true
      },
      globals: {
        Ember: 'readonly'
      },
      rules: Object.keys(Object.assign({},
        // eslint-disable-next-line node/no-extraneous-require
        require(path.resolve(path.dirname(require.resolve('eslint')), '../conf/eslint-recommended')).rules,
        require('eslint-plugin-ember').configs.recommended.rules
      )).reduce((rules, rule) => {
        rules[rule] = 'off';
        return rules;
      }, {})
    }
  ]
};
