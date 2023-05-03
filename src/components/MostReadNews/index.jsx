import React from 'react'
import styles from './MostReadNews.module.scss'
import newsList from './mostReadNews.json'
import News from 'components/News'
import { v4 as uuidv4 } from 'uuid';

export default function MostReadNews() {
  return (
    <section className={styles.mostReadNews} >
      {newsList.map(item =>
        <News
          key={uuidv4()}
          imgSrc={item.imgsrc}
          order={item.order}
          headline={item.headline}
          brief={item.brief}
          styles={styles}
        />
      )}
    </section>
  )
}
