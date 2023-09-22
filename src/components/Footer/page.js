import Link from 'next/link'
import React from 'react'
import styles from './footer.module.css'
const Footer = () => {
  return (
    <div className={styles.container} >
        <div>
        <Link href='/beranda' className={styles.logo}>MBC Porto</Link>
        </div>
        <div className={styles.copyright}> Copyright ©2023 - CAAS MBC 2023. All Rights Reserved. </div>
    </div>
  )
}

export default Footer