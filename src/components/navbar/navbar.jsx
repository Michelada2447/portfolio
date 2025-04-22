import styles from './navbar.module.css'

export function Navbar() {
  return (
    <header className={`${styles.header}`}>
      <div className={`${styles.headerDiv} ${styles.div}`}>
        <a href='#' className={styles.divA}>
          <img
            src='public/assets/icons/logo.png'
            alt='Logo Cat'
            height='48px'
            className={`${styles.divImg} ${styles.transition}`}
          />
        </a>
      </div>
      <nav className={`${styles.headerNav} ${styles.nav}`}>
        <ul className={styles.navUl}>
          <li className={`${styles.navLi} ${styles.transition}`}><a href='#' className={styles.navA}>Home</a></li>
          <li className={`${styles.navLi} ${styles.transition}`}><a href='#' className={styles.navA}>About</a></li>
          <li className={`${styles.navLi} ${styles.transition}`}><a href='#' className={styles.navA}>Proyect</a></li>
        </ul>
      </nav>
      <div className={`${styles.headerDiv} ${styles.div}`}>
        <a href='#' className={`${styles.divA} ${styles.transition}`}>
          <button className={`${styles.divButton}`}>Contact Me</button>
        </a>
      </div>
    </header>
  )
}
