import React from 'react'
import styles from './Banner.module.scss'
import imageMobile from './image-web-3-mobile.jpg'
import imageDesktop from './image-web-3-desktop.jpg'

export default function Banner() {
  return (
    <picture className={styles.banner} >
      <source srcSet={imageDesktop} media='(min-width: 1280px)' />
      <img src={imageMobile} alt="banner containing different geometric shapes" />
    </picture>
  )
}
