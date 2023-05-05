import React, { useState } from 'react'
import styles from './Menu.module.scss'
import menuClose from './icon-menu-close.svg'
import menu from './icon-menu.svg'

export default function Menu() {

  const [isActive, setActive] = useState(false);

  const toggleMenu = () => {
    if(isActive) {
      setActive(false);
    } else {
      setActive(true);
    }
  }

  return (
    <>
    <div className={styles.menu} >
      <button onClick={() => toggleMenu()} >
        <img src={menu} alt="Hamburger menu icon" />
      </button>
      <nav className={isActive ? styles.menu__list : styles.menu__listHidden} >
        <button onClick={() => toggleMenu()} >
          <img src={menuClose} alt="Close menu icon" />
        </button>
        <ul>
          <li>Home</li>
          <li>New</li>
          <li>Popular</li>
          <li>Trendind</li>
          <li>Categories</li>
        </ul>
      </nav>
    </div>
    <div className={isActive ? styles.backdropActive : styles.backdrop} ></div>
    </>
  )
}
