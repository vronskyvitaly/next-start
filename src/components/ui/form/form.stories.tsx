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
  args: {},
  render: () => {
    return (
      <Form>
        <Input type={'email'} placeholder={'Your email'} />
        <Input type={'email'} placeholder={'Your password'} />
        <Button title={'Click'} />
      </Form>
    )
  }
}

export const DefaultAndTitle: Story = {
  args: {
    formTitle: 'Form title',
    formSubtitle: 'New orm subtitle'
  },
  render: ({ formTitle, formSubtitle }) => {
    return (
      <Form formTitle={formTitle} formSubtitle={formSubtitle}>
        <Input type={'email'} placeholder={'Your email'} />
        <Input type={'email'} placeholder={'Your password'} />
        <Button title={'Click'} />
      </Form>
    )
  }
}
export const LogInForm: Story = {
  args: {
    formTitle: 'Log in to your account',
    formSubtitle: "Don't have an account?",
    formTitleLink: 'Sing up',
    hrefLink: '/'
  },
  render: ({ formTitle, formSubtitle, hrefLink, formTitleLink }) => {
    return (
      <Form
        formTitle={formTitle}
        formSubtitle={formSubtitle}
        formTitleLink={formTitleLink}
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
    formTitle: 'Create your account',
    formSubtitle: 'Have an account?',
    formTitleLink: 'Log in now',
    hrefLink: '/api/auth/signin'
  },
  render: ({ formTitle, formSubtitle, hrefLink, formTitleLink }) => {
    return (
      <Form
        formTitle={formTitle}
        formSubtitle={formSubtitle}
        formTitleLink={formTitleLink}
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

/**
 * Example with black background
 */
export const SearchForm: Story = {
  args: {},
  render: () => {
    return (
      <div
        style={{
          backgroundColor: 'black',
          height: '300px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Form
          style={{
            flexDirection: 'row',
            maxWidth: '620px',
            gap: '12px'
          }}
        >
          <Input
            style={{ width: '100%' }}
            type={'search'}
            placeholder={'Search'}
          />
          <Button bg={'blue'} title={'Search'} />
        </Form>
      </div>
    )
  }
}
