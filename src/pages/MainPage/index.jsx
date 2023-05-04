import React from 'react'
import Header from 'components/Header'
import Banner from 'components/Banner'
import MainNews from 'components/MainNews'
import RecentNews from 'components/RecentNews'
import MostReadNews from 'components/MostReadNews'

export default function MainPage() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <MainNews />
        <RecentNews />
        <MostReadNews />
      </main>
    </>
  )
}

/* 
    ANTES DESKTOP
  criar menu

    DESKTOP
  ajustar grids
*/
