Package.describe({
  name: 'ox2:docs',
  summary: 'In-app docs for ox2 components',
  version: '1.0.0',
  git: ' /* Fill me in! */ ',
  debugOnly: true
});

var S = 'server';
var C = 'client';
var CS = [C, S];

Package.onUse(function(api) {
  api.versionsFrom('1.1');
  // Core
  api.use([
    'templating', 'http'
    ]);
  // 3rd party
  api.use([
    'lauricio:less-autoprefixer@1.0.15','mquandalle:jade@0.4.1', 'mousetrap:mousetrap@1.4.6_1'
    ]);
  // Initialize docs object
  api.addFiles('lib/oo-docs-init.js', S);
  // ooButtons
    // Specification
    api.addFiles('lib/oo-buttons/versions/init.js', S);
    api.addFiles('lib/oo-buttons/versions/v1.0.0.js', S);
    // User interface
    api.addFiles('lib/oo-buttons/docs-oo-buttons.jade', C);
    api.addFiles('lib/oo-buttons/docs-oo-buttons.js', C);
    api.addFiles('lib/oo-buttons/docs-oo-buttons.less', C);
  // Collection declarations
  api.addFiles('lib/oo-docs-collections.js', CS);
  // Docs parser
  api.addFiles('lib/oo-docs-parser.js', S);
  // Docs interface
  api.addFiles('lib/oo-docs.jade', C);
  api.addFiles('lib/oo-docs.js', C);
  api.addFiles('lib/oo-docs.less', C);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('ox2:docs');
  api.addFiles('tests/oo-docs-tests.js');
});
