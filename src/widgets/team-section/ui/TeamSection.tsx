import { mockTeam } from '@/entities/team-member/model/mockData';
import { TeamMemberCard } from '@/entities/team-member/ui/TeamMemberCard';
import { Button } from '@/shared/ui/Button/Button';
import { SendIcon } from '@/shared/ui/icons/Icons';
import mountainsImage from '@/shared/assets/images/mountains.png'; // 👈 Импорт картинки
import styles from './TeamSection.module.scss';

export const TeamSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <header className={styles.sectionHeader}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>Три шага с нами</h2>
            <p className={styles.subtitle}>
              Британские ученые доказали, что долгое планирование не безопасно для вашего предвидения. 
              Мы не стали спорить. Собрали команду райдеров, путешественников и просто неравнодушных людей, 
              чтобы сделать сложное проще. Будем знакомы?
            </p>
          </div>
          <img 
            src={mountainsImage} 
            alt="" 
            className={styles.headerImage} 
            aria-hidden="true" 
          />
        </header>

        <div className={styles.grid}>
          {mockTeam.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>

        <div className={styles.ctaBlock}>
          <h2 className={styles.ctaTitle}>Хотите присоединиться?</h2>
          <p className={styles.ctaSubtitle}>
            Мы открыты к сотрудничеству и всегда рады людям, которые хотят делать классные продукты.
          </p>
          <Button variant="outline" icon={<SendIcon />} className={styles.ctaButton}>
            Написать нам
          </Button>
        </div>
      </div>
    </section>
  );
};