import styles from './HeroStyles.module.css';
import heroImg from '../../assets/Design uten navn.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from "../../assets/Resume Prabhakaran H B.pdf"
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <div>
      <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
          <img src={heroImg} className={styles.hero} alt="Harris Johnsen" />
          <img
            className={styles.colorMode}
            src={themeIcon}
            alt="Toggle dark mode"
            onClick={toggleTheme}
          />
        </div>
        <div className={styles.info}>
          <h1>
            Prabhakaran
            <br />
            Haribaskar
          </h1>
          <h2>MERN Stack Developer</h2>
          <ul className={styles.descriptionList}>
    <li>Full Stack Developer (MERN) with 2+ years of experience crafting responsive applications.</li>
    <li>Skilled in translating designs into seamless interfaces using modern technologies.</li>
    <li>Proficiet in HTML5, CSS3, JavaScript, ReactJS, ReduxJS, Node.js, and MongoDB.</li>
    <li>Specializing in responsive designs and Agile-driven iterative development.</li>
  </ul>
          <span>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <img src={twitterIcon} alt="Twitter icon" />
            </a>
            <a href="https://github.com/Prabhakaran-1605" target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="Github icon" />
            </a>
            <a href="https://www.linkedin.com/in/prabhakaran-haribaskar-b53604130/" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn icon" />
            </a>
          </span>
          <a href={CV} download>
            <button className="hover">Resume</button>
          </a>
        </div>
      </section>
    </div>

  );
}

export default Hero;
