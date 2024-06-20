import type { Meta, StoryObj } from '@storybook/react'
import { CardProduct } from '@componentsUI/*'
import StoreProvider from '@app/store-provider'

const meta: Meta<typeof CardProduct> = {
  title: 'Components/CardProduct',
  component: CardProduct,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    price: 2000,
    discount: 500,
    title: 'Product 1'
  },

  render: args => (
    <StoreProvider>
      <CardProduct {...args} />
    </StoreProvider>
  )
}

export const DefaultCardInTheBasket: Story = {
  args: {
    price: 2000,
    discount: 500,
    title: 'Product 1',
    cardInTheBasket: true
  },

  render: args => (
    <StoreProvider>
      <CardProduct {...args} />
    </StoreProvider>
  )
}

export const DefaultCardInTheFavorites: Story = {
  args: {
    price: 2000,
    discount: 500,
    title: 'Product 1',
    isFavorites: true
  },

  render: args => (
    <StoreProvider>
      <CardProduct {...args} />
    </StoreProvider>
  )
}

export const DefaultBasketWithCounter: Story = {
  args: {
    price: 2000,
    discount: 500,
    title: 'Product 1',
    variants: 'inBasketAndCounter'
  },

  render: args => (
    <StoreProvider>
      <CardProduct {...args} />
    </StoreProvider>
  )
}
