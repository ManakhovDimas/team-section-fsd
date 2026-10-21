import type { Meta, StoryObj } from '@storybook/react-vite';
import { TeamMemberCard } from './TeamMemberCard';
import { mockTeam } from '../model/mockData';

const meta: Meta<typeof TeamMemberCard> = {
  title: 'Entities/TeamMemberCard',
  component: TeamMemberCard,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '320px', height: '100%', display: 'flex' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TeamMemberCard>;

export const Default: Story = {
  args: {
    member: mockTeam[0],
  },
};

export const Developer: Story = {
  args: {
    member: mockTeam[1],
  },
};