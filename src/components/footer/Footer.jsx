import Image from 'next/image';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>&copy;2023 Lamania. All rights reserved.</div>
      <div className={styles.social}>
        <Image
          src='/images/1.png'
          width={15}
          height={15}
          className={styles.icon}
          alt='Lama Dev Facebook Account'
        />
        <Image
          src='/images/2.png'
          width={15}
          height={15}
          className={styles.icon}
          alt='Lama Dev'
        />
        <Image
          src='/images/3.png'
          width={15}
          height={15}
          className={styles.icon}
          alt='Lama Dev'
        />
        <Image
          src='/images/4.png'
          width={15}
          height={15}
          className={styles.icon}
          alt='Lama Dev'
        />
      </div>
    </div>
  );
};

export default Footer;
