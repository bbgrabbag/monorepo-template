# Component Library Template

Boilerplate code for React component library.
### Get Started
- It's recommended to first copy this workspace and give the cloned workspace a new name under the `"name"` property in package.json. Follow the remaining prompts:
```
turbo gen workspace --copy @repo/component_library_template --type package
``` 
- Create a component using the `turbo gen create-component` command.
- Make your component available to consume by exporting it from `src/index.tsx`;
```js
export { YourComponent } from './components/YourComponent'
```
- Add package reference to your workspace's `package.json` file and run `pnpm i` to make library importable:
```json
"dependences": {
    "<package-name>": "*"
}
```
- Run `turbo dev --filter=<package-name>` to view components in Storybook while you develop.

### Material UI
Library includes a basic Material UI installation as well as a premade `<CustomThemeProvider>` component. See [documentation](https://mui.com/material-ui/customization/theming/) for details on how to customize themes

##### Theme
- To use custom themes in another workspace, import `CustomThemeProvider` and wrap around root entrypoint of your application:

```js
import * as React from "react";
import {CustomThemeProvider} from '<package-name>'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CustomThemeProvider>
            {children}
        </CustomThemeProvider>
      </body>
    </html>
  );
}
```
- Create custom themes (see full default  [MaterialUI](https://mui.com/material-ui/customization/default-theme/) theme properties) by adding a `<theme-name>.json` file to `src/themes` and exporting it as part of `THEME_MAP` object from `src/themes/index.ts`:
```js
import defaultThemeConfig from './default.json';
import constrastThemeConfig from './contrast.json';
import newThemeConfig from './your-new-theme.json'

export const THEME_MAP = {
    default: defaultThemeConfig,
    contrast: constrastThemeConfig,
    newTheme: newThemeConfig
}
```

- Access theme API with `useThemeAPI` hook:
```js
import {useThemeAPI} from '<package-name>';

const MyComponent = () => {
    const {
        // material ui theme configuration:
        theme,

        // view and set theme by name:
        themeName, 
        setThemeName,

        // set light/dark mode:
        themeMode,
        toggleThemeMode
    } = useThemeAPI();
    return <>...</>
}
```

### Testing
- Run `turbo test --filter=<package-name>` to execute unit tests.

- `test-utils.tsx` contains a custom `render()` function which includes the `<ThemeProvider>` wrapper along with all the methods provided by `@react-testing-library/react`.
```js
import testUtils from 'path/to/test-utils.tsx';
```