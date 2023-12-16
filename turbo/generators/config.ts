import { PlopTypes } from "@turbo/gen";
import * as fs from 'fs';


export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator("create-component", {
    description:
      "Creates a React Component",
    prompts: [
      {
        type: 'list',
        name: 'entrypoint',
        message: 'Select workspace type',
        choices: ['apps', 'packages']
      },
      {
        type: 'list',
        name: 'workspace',
        message: 'Select workspace',
        choices: (config) => {
          const workspaces = fs.readdirSync(config.entrypoint)
          return workspaces
        }
      },
      {
        type: "input",
        name: "component",
        message: "What is the name of the component? (e.g. MyComponent)",
        validate: (input: string) => {
          if (input.includes(".")) {
            return "file name cannot include an extension";
          }
          if (input.includes(" ")) {
            return "file name cannot include spaces";
          }
          if (!input) {
            return "file name is required";
          }
          return true;
        },
      },
      {
        type: 'input',
        name: 'filepath',
        message: 'Enter path to new component directory, e.g. src/components',
      },
      {
        type: 'confirm',
        name: 'includeUnitTest',
        message: 'Include unit test?',
        default: true
      },
      {
        type: 'confirm',
        name: 'includeStorybook',
        message: 'Include storybook?',
        default: true
      }
    ],
    actions: [
      {
        type: "add",
        path: "{{ turbo.paths.root }}/{{ entrypoint }}/{{ workspace }}/{{ filepath }}/{{ component }}/{{ component }}.tsx",
        templateFile: "templates/component.hbs",
      },
      {
        type: "add",
        path: "{{ turbo.paths.root }}/{{ entrypoint }}/{{ workspace }}/{{ filepath }}/{{ component }}/index.tsx",
        template: "export { {{component}} } from './{{component}}'",
      },
      {
        type: "add",
        path: "{{ turbo.paths.root }}/{{ entrypoint }}/{{ workspace }}/{{ filepath }}/{{ component }}/{{component}}.test.tsx",
        templateFile: "templates/unit-test.hbs",
        skip: config => {
          if (config.includeUnitTest) return;
          return 'Skipped creating unit test'
        }
      },
      {
        type: "add",
        path: "{{ turbo.paths.root }}/{{ entrypoint }}/{{ workspace }}/{{ filepath }}/{{ component }}/{{component}}.stories.tsx",
        templateFile: "templates/story.hbs",
        skip: config => {
          if (config.includeStorybook) return;
          return 'Skipped creating story'
        }
      },
    ],
  });
}
