import React from 'react'
import styles from "./Card.module.scss";
import { useState, useEffect } from 'react';
import projects from "../../projects.json";

function Card() {
  // const [data, setData] = useState([])

  // async function fetchData() {
  //   try {
  //     const response = await fetch('https://api.jsonbin.io/v3/b/6480b0a98e4aa6225eaaac69', {
  //       headers: {
  //         'X-Master-Key': '$2b$10$4s42j5sWqrXJuuDGzPIVveo6e6GWl5dfymdeqY8l6gUsfbTv8evDm'
  //       }
  //     });
  
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }
  
  //     const data = await response.json();
  //     setData(data.record)
  //   } catch (error) {
  //     console.error('Fetch error:', error);
  //   }
  // }

  
  // useEffect(() => {
  //   fetchData();
  // }, []);
  // console.log(data)

  return (
    <>
      {/* <div className={styles.projects_container}>
        {data.map((project) =>
          <div key={project.number} className={styles.card_container}>
            <a href={project.link} target="_blank" className={styles.link_container}>
              <h3>{project.title}</h3>
              <img className={styles.img} src={project.image} alt={project.title} />
            </a>
            <p>{project.description}</p>
            {project.github &&
              <div className={styles.github_container}>
              <a href={project.github} className={styles.github_container} target="_blank">
                <img className={styles.github_logo} src="src/assets/github.png" alt="GitHub Link" /></a>
              </div>
            }
          </div>
        )}
      </div> */}

      <div className={styles.projects_container}>
        {projects.map((project) =>
          <div key={project.number} className={styles.card_container}>
            <a href={project.link} target="_blank" className={styles.link_container}>
              <h3>{project.title}</h3>
              <img className={styles.img} src={project.image} alt={project.title} />
            </a>
            <p>{project.description}</p>
            {project.github &&
              <div className={styles.github_container}>
              <a href={project.github} className={styles.github_container} target="_blank">
                <img className={styles.github_logo} src="src/assets/github.png" alt="GitHub Link" /></a>
              </div>
            }
          </div>
        )}
      </div>

    </>
  )
}

export default Card;
