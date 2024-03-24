import type { Meta, StoryObj } from '@storybook/react'
import { FormWrapper } from './form-wrapper'
import { Input } from '../input'
import { Button } from '../button'

const meta: Meta<typeof FormWrapper> = {
  title: 'Components/FormWrapper',
  component: FormWrapper,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    formTitle: 'FormWrapper title',
    formSubtitle: 'New orm subtitle'
  },
  render: ({ formTitle, formSubtitle }) => {
    return (
      <FormWrapper formTitle={formTitle} formSubtitle={formSubtitle}>
        <Input type={'email'} placeholder={'Your email'} />
        <Input type={'email'} placeholder={'Your password'} />
        <Button title={'Click'} />
      </FormWrapper>
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
      <FormWrapper
        formTitle={formTitle}
        formSubtitle={formSubtitle}
        formTitleLink={formTitleLink}
        hrefLink={hrefLink}
      >
        <Input type={'email'} placeholder={'Your email'} />
        <Input type={'password'} placeholder={'Your password'} />
        <Button title={'Sing in'} />
      </FormWrapper>
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
      <FormWrapper
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
      </FormWrapper>
    )
  }
}

export const SerchForm: Story = {
  args: {},
  render: () => {
    return (
      <FormWrapper
        style={{
          flexDirection: 'row',
          maxWidth: '620px',
          gap: '12px'
        }}
      >
        <Input
          style={{ width: '100%' }}
          type={'search'}
          placeholder={'Your First name'}
        />
        <Button bg={'blue'} title={'Serch'} />
      </FormWrapper>
    )
  }
}
