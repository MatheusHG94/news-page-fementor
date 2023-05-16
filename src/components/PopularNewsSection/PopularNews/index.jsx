import React from 'react'
import styles from './PopularNews.module.scss'

export default function PopularNews({ imgSrc, order, headline, brief }) {
  return (
    <div className={styles.News} >
        <img className={styles.News_image} src={imgSrc} alt="" />
        <span className={styles.News_order} >{order}</span>
        <h3 className={styles.News_title} >{headline}</h3>
        <p className={styles.News_paragraph} >{brief}</p>
    </div>
  )
}
