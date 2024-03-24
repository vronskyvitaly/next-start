import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from './typography'
import { TypographyVariant } from '../../common/enums'

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: Object.values(TypographyVariant),
      control: { type: 'select' }
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

/**
 * Example on a black background
 */
export const H1: Story = {
  args: {
    variant: TypographyVariant.H1,
    children: 'H1 text'
  },
  render: args => (
    <div style={{ backgroundColor: 'black' }}>
      <Typography variant={TypographyVariant.H1}>Logo</Typography>
    </div>
  )
}

export const H3: Story = {
  args: {
    variant: TypographyVariant.H3,
    children: 'H3 text'
  }
}

export const H4: Story = {
  args: {
    variant: TypographyVariant.H4,
    children: 'H4 text'
  }
}

export const H5: Story = {
  args: {
    variant: TypographyVariant.H5,
    children: 'H5 text'
  }
}

export const H6: Story = {
  args: {
    variant: TypographyVariant.H6,
    children: 'H6 text'
  }
}
export const P: Story = {
  args: {
    variant: TypographyVariant.P,
    children: 'p text'
  }
}

export const PV2: Story = {
  args: {
    variant: TypographyVariant.PV2,
    children: 'pV2 text'
  }
}

export const PriseV1: Story = {
  args: {
    variant: TypographyVariant.PriseV1,
    children: 'PriseV1 text'
  }
}

export const PriseV2: Story = {
  args: {
    variant: TypographyVariant.PriseV2,
    children: 'PriseV2 text'
  }
}

export const PriseV3: Story = {
  args: {
    variant: TypographyVariant.PriseV3,
    children: 'PriseV3 text'
  }
}

export const Caption: Story = {
  args: {
    variant: TypographyVariant.Caption,
    children: 'Caption text'
  }
}

export const Discord: Story = {
  args: {
    variant: TypographyVariant.Discord,
    children: 'Discord text'
  }
}

export const buttonText: Story = {
  args: {
    variant: TypographyVariant.ButtonText,
    children: 'buttonText'
  }
}

export const Link: Story = {
  args: {
    variant: TypographyVariant.Link,
    children: 'Link1 text'
  }
}

export const Error: Story = {
  args: {
    variant: TypographyVariant.ERROR,
    children: 'Error!'
  }
}
