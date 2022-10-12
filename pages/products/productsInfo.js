import Image from 'next/image';
import React, { useState } from 'react';
import styles from '../../styles/ProductsInfo.module.scss';

const ProductsInfo = () => {
  const [btnColorActive, setBtnColorActive] = useState([
    true,
    true,
    true,
    true,
    true
  ]);
  const [productsInfo, setProductsInfo] = useState('1');

  const dataInfo = ['1'];

  const handleChangeProductsInfo = (id) => {
    setProductsInfo(id.currentTarget.id);

    // code to change bntActive color
    const active = Number(id.currentTarget.id);
    const newBtnArr = [];
    btnColorActive.map((item, i) => {
      item = true;
      if (i + 1 === active) {
        item = false;
      }
      newBtnArr.push(item);
      setBtnColorActive(newBtnArr);
    });
  };
  return (
    <>
      <div className={styles.products}>
        <div className={styles.container}>
          <div className={styles.productsItems}>
            <div className={styles.productsLeftSide}>
              <button
                id={1}
                onClick={handleChangeProductsInfo}
                className={
                  btnColorActive[0]
                    ? styles.productsLeftSide__btn
                    : styles.productsInfoActive
                }
              >
                <div className={styles.LeftSide__imgBox}>
                  <Image
                    src="/productsInfo1.svg"
                    alt="Products page"
                    width={48}
                    height={48}
                  />
                </div>
                <p className={styles.LeftSide__text}>
                  The Next Generation IoT.
                </p>
              </button>

              <button
                id={2}
                onClick={handleChangeProductsInfo}
                className={
                  btnColorActive[1]
                    ? styles.productsLeftSide__btn
                    : styles.productsInfoActive
                }
              >
                <div className={styles.LeftSide__imgBox}>
                  <Image
                    src="/productsInfo2.svg"
                    alt="Products page"
                    width={56}
                    height={56}
                  />
                </div>
                <p className={styles.LeftSide__text}>
                  Can be attached to different types of hardhat.
                </p>
              </button>

              <button
                id={3}
                onClick={handleChangeProductsInfo}
                className={
                  btnColorActive[2]
                    ? styles.productsLeftSide__btn
                    : styles.productsInfoActive
                }
              >
                <div className={styles.LeftSide__imgBox}>
                  <Image
                    src="/productsInfo3.svg"
                    alt="Products page"
                    width={62}
                    height={62}
                  />
                </div>
                <p className={styles.LeftSide__text}>
                  On-site instalation of Tipster done in a few hours.
                </p>
              </button>

              <button
                id={4}
                onClick={handleChangeProductsInfo}
                className={
                  btnColorActive[3]
                    ? styles.productsLeftSide__btn
                    : styles.productsInfoActive
                }
              >
                <div className={styles.LeftSide__imgBox}>
                  <Image
                    src="/productsInfo4.svg"
                    alt="Products page"
                    width={78}
                    height={78}
                  />
                </div>
                <p className={styles.LeftSide__text}>
                  Real-time data from a construction site and worker location
                  data.
                </p>
              </button>

              <button
                id={5}
                onClick={handleChangeProductsInfo}
                className={
                  btnColorActive[4]
                    ? styles.productsLeftSide__btn
                    : styles.productsInfoActive
                }
              >
                <div className={styles.LeftSide__imgBox}>
                  <Image
                    src="/productsInfo5.svg"
                    alt="Products page"
                    width={68}
                    height={68}
                  />
                </div>
                <p className={styles.LeftSide__text}>
                  Well structured analytics and reports for Project Leads.
                </p>
              </button>
            </div>

            <div className={styles.productsRightSide}>
              {dataInfo.map((item) => {
                if (productsInfo === '1') {
                  return (
                    <div
                      key={item}
                      className={`${styles.wrapper} ${styles.productsRightSideWrapper}`}
                    >
                      <div
                        className={`${styles.productsRightSide__imgFirst} ${styles.productsRightSide__imgBox}`}
                      >
                        <Image
                          src="/productsInfo1.1.svg"
                          alt="Products page"
                          width={68}
                          height={68}
                        />
                      </div>
                      <p className={styles.productsRightSide__text}>
                        By 2025, it is expected that IoT devices will generate
                        roughly 73.1 ZB of data. That's roughly 4x the 18.3 ZB
                        generated in 2019. With all this data, the use of AI and
                        machine learning will be essential. Because of this,
                        Gartner expects that over 80% of IoT initiatives will be
                        paired with AI by the end of 2022.
                      </p>
                    </div>
                  );
                } else if (productsInfo === '2') {
                  return (
                    <div
                      key={item}
                      className={`${styles.wrapper} ${styles.productsRightSideWrapper}`}
                    >
                      <h4 className={styles.rightSide__secondBoxTextBoldTitle}>
                        Tipster can be attached to any type of hardhat.
                      </h4>
                      <div
                        className={`${styles.productsRightSide__imgSecond} ${styles.productsRightSide__imgBox}`}
                      >
                        <div className={styles.rightSide__secondBox}>
                          <Image
                            src="/productsInfo2.1.svg"
                            alt="Products page"
                            width={68}
                            height={68}
                          />
                          <p className={styles.rightSide__secondBoxTextBold}>
                            Class G
                          </p>
                          <p>General</p>
                          <p>2.200</p>
                          <p>volts</p>
                        </div>
                        <div className={styles.rightSide__secondBox}>
                          <Image
                            src="/productsInfo2.2.svg"
                            alt="Products page"
                            width={68}
                            height={68}
                          />
                          <p className={styles.rightSide__secondBoxTextBold}>
                            Class E
                          </p>
                          <p>Electrical</p>
                          <p>20.000</p>
                          <p>volts</p>
                        </div>
                        <div className={styles.rightSide__secondBox}>
                          <Image
                            src="/productsInfo2.3.svg"
                            alt="Products page"
                            width={68}
                            height={68}
                          />
                          <p className={styles.rightSide__secondBoxTextBold}>
                            Class C
                          </p>
                          <p>Conductive</p>
                          <p>0</p>
                          <p>volt</p>
                        </div>
                      </div>
                    </div>
                  );
                } else if (productsInfo === '3') {
                  return (
                    <div
                      key={item}
                      className={`${styles.wrapper} ${styles.productsRightSideWrapper}`}
                    >
                      <div
                        className={`${styles.productsRightSide__imgTherd} ${styles.productsRightSide__imgBox}`}
                      >
                        <div className={styles.imgBox}>
                          <div className={styles.imgInner}>
                            <Image
                              src="/productsInfo3.1.svg"
                              alt="Products page"
                              width={68}
                              height={68}
                              margin-right={20}
                            />
                          </div>
                          <Image
                            src="/productsInfo3.2.svg"
                            alt="Products page"
                            width={68}
                            height={68}
                          />
                        </div>
                      </div>
                      <div className={styles.rightSide__box}>
                        <p
                          className={`${styles.productsRightSide__text} ${styles.productsRightSide__textDecor}`}
                        >
                          Environment installation in a short period of time
                        </p>
                        <p
                          className={`${styles.productsRightSide__text} ${styles.productsRightSide__textDecor}`}
                        >
                          The initial Environment installation might be done in
                          a few hours
                        </p>
                        <p
                          className={`${styles.productsRightSide__text} ${styles.productsRightSide__textDecor}`}
                        >
                          Upgrade your environment in a few minutes as
                          construction area grows
                        </p>
                      </div>
                    </div>
                  );
                } else if (productsInfo === '4') {
                  return (
                    <div
                      key={item}
                      className={`${styles.wrapper} ${styles.productsRightSideWrapper}`}
                    >
                      <div
                        className={`${styles.productsRightSide__imgFirst} ${styles.productsRightSide__imgBox}`}
                      >
                        <Image
                          src="/productsInfo4.1.svg"
                          alt="Products page"
                          width={68}
                          height={68}
                        />
                      </div>
                      <div className={styles.rightSide__box}>
                        <p
                          className={`${styles.productsRightSide__text} ${styles.productsRightSide__textDecor}`}
                        >
                          Accurate indoor and outdoor worker location track
                          algorithm
                        </p>
                        <p
                          className={`${styles.productsRightSide__text} ${styles.productsRightSide__textDecor}`}
                        >
                          Real time data monitoring for a construction area
                        </p>
                        <p
                          className={`${styles.productsRightSide__text} ${styles.productsRightSide__textDecor}`}
                        >
                          Accident notifications
                        </p>
                      </div>
                    </div>
                  );
                } else if (productsInfo === '5') {
                  return (
                    <div
                      key={item}
                      className={`${styles.wrapper} ${styles.productsRightSideWrapper}`}
                    >
                      <div
                        className={`${styles.productsRightSide__imgFirst} ${styles.productsRightSide__imgBox}`}
                      >
                        <Image
                          src="/productsInfo5.1.svg"
                          alt="Products page"
                          width={68}
                          height={68}
                        />
                      </div>
                      <div className={styles.rightSide__box}>
                        <p
                          className={`${styles.productsRightSide__text} ${styles.productsRightSide__textDecor}`}
                        >
                          Ability to collect and download report
                        </p>
                        <p
                          className={`${styles.productsRightSide__text} ${styles.productsRightSide__textDecor}`}
                        >
                          Customize data for report accroding to your needs
                        </p>
                        <p
                          className={`${styles.productsRightSide__text} ${styles.productsRightSide__textDecor}`}
                        >
                          Track analytics for every laborer separately
                        </p>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsInfo;
