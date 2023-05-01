import React from 'react'
import styles from './Banner.module.scss'
import image from './image-web-3-mobile.jpg'

export default function Banner() {
  return (
    <img className={styles.banner} src={image} alt="banner of different geometric shapes" />
  )
}
