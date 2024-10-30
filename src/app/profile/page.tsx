"use client";
import React, { useState } from "react";
import styles from "./Profile.module.css";

export default function Profile() {
  // 전기요금 납부일
  const [paymentDay, setPaymentDay] = useState<number>(1);
  // 거주 인원
  const [numResidents, setNumResidents] = useState<number>(1);

  const days = Array.from({ length: 28 }, (_, i) => i + 1);
  const residents = Array.from({ length: 5 }, (_, i) => i + 1);

  const handlePaymentDayChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPaymentDay(Number(event.target.value));
  };

  const handleResidentsChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setNumResidents(Number(event.target.value));
  };

  return (
    <>
      <div className={styles.topBar}>
        <div className={styles.logo}>로고</div>
      </div>
      <div className={styles.bodyWrapper}>
        <div className={styles.bodyContainer}>
          <div className={styles.optionContainer}>
            <p className={styles.optionMent}>나의 전기요금 납부일은</p>
            <p className={styles.selectMent}>
              매월
              <select
                className={styles.dropDown}
                value={paymentDay}
                onChange={handlePaymentDayChange}
              >
                {days.map(day => (
                  <option key={day} value={day}>
                    {day}일
                  </option>
                ))}
              </select>
              이에요
            </p>
          </div>

          <div className={styles.optionContainer}>
            <p className={styles.optionMent}>나는 현재 나를 포함</p>
            <p className={styles.selectMent}>
              총
              <select
                className={styles.dropDown}
                value={numResidents}
                onChange={handleResidentsChange}
              >
                {residents.map(count => (
                  <option key={count} value={count}>
                    {count}명
                  </option>
                ))}
              </select>
              과 거주 중이에요
            </p>
          </div>
        </div>
        <div className={styles.btnWrap}>
          <button type="button" className={styles.homeBtn}>
            그린스파크 바로가기
          </button>
        </div>
      </div>
    </>
  );
}
