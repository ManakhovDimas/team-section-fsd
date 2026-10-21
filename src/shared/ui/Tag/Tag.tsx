import styles from './Tag.module.scss';

export const Tag = ({ label }: { label: string }) => (
  <li className={styles.tag}>{label}</li>
);