module.exports = {
  // ...
  // Configuration options accepted by the `relay-compiler` command-line tool,  `babel-plugin-relay` and `relay-angular-plugin`.
  src: 'apps/relay-angular-config/src',
  schema: 'apps/api/data/schema.graphql',
  language: 'typescript',
  artifactDirectory: 'apps/relay-angular-config/src/__generated__/relay/',
};
