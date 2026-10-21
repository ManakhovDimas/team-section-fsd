import type { TeamMember } from '../model/types';
import { Button } from '@/shared/ui/Button/Button';
import { Tag } from '@/shared/ui/Tag/Tag';
import { SendIcon, FolderIcon } from '@/shared/ui/icons/Icons'; 
import avatarImage from '@/shared/assets/images/avatar.png'; 
import styles from './TeamMemberCard.module.scss';

interface Props {
  member: TeamMember;
}

export const TeamMemberCard = ({ member }: Props) => {
  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <div className={styles.avatar}>
          <img 
            src={avatarImage} 
            alt={`Аватар ${member.firstName} ${member.lastName}`} 
            className={styles.avatarImg} 
          />
        </div>
        <div className={styles.info}>
          <h3 className={styles.name}>{member.firstName}</h3>
          <p className={styles.surname}>{member.lastName}</p>
          <p className={styles.role}>{member.role}</p>
        </div>
      </header>

      <div className={styles.description}>
        {member.description.map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </div>

      <ul className={styles.skills}>
        {member.skills.map((skill) => (
          <Tag key={skill} label={skill} />
        ))}
      </ul>

      <footer className={styles.actions}>
        <Button variant="outline" icon={<SendIcon />} aria-label={`Написать ${member.firstName} ${member.lastName}`}>
          Написать
        </Button>
        <Button variant="outline" icon={<FolderIcon />} aria-label={`Портфолио ${member.firstName} ${member.lastName}`}>
          Портфолио
        </Button>
      </footer>
    </article>
  );
};