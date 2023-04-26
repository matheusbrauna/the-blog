import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.NEXT_PUBLIC_HYGRAPH_API_URL,
  documents: './src/graphql/**/*.graphql',
  generates: {
    'src/generated/graphql.tsx': {
      plugins: ['typescript', 'typescript-operations', 'typescript-urql'],
      config: {
        preResolveTypes: true,
        scalars: {
          DateTime: 'Date',
        },
        interfacePrefix: 'I',
        typesPrefix: 'I',
        skipTypename: true,
        declarationKind: 'interface',
        noNamespaces: true,
        pureMagicComment: true,
        withHooks: true,
      },
    },
  },
}

export default config
