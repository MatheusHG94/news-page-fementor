import React from 'react'
import styles from './PopularNews.module.scss'
import newsFullList from 'pages/MainPage/news.json'
import News from 'components/News'
import { v4 as uuidv4 } from 'uuid';

export default function PopularNews() {

  const popularNewsList = newsFullList.filter(item => item.section === 'most read');

  return (
    <section className={styles.PopularNews} >
      {popularNewsList.map(item =>
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
