import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.scss";
import noodleImg from "../../assets/noodle.jpeg";
import xIcon from "../../assets/logo-x.svg";
import githubIcon from "../../assets/logo-github.svg";
import linkedinIcon from "../../assets/logo-linkedin.svg";

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.about__container}>
        <h1 className={styles.about__title}>About Me</h1>
        <p className={styles.about__para}>
          Hi, I'm Cameron! I’m a former medical professional who swapped needles
          and vacutainers for a keyboard and monitor. I loved being part of the
          process of taking a sick patient and helping them get healthy again.
          I’ve carried that same energy into web development, replacing patients
          with clients who have problems that need solutions. Bringing their
          ideas to life — whether it’s a simple navigation bar redesign or a
          complex app — sparks the same excitement I felt helping patients.
        </p>
        <p className={styles.about__para}>
          When I’m not coding, I love spending time with my family. Whether it’s
          watching The Nightmare Before Christmas for the tenth time in a day
          with my daughter, chasing her and our corgi, Noodle, around the
          backyard, playing Satisfactory with my partner, or crying my way
          through the Water Temple in Ocarina of Time, these moments bring
          memorable fun and joy to my life.
        </p>
        <p className={styles.about__para}>
          Another passion of mine is music. I’ve played violin and piano since I
          was 11 years old. I fell in love with the violin after attending a
          Florida Orchestra concert in fifth grade, and the rest is history.
          Learning to understand sheet music rewired how I think, helping me
          approach complex, logic-based problems with more confidence and
          deepening my love for tackling challenging problems with abstract
          solutions.
        </p>
        <p className={styles.about__para}>
          Here is a picture of our corgi, Noodle, just because...
        </p>
        <Image
          className={styles.about__image}
          src={noodleImg}
          alt="Image of Noodle the corgi"
        />
        <p className={styles.about__para}>
          I hope this blog not only documents my growth but also helps others
          see that coding can be for everyone. thanks for joining me on this
          journey!
        </p>
        <p className={styles.follow__text}>Follow me</p>
        <div className={styles.icon__container}>
          <Link className={styles.link} href="#">
            <Image src={xIcon} alt="X Icon" />
          </Link>
          <Link className={styles.link} href="#">
            <Image src={githubIcon} alt="GitHub Icon" />
          </Link>
          <Link className={styles.link} href="#">
            <Image src={linkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
