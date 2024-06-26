import type { Preview } from '@storybook/react'
import '../src/styles/globals.scss'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    backgrounds: {
      default: 'Dark',
      values: [
        {
          name: 'Dark',
          value: '#000'
        },
        {
          name: 'Light',
          value: '#f4f4f4'
        }
      ]
    }
  }
}

export default preview
