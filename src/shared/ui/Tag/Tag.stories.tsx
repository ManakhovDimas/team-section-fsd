import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tag } from './Tag';

const meta: Meta<typeof Tag> = {
  title: 'Shared/Tag',
  component: Tag,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: {
      description: 'Текст, который отображается внутри плашки',
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    label: 'React',
  },
};

export const LongText: Story = {
  args: {
    label: 'UX-исследования',
  },
};

export const ShortText: Story = {
  args: {
    label: 'SQL',
  },
};