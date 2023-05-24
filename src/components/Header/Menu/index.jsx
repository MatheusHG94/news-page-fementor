import React, { useEffect, useState } from 'react'
import styles from './Menu.module.scss'
import menuClose from './icon-menu-close.svg'
import menu from './icon-menu.svg'

export default function Menu() {

  /* open/close menu */

  const [isActive, setActive] = useState(false);

  const toggleMenu = () => {
    if (isActive) {
      setActive(false);
    } else {
      setActive(true);
    }
  }

  /* calculating screen width */

  const [screenWidth, getScreenWidth] = useState(window.innerWidth);
  const setScreenWidth = () => getScreenWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', setScreenWidth);

    return (
      () => {
        window.removeEventListener('resize', setScreenWidth);
      }
    )
  }, [screenWidth])

  /* diff rendering based on screen width */

  if (screenWidth < 1024) {
    return (
      <div className={styles.Menu}>
        <button 
          className={styles.Menu_btn} 
          onClick={() => toggleMenu()} 
        >
          <img src={menu} alt="Hamburger menu icon" />
        </button>

        <nav className={`
          ${styles.Menu___hidden}
          ${isActive ? styles.Menu___visible : ""}
        `}>
          <button 
            className={`
              ${styles.Menu_btn}
              ${styles.Menu_closeBtn}
            `} 
            onClick={() => toggleMenu()}
          >
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
        <div className={`
          ${styles.Menu_backdrop___hidden}
          ${isActive ? styles.Menu_backdrop___visible : ""}
        `}></div>
      </div>
    )
  }

  return (
    <nav className={styles.Menu___desktop}>
      <ul>
        <li>Home</li>
        <li>New</li>
        <li>Popular</li>
        <li>Trendind</li>
        <li>Categories</li>
      </ul>
    </nav>
  )

}