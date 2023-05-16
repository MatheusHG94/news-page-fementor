import React from 'react'
import styles from './MainPage.module.scss'
import Header from 'components/Header'
import Banner from 'components/Banner'
import MainNews from 'components/MainNews'
import RecentNewsSection from 'components/RecentNewsSection'
import PopularNewsSection from 'components/PopularNewsSection'

export default function MainPage() {
  return (
    <>
      <Header />
      <main className={styles.Main} >
        <Banner />
        <MainNews />
        <RecentNewsSection />
        <PopularNewsSection />
      </main>
    </>
  )
}

/* 
    DESKTOP
  ajustar grids
*/
