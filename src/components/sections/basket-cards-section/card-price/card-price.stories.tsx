import type { Meta, StoryObj } from '@storybook/react'

import { CardPrice } from './card-price'
import StoreProvider from '@app/store-provider'

const meta: Meta<typeof CardPrice> = {
  title: 'Components/CardPrice',
  component: CardPrice,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
  render: args => {
    return (
      <StoreProvider>
        <CardPrice />
      </StoreProvider>
    )
  }
}
