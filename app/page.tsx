import Image from "next/image";
import styles from "./page.module.scss";
import xIcon from "./assets/logo-x.svg";
import gitHubIcon from "./assets/logo-github.svg";
import linkedinIcon from "./assets/logo-linkedin.svg";

export default function Home() {
  return (
    <div className={styles.home__page}>
      <main className={styles.main}>
        <h1 className={styles.about__title}>Hi, I'm Cameron👋</h1>
        <p className={styles.about__para}>
          I’m on a journey to become a front-end web developer. I love building
          new projects, learning new techniques, exploring new frameworks, and
          sharing what I learn along the way. When I’m not at my desk, you’ll
          find me spending time with my family, running around with my daughter
          and corgi, or crying my way through the Water Temple in Ocarina of
          Time.
        </p>
        <p className={styles.about__para}>
          I started this blog to document my progress, keep myself accountable,
          and hopefully inspire anyone else who’s learning to code. Welcome to
          my corner of the internet — thanks for stopping by!
        </p>
        <div className={styles.icon__container}>
          <div className={styles.icon}>
            <Image src={xIcon} alt="X Icon" />
          </div>
          <div className={styles.icon}>
            <Image src={gitHubIcon} alt="GitHub Icon" />
          </div>
          <div className={styles.icon}>
            <Image src={linkedinIcon} alt="Linkedin Icon" />
          </div>
        </div>
      </main>
    </div>
  );
}
