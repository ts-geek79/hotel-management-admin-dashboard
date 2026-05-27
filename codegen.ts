import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://localhost:5000/graphql",
  documents: ["src/graphql/**/*.graphql", "!src/gql/**"],
  generates: {
    "./src/gql/schema.ts": {
      plugins: ["typescript"],
      config: {
        useTypeImports: true,
      },
    },
    "./src/gql/graphql.ts": {
      plugins: [
        {
          add: {
            content: [
              "// @ts-nocheck",
              "import type * as Types from './schema';",
            ].join("\n"),
          },
        },
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        useTypeImports: true,
        withHooks: true,
        withSuspenseQuery: false,
        withLazyQuery: false,
        apolloReactHooksImportFrom: "@apollo/client/react",
        namespacedImportName: "Types",
      },
    },
  },
};

export default config;
