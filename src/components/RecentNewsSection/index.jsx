import React from 'react'
import styles from './RecentNewsSection.module.scss'
import newsFullList from 'pages/MainPage/news.json'
import RecentNews from './RecentNews'
import { v4 as uuidv4 } from 'uuid';

export default function RecentNewsSection() {

  const recentNewsList = newsFullList.filter(item => item.section === 'recent');

  return (
    <section className={styles.RecentNews} >
        <h2 className={styles.RecentNews_sectionTitle} >New</h2>
        {recentNewsList.map(item =>
            <RecentNews
                key={uuidv4()}
                headline={item.headline}
                brief={item.brief}
            />
        )}
    </section>
  )
}
