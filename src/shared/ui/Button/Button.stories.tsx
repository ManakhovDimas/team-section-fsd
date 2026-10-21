import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';
import { SendIcon } from '../icons/Icons';

const meta: Meta<typeof Button> = {
  title: 'Shared/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Outline: Story = {
  args: {
    children: 'Написать',
    variant: 'outline',
    icon: <SendIcon />,
  },
};

export const Primary: Story = {
  args: {
    children: 'Отправить',
    variant: 'primary',
  },
};