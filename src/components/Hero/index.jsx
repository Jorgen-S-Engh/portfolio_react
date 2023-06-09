import React from 'react'
import styles from "./Hero.module.scss";
function Hero() {
  return (
    <div className={styles.hero_container}>
      <div className={styles.description}>
        <h1>Jørgen W. Engh</h1>
        <h2>Frontend-developer</h2>
        <p>I am finishing a two year higher professional degree in frontend-development in the spring of 2023. I have a masterdegree in political science, and I have experience working as a project manager and an IT-manager prior to my development-studies. Feel free to check out my portfolio, and contact me regarding anything.</p>
      </div>
      <div className={styles.image}><img src="/assets/profile.png" alt="profile picture of me" /></div>
    </div>
  )
}

export default Hero