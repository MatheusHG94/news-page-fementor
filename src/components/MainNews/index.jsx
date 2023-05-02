import React from 'react'
import styles from './MainNews.module.scss'
import Button from 'components/Button'

export default function MainNews() {
  return (
    <section className={styles.mainNews} >
        <h1>The Bright Future of Web 3.0?</h1>
        <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
        <Button >Read more</Button>
    </section>
  )
}
