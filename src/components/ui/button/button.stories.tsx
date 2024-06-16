import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Click'
  }
}

export const DefaultDisabled: Story = {
  args: {
    title: 'Click',
    disabled: true
  }
}

/**
 * Button which takes the block size
 *
 * @props maxWidth:true
 */
export const DefaultMaxWidth: Story = {
  args: {
    title: 'Click'
  },
  render: args => {
    return (
      <div
        style={{
          display: 'flex',
          width: '100%'
        }}
      >
        <Button title={args.title} widthMax={true} />
      </div>
    )
  }
}

export const DefaultBlackButton: Story = {
  args: {
    title: 'Click',
    bg: 'black'
  }
}

export const DefaultBlackMaxWidth: Story = {
  args: {
    title: 'Click',
    bg: 'black'
  },
  render: args => {
    return (
      <div
        style={{
          display: 'flex',
          width: '100%'
        }}
      >
        <Button title={args.title} widthMax={true} bg={'black'} />
      </div>
    )
  }
}

export const DefaultButtonBlue: Story = {
  args: {
    title: 'Click',
    bg: 'blue'
  },
  render: args => {
    return (
      <div
        style={{
          display: 'flex',
          width: '100%'
        }}
      >
        <Button title={args.title} widthMax={false} bg={args.bg} />
      </div>
    )
  }
}

export const TransparentButton: Story = {
  args: {
    title: 'Click',
    bg: 'white'
  },
  render: args => {
    return (
      <div
        style={{
          display: 'flex',
          width: '100%'
        }}
      >
        <Button title={args.title} widthMax={false} bg={args.bg} />
      </div>
    )
  }
}

export const DefaultCounterButton: Story = {
  args: {
    title: '-',
    bg: 'counter'
  }
}

export const DisabledCounterButton: Story = {
  args: {
    disabled: true,
    title: '-',
    bg: 'counter'
  }
}
