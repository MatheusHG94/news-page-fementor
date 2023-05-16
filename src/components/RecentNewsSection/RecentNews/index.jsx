import React from 'react'
import styles from './RecentNews.module.scss'

export default function RecentNews({ headline, brief }) {
  return (
    <div className={styles.News} >
        <h3 className={styles.News_title} >{headline}</h3>
        <p className={styles.News_paragraph} >{brief}</p>
    </div>
  )
}
