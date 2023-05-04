import React from 'react'
import styles from './Menu.module.scss'
import menuClose from './icon-menu-close.svg'
import menu from './icon-menu.svg'

export default function Menu() {

  

  return (
    <div className={styles.menu} >
        <img src={menu} alt="Hamburger menu icon" />
    </div>
  )
}
