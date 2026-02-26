import type { Meta, StoryObj } from '@storybook/react'

import { TextField } from '../textField'
import { Label } from './Label'

const meta: Meta<typeof Label> = {
  argTypes: {
    htmlFor: {
      control: 'text',
      description: 'The ID of the input element the label is associated with.',
    },
    label: {
      control: 'text',
      description: 'The text displayed as the label.',
    },
  },
  component: Label,
  tags: ['autodocs'],
  title: 'Components/Label',
}

export default meta
type Story = StoryObj<typeof Label>

export const Default: Story = {
  args: {
    children: <TextField />,
    label: 'Email',
  },
}
