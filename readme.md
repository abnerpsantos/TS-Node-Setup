# Setup for NODE with Typescript, Nodemon, TSNode, ESlint, Prettier, Husky

### Typescript JSON configuration File

```json
{
    "compilerOptions": {
        "target": "ES2018",
        "module": "ES6",
        "rootDir": "./src",
        "outDir": "./dist",
        "moduleResolution": "node",
        "baseUrl": "./src",
        "esModuleInterop": true,
        "forceConsistenCasingInFileNames": true,
        "strict": true,
        "skipLibCheck": true
    }
}
```
### Commits Pattern:

Following the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) pattern.

The commit contains the following structural elements, to communicate intent to the consumers of your library:

- `fix`: a commit of the type fix patches a bug in your codebase (this correlates with PATCH in Semantic Versioning).
- `feat`: a commit of the type feat introduces a new feature to the codebase (this correlates with MINOR in Semantic Versioning).
- `BREAKING CHANGE`: a commit that has a footer BREAKING CHANGE:, or appends a ! after the type/scope, introduces a breaking API change (correlating with MAJOR in Semantic Versioning). A BREAKING CHANGE can be part of commits of any type.
-  `types other than fix`: and feat: are allowed, for example @commitlint/config-conventional (based on the the Angular convention) recommends build:, chore:, ci:, docs:, style:, refactor:, perf:, test:, and others.
- `footers other than BREAKING CHANGE`: <description> may be provided and follow a convention similar to git trailer format.

### Nodemon JSON Configuration File

```json
{
    "watch": [
        "src"
    ],
    "ext": "ts,json",
    "exec": "ts-node --esm src/app.ts",
    "ignore": [
        "src/**/*.spec.ts",
        "src/**/*.test.ts"
    ],
    "events": {
        "restart": "clear"
    }
}
```