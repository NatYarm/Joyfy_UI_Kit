import type { Meta, StoryObj } from '@storybook/react'

import { MdLanguage } from 'react-icons/md'

import { Button } from './Button'

const meta = {
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    endIcon: {
      control: { type: 'object' },
      description: 'Icon to display at the end of the button',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the button should take up the full width of its container',
    },
    onClick: { action: 'clicked' },
    size: {
      control: { type: 'radio' },
      description: 'The size of the button',
      options: ['small', 'medium', 'large'],
    },
    startIcon: {
      control: { type: 'object' },
      description: 'Icon to display at the start of the button',
    },
    variant: {
      control: { type: 'radio' },
      description: 'The visual style of the button',
      options: ['primary', 'secondary', 'outline', 'text', 'link'],
    },
  },
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Button',
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Primary button',
    disabled: false,
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Secondary button',
    disabled: false,
    variant: 'secondary',
  },
}

export const Outline: Story = {
  args: {
    children: 'Outline button',
    disabled: false,
    variant: 'outline',
  },
}

export const Text: Story = {
  args: {
    children: 'Text button',
    disabled: false,
    variant: 'text',
  },
}

export const Link: Story = {
  args: {
    children: 'button that looks like a link',
    disabled: false,
    variant: 'link',
  },
}

export const FullWidth: Story = {
  args: {
    children: 'Full Width button',
    disabled: false,
    fullWidth: true,
    variant: 'primary',
  },
  parameters: {
    layout: 'fullscreen',
  },
  render: (args: any) => (
    <div
      style={{
        alignItems: 'center',
        boxSizing: 'border-box',
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
        padding: '16px',
        width: '100vw',
      }}
    >
      <Button {...args} />
    </div>
  ),
}

export const Sizes: Story = {
  args: {
    children: 'Button',
    variant: 'secondary',
  },
  render: () => (
    <div style={{ alignItems: 'center', display: 'flex', gap: '16px' }}>
      <Button size={'small'}>Small</Button>
      <Button size={'medium'}>Medium</Button>
      <Button size={'large'}>Large</Button>
    </div>
  ),
}

export const WithIcon: Story = {
  args: {
    children: 'button with Start Icon',
    startIcon: <MdLanguage size={24} />,
    variant: 'primary',
  },
}

export const WithEndIcon: Story = {
  args: {
    children: 'button with End Icon',
    endIcon: <span>→</span>,
    variant: 'primary',
  },
}

export const WithBothIcons: Story = {
  args: {
    children: 'button with Both Icons',
    endIcon: <span>→</span>,
    startIcon: <span>🔍</span>,
    variant: 'primary',
  },
}
