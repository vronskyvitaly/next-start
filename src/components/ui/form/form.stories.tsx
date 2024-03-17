import type { Meta, StoryObj } from '@storybook/react'
import { Form } from './form'
import { Input } from '../input'
import { Button } from '../button'

const meta: Meta<typeof Form> = {
  title: 'Components/Form',
  component: Form,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Form title',
    subtitle: 'New orm subtitle'
  },
  render: ({ title, subtitle }) => {
    return (
      <Form title={title} subtitle={subtitle}>
        <Input type={'email'} placeholder={'Your email'} />
        <Input type={'email'} placeholder={'Your password'} />
        <Button title={'Click'} />
      </Form>
    )
  }
}

export const LogInForm: Story = {
  args: {
    title: 'Log in to your account',
    subtitle: "Don't have an account?",
    titleLink: 'Sing up',
    hrefLink: '/'
  },
  render: ({ title, subtitle, hrefLink, titleLink }) => {
    return (
      <Form
        title={title}
        subtitle={subtitle}
        titleLink={titleLink}
        hrefLink={hrefLink}
      >
        <Input type={'email'} placeholder={'Your email'} />
        <Input type={'password'} placeholder={'Your password'} />
        <Button title={'Sing in'} />
      </Form>
    )
  }
}

export const SingUpForm: Story = {
  args: {
    title: 'Create your account',
    subtitle: 'Have an account?',
    titleLink: 'Log in now',
    hrefLink: '/api/auth/signin'
  },
  render: ({ title, subtitle, hrefLink, titleLink }) => {
    return (
      <Form
        title={title}
        subtitle={subtitle}
        titleLink={titleLink}
        hrefLink={hrefLink}
      >
        <Input placeholder={'Your First name'} />
        <Input placeholder={'Your Last name'} />
        <Input type={'email'} placeholder={'Your email'} />
        <Input type={'password'} placeholder={'Your password'} />
        <Button title={'Sing up'} />
      </Form>
    )
  }
}
