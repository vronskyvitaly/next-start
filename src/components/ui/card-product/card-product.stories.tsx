import type { Meta, StoryObj } from '@storybook/react'

import { CardProduct } from './card-product'

import { Button } from './../button'
import { DefaultImg } from './../default-img'

const meta: Meta<typeof CardProduct> = {
  title: 'Components/CardProduct',
  component: CardProduct,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
  render: args => {
    return (
      <CardProduct>
        <DefaultImg />
        <Button title={'Click'} />
      </CardProduct>
    )
  }
}
