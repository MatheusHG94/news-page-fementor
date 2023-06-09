import React from 'react'
import styles from './MainNews.module.scss'
import Button from 'components/Button'

export default function MainNews() {
  return (
    <section className={styles.MainNews} >
        <h1 className={styles.MainNews_title} >The Bright Future of Web 3.0?</h1>
        <p className={styles.MainNews_paragraph} >We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
        <Button >Read more</Button>
    </section>
  )
}
