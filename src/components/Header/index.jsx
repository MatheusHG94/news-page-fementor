import React from 'react'
import styles from './Header.module.scss'
import logo from './logo.svg'
import Menu from './Menu'

export default function Header() {
  return (
    <header className={styles.Header} >
        <img src={logo} alt="News page logo consisting of a capital W and a dot" />
        <Menu />
    </header>
  )
}
