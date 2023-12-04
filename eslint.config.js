import flypeng from '@flypeng/eslint-config';

export default [
  ...flypeng(),
  {
    ignores: ['changelog-option.js'],
  },
];
