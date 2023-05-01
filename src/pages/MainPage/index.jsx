import React from 'react'
import Header from 'components/Header'
import Banner from 'components/Banner'
import MainNews from 'components/MainNews'

export default function MainPage() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <MainNews />
      </main>
    </>
  )
}
