import React from 'react'
import styles from './PopularNewsSection.module.scss'
import newsFullList from 'pages/MainPage/news.json'
import PopularNews from './PopularNews'
import { v4 as uuidv4 } from 'uuid';

export default function PopularNewsSection() {

  const popularNewsList = newsFullList.filter(item => item.section === 'most read');

  return (
    <section className={styles.PopularNews} >
      {popularNewsList.map(item =>
        <PopularNews
          key={uuidv4()}
          imgSrc={item.imgsrc}
          order={item.order}
          headline={item.headline}
          brief={item.brief}
        />
      )}
    </section>
  )
}
