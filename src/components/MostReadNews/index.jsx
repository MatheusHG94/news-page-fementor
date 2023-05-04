import React from 'react'
import styles from './MostReadNews.module.scss'
import newsFullList from 'pages/MainPage/news.json'
import News from 'components/News'
import { v4 as uuidv4 } from 'uuid';

export default function MostReadNews() {

  const mostReadNewsList = newsFullList.filter(item => item.section === 'most read');

  return (
    <section className={styles.mostReadNews} >
      {mostReadNewsList.map(item =>
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
