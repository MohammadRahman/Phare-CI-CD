import { Navigation } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

import styles from '../../styles/Logo.module.scss'

import React, { useState } from 'react'
import Image from 'next/image'

import tipsterYellow from '../../public/tipsterYellow.svg'
import tipsterPurple from '../../public/tipsterPurple.svg'
import tipsterBlack from '../../public/tipsterBlack.svg'
import tipsterGrey from '../../public/tipsterGrey.svg'
import Link from 'next/link'

const Logo = () => {
  const [currentImage, setCurrentImage] = useState(tipsterYellow)

  const [images, setImages] = useState([
    tipsterYellow,
    tipsterPurple,
    tipsterBlack,
    tipsterGrey,
  ])

  const handleChangeTipsterColor = (clickedIdBtn) => {
    images.map((item, i) => {
      if (clickedIdBtn.currentTarget.id == i) {
        setCurrentImage(item)
      }
    })
  }

  return (
    <div className={styles.logo}>
      <div className={styles.logoWrapper}>
        <div className={styles.logoCircle}></div>

        <Swiper
          // install Swiper modules
          className={styles.swiper}
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={3}
          centeredSlides={true}
          navigation
          loop={true}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide
            className={`${styles.swiperSlide} ${styles.swiperSlideFirst}`}
          >
            <div className={styles.swiperSlideImg}>
              <Image
                src={currentImage}
                alt="Picture of the author"
                layout="fill"
              />
            </div>
            <div className={styles.swiperSlideBtnBox}>
              <button
                id={0}
                onClick={handleChangeTipsterColor}
                className={styles.swiperSlideBtn}
              >
                <Image
                  src="/yellow.svg"
                  alt="yellow button"
                  width={38}
                  height={38}
                />
              </button>
              <button
                id={1}
                onClick={handleChangeTipsterColor}
                className={styles.swiperSlideBtn}
              >
                <Image
                  src="/purple.svg"
                  alt="yellow button"
                  width={38}
                  height={38}
                />
              </button>
              <button
                id={2}
                onClick={handleChangeTipsterColor}
                className={styles.swiperSlideBtn}
              >
                <Image
                  src="/black.svg"
                  alt="yellow button"
                  width={38}
                  height={38}
                />
              </button>
              <button
                id={3}
                onClick={handleChangeTipsterColor}
                className={styles.swiperSlideBtn}
              >
                <Image
                  src="/grey.svg"
                  alt="yellow button"
                  width={38}
                  height={38}
                />
              </button>
            </div>
          </SwiperSlide>

          <SwiperSlide className={styles.swiperSlide}>
            <div className={styles.swiperSlideImg}>
              <Image
                src="/platform.svg"
                alt="Picture of the author"
                layout="fill"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <div className={styles.swiperSlideImg}>
              <Image src="/api.svg" alt="Picture of the author" layout="fill" />
            </div>
          </SwiperSlide>
        </Swiper>

        <Link href="/products">
          <a className={`${styles.logoBtn} ${styles.logoBtn__link}`}>
            Learn more
          </a>
        </Link>
        
      </div>
    </div>
  )
}

export default Logo
