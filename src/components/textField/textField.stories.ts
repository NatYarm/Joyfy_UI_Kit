import type { Meta, StoryObj } from '@storybook/react'

import { action } from 'storybook'

import { TextField } from './TextField'

const meta: Meta<typeof TextField> = {
  argTypes: {
    errorMessage: {
      control: 'text',
      description: 'Error message to be displayed under the input field',
    },
    label: {
      control: 'text',
      description: 'Label for the input field',
    },
    onEnter: {
      action: 'onEnter',
      description: 'Callback for the Enter key press event',
    },
    onKeyDown: {
      action: 'onKeyDown',
      description: 'Callback for the onKeyDown event of the input',
    },
    onShowPasswordClick: {
      action: 'onShowPasswordClick',
      description: 'Callback for the password visibility toggle',
    },
    search: {
      control: 'boolean',
      description: 'Enable search icon on the left side',
    },
    type: {
      control: 'select',
      description: 'Type of the input field (text or password)',
      options: ['text', 'password'],
    },
  },
  component: TextField,
  tags: ['autodocs'],
  title: 'Components/TextField',
}

export default meta
type Story = StoryObj<typeof TextField>

export const Default: Story = {
  args: {
    label: 'Email',
    onEnter: action('Enter!'),
    onKeyDown: action('Key Pressed'),
    onShowPasswordClick: action('Toggle password'),
    placeholder: 'Enter your text',
  },
}

export const Invalid: Story = {
  args: {
    ...Default.args,
    errorMessage: 'Error text',
  },
}

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
}

export const Search: Story = {
  args: {
    placeholder: 'input search',
    search: true,
  },
}

export const Password: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password',
  },
}
