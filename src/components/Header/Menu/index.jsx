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

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  
  return (
    <div className={styles.Menu} >
      <button onClick={() => toggleMenu()} >
        <img src={menu} alt="Hamburger menu icon" />
      </button>
      <nav className={isActive ? styles.Menu_list : styles.Menu_list___hidden} >
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
      <div className={isActive ? styles.Menu_backdrop___active : styles.Menu_backdrop} ></div>
    </div>
  )}

/*   return (
    <nav>
      <ul>
        <li>Home</li>
        <li>New</li>
        <li>Popular</li>
        <li>Trendind</li>
        <li>Categories</li>
      </ul>
    </nav>
  ) */
