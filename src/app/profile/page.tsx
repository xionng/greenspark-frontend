"use client";
import React, { useState } from "react";
import styles from "./Profile.module.css";
import IconLogo from "@/../public/icon/login_logo.svg";
import { useRouter } from "next/navigation";
import axios from "axios";
export default function Profile() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const router = useRouter();
  const goHome = async () => {
    try {
      const res = await axios.post(
        `${API_URL}/users/info`,
        {
          householdMembers: numResidents,
          electricityDueDate: paymentDay
        },
        { withCredentials: true }
      );
      if (res.data.success) {
        console.log("유저 정보 입력 성공");
        router.push("/main");
      } else {
        console.log("API 호출 실패:", res.data.message);
      }
    } catch (error) {
      console.log("네트워킹 오류", error);
    }
  };
  // 전기요금 납부일
  const [paymentDay, setPaymentDay] = useState<number>(1);
  // 거주 인원
  const [numResidents, setNumResidents] = useState<number>(1);

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const residents = Array.from({ length: 9 }, (_, i) => i + 1);

  const handlePaymentDayChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPaymentDay(Number(event.target.value));
  };

  const handleResidentsChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setNumResidents(value === "10명 이상" ? 10 : Number(value));
  };

  return (
    <>
      <div className={styles.topBar}>
        <IconLogo className={styles.logo} />
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
                value={numResidents === 10 ? "10명 이상" : numResidents}
                onChange={handleResidentsChange}
              >
                {residents.map(count => (
                  <option key={count} value={count}>
                    {count}명
                  </option>
                ))}
                <option value="10명 이상">10명 이상</option>
              </select>
              과 거주 중이에요
            </p>
          </div>
        </div>
        <div className={styles.btnWrap} onClick={goHome}>
          <button type="button" className={styles.homeBtn}>
            그린스파크 바로가기
          </button>
        </div>
      </div>
    </>
  );
}
