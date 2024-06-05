import type { Meta, StoryObj } from '@storybook/react'

import { IconWrapper } from './icon-wrapper'

const meta: Meta<typeof IconWrapper> = {
  title: 'Components/IconWrapper',
  component: IconWrapper,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof meta>

export const DefaultIconWrapper: Story = {
  args: {
    subTitle: 'Default',
    srcImg:
      'https://static.vecteezy.com/system/resources/thumbnails/004/798/846/small/shopping-cart-logo-or-icon-design-vector.jpg'
  }
}

/**
 * Displays the number of cards added by the user to the cart
 */
export const BasketIconWrapper: Story = {
  args: {
    subTitle: 'Basket',
    srcImg:
      'https://static.vecteezy.com/system/resources/thumbnails/004/798/846/small/shopping-cart-logo-or-icon-design-vector.jpg',
    counter: 5
  }
}
