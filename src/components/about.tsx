import styles from '@/styles/about.module.css';
import AboutCard from './about-card';

export default function About() {
  return (
    <div className={styles.about}>
      <AboutCard
        label="Community"
        desc="There are plenty of Discord servers, articles, books,
      and videos available to the public made by the community to
      get you started."
      />
      <AboutCard
        label="Control"
        desc="You have complete control of your game loop, display,
      and modules you use. You can use different API libraries
      to suit your needs."
      />
      <AboutCard
        label="Open Source"
        desc="The entire codebase is available on GitHub ensuring that
      pygame gets the opportunity to be improved everyday."
      />
    </div>
  );
}
