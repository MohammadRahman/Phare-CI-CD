import React, { useState } from 'react'
// import $ from "jquery"
import styles from '../../../styles/Logo.module.scss'
// import styles from '../../../styles/Logo.module.scss'
import Image from 'next/image'
import tipster from '/public/tipster.svg'
import clsx from 'clsx';



var $ = require('jquery')
if (typeof window !== 'undefined') {
  // Client-side-only code
  window.$ = window.jQuery = require('jquery')
}

import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import dynamic from 'next/dynamic'

const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false,
})


const Logo = () => {
  //Owl Carousel Settings
  const options = {
    loop: true,
    center: true,
    items: 3,
    margin: 200,
    autoplay: true,
    autoplayTimeout: 888500,
    smartSpeed: 450,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  }


  return (
    <>
      <div className={styles.logo}>
        <div className={styles.logoWrapper}>
          <div className={styles.logoCircle}></div>
          <OwlCarousel
            id={styles.customerTestimonoals}
            className="owl-carousel owl-theme"
            {...options}
          >
            <div className={styles.item}>
              1
              <Image
                src="/tipster.svg"
                alt="Picture of the author"
                width={238}
                height={227}
              />
            </div>
            <div className={styles.item}>
              2
              <Image
                src="/tipster.svg"
                alt="Picture of the author"
                width={238}
                height={227}
              />
            </div>
            <div className={styles.item}>
              3
              <Image
                src="/tipster.svg"
                alt="Picture of the author"
                width={238}
                height={227}
              />
            </div>
          </OwlCarousel>
        </div>
      </div>
    </>
  )
}

export default Logo

{
  /* <div className={styles.logoItems}>
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
                  <button className={styles.colorsBtn}>
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
            </div> */
}
