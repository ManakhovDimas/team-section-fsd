import type { Meta, StoryObj } from '@storybook/react-vite';
import { TeamSection } from './TeamSection';

const meta: Meta<typeof TeamSection> = {
  title: 'Widgets/TeamSection',
  component: TeamSection,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof TeamSection>;

export const Default: Story = {};