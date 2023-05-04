import React from 'react'
import styles from './RecentNews.module.scss'
import newsFullList from 'pages/MainPage/news.json'
import News from 'components/News'
import { v4 as uuidv4 } from 'uuid';

export default function RecentNews() {

  const recentNewsList = newsFullList.filter(item => item.section === 'recent');

  return (
    <section className={styles.recentNews} >
        <h2>New</h2>
        {recentNewsList.map(item =>
            <News
                key={uuidv4()}
                headline={item.headline}
                brief={item.brief}
                styles={styles}
            />
        )}
    </section>
  )
}
