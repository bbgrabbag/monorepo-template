# NextJS App Template

Boilerplate code for a basic NextJS application.
```
turbo gen workspace --copy @repo/nextjs_template --type app
``` 

### Get Started
- It's recommended to first copy this workspace and give the cloned workspace a new name under the `"name"` property in package.json. Follow the remaining prompts:
```
turbo gen workspace --copy @repo/nextjs-template --type app
``` 

- To consume other packages within the monorepo, add the package name to `package.json` and run `pnpm i`.
```json
{
    "dependencies":{
        "@repo/<package-name>": "*"
    }
}
```