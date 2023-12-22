import * as React from 'react';
import { Preview } from '@storybook/react';
import { CustomThemeProvider } from '../src';
import { THEME_NAMES } from '../src/themes';


const preview: Preview = {
  globalTypes: {
    mode: {
      description: 'Toggle between light/dark mode',
      defaultValue: 'light',
      toolbar: {
        title: 'Mode',
        icon: 'lightning',
        items: ['light', 'dark'],
        dynamicTitle: true,
      },
    },
    theme: {
      description: 'Switch theme (remount to view changes)',
      defaultValue: 'default',
      toolbar: {
        title: 'Theme',
        icon: 'paintbrush',
        items: THEME_NAMES,
        dynamicTitle: true,
      },
    }
  },
  decorators: [
    (Story, context) => {
      return (
        <CustomThemeProvider
          defaultTheme={context.globals.theme}
          defaultThemeMode={context.globals.mode}>
          <Story />
        </CustomThemeProvider>
      )
    }
  ]
};

export default preview;
