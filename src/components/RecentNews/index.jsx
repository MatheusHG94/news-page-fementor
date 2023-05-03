import React from 'react'
import styles from './RecentNews.module.scss'
import newsList from './recentNews.json'
import News from 'components/News'
import { v4 as uuidv4 } from 'uuid';

export default function RecentNews() {
  return (
    <section className={styles.recentNews} >
        <h2>New</h2>
        {newsList.map(item =>
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
