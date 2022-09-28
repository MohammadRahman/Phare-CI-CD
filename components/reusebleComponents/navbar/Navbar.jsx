import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import styles from '../../../styles/Navbar.module.scss'
import { data } from './NavbarData'

console.log(data)

const Navbar = () => {
  const [active, setActive] = useState(false)
  console.log(active)

  return (
    <div className={styles.main}>
  
        <div className={styles.wrapper}>
          <div
            className={styles.hamburgerBox}
            onClick={() => setActive(!active)}
          >
            <div className={active ? styles.activeHamburger : styles.hamburger}></div>
          </div>
       
      </div>

      <div className={active ? styles.activeNavbar : styles.navbar}>
        <ul className={styles.navbarItems}>
          <div
            onClick={() => setActive(!active)}
            className={styles.crossImgBox}
          >
            <div className={styles.crossImg}></div>
          </div>
          {data.map((item, i) => {
            return (
              <li className={styles.navbarItem} key={i}>
                <div className={styles.sidebarWrapperImg}>
                  <Image
                    className="sidebar__img"
                    src={item.icon}
                    width={20}
                    height={20}
                  />
                </div>
                <Link href={item.link}><a className={styles.navbarItemsLink}>{item.title}</a></Link>

              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Navbar
