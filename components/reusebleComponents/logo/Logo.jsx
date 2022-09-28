import styles from '../../../styles/Logo.module.scss'
// import styles from '../../../styles/Logo.module.scss'
import Image from 'next/image'

const Logo = () => {



  return (
    <div className={styles.logo}>
      <div className={styles.logoWrapper}>
        <div className={styles.logoCircle}></div>
        <div className={styles.logoItems}>
          <div className={styles.logoItemsTitle}>
            <Image
              src="/tipsterLogo.svg"
              alt="Picture of the author"
              width={360}
              height={82}
            />
          </div>
          <div className={styles.logoBox}>
            <Image
              className={styles.logoTitle}
              src="/tipster.png"
              alt="Picture of the author"
              width={238}
              height={227}
            />
            <div className="logoColorsBlock">
              <button className={styles.colorsBtn}>
                <Image
                  src="/yellow.svg"
                  alt="Picture of the author"
                  width={38}
                  height={38}
                />
              </button>
              <button className={styles.colorsBtn}>
                <Image
                  src="/purple.svg"
                  alt="Picture of the author"
                  width={38}
                  height={38}
                />
              </button>
              <button className={styles.colorsBtn}>
                <Image
                  src="/black.svg"
                  alt="Picture of the author"
                  width={38}
                  height={38}
                />
              </button>
              <button  className={styles.colorsBtn}>
                <Image
                  src="/grey.svg"
                  alt="Picture of the author"
                  width={38}
                  height={38}
                />
              </button>
            </div>
          </div>
          <button className={styles.logoBtn}>Learn more</button>
        </div>
      </div>
    </div>
  )
}

export default Logo
