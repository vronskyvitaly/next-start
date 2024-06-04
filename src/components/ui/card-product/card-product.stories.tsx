import type { Meta, StoryObj } from '@storybook/react'

import { CardProduct } from './card-product'
import { Button } from './../button'

const meta: Meta<typeof CardProduct> = {
  title: 'Components/CardProduct',
  component: CardProduct,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: '111111222222',
    title: 'Nike',
    discount: 6000,
    price: 3400,
    basket: false
  },
  render: args => {
    return <CardProduct {...args} />
  }
}
