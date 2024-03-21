import type { Meta, StoryObj } from '@storybook/react'

import { SearchForm } from './search-form'

const meta: Meta<typeof SearchForm> = {
  title: 'Components/SearchForm',
  component: SearchForm,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof meta>

export const DefaultSearchForm: Story = {
  args: {
    placeholder: 'Search'
  }
}
