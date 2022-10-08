const { configure, presets } = require('eslint-kit');

module.exports = configure({
  presets: [
    presets.imports(),
    presets.node(),
    presets.prettier(),
    presets.typescript(),
    presets.react({
      newJSXTransform: true,
    }),
    presets.effector(),
  ],
  extend: {
    overrides: [
      {
        files: ['vite.config.ts'],
        rules: {
          'import/no-default-export': ['off'],
        },
      },
    ],
  },
});
