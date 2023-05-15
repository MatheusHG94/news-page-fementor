import React from 'react'

export default function News({ imgSrc, order, headline, brief, styles }) {
  return (
    <div className={styles.News} >
        <img src={imgSrc} alt="" />
        <span>{order}</span>
        <h3>{headline}</h3>
        <p>{brief}</p>
    </div>
  )
}
