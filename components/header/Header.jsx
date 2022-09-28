import React from 'react'
import Navbar from '../reusebleComponents/Navbar/Navbar'
import styles from '../../styles/Header.module.scss'
import logoImg from '../../public/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import logoText from '../../public/logoText.svg'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerLanguages}>
          <Link href="/">
            <a className={`${styles.language} ${styles.languageActive}`} >Eng</a>
          </Link>
          <Link  href="/">
            <a className={styles.language}>Fra</a>
          </Link>
          <Link href="/">
            <a className={styles.language}>Ger</a>
          </Link>
        </div>
        <div className={styles.headerLogo}>
          <div className={styles.headerLogoImg}>
            <Image width={28} height={28} src={logoImg} />
          </div>
          <Image className={styles.headerLogoText} src={logoText} />
        </div>
        <Navbar />
      </div>
    </div>
  )
}

export default Header
