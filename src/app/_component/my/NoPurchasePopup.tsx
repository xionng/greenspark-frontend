import React from "react";
import styles from "./NoPurchasePopup.module.css";

import IconPoint from "@/../public/icon/point_icon.svg";

type NoPurchasePopupProps = {
  onClose: () => void;
  availablePoints: number;
};

const NoPurchasePopup: React.FC<NoPurchasePopupProps> = ({ onClose, availablePoints }) => {
  return (
    <>
      <div className={styles.overlay} onClick={onClose}>
        <div className={styles.popup}>
          <div className={styles.popupBox} onClick={e => e.stopPropagation()}>
            <div className={styles.topContainer}>
              <h1>포인트가 부족해요 :(</h1>
              <p>포인트를 더 모아 구매해보세요!</p>
              <p style={{ fontSize: "1.4rem", fontWeight: "600" }}>
                포인트는 <span style={{ color: "#19E407" }}>어떻게</span> 모으나요?
              </p>
              <ul>
                <li>• 출석 체크 50P</li>
                <li>• 퀴즈 정답 100P</li>
              </ul>
            </div>
            <div className={styles.pointMent}>
              <p>현재 포인트</p>
              <div className={styles.pointContainer}>
                <p>{availablePoints.toLocaleString()}</p>
                <IconPoint className={styles.iconPointSmall} />
              </div>
            </div>

            <button className={styles.submitBtn} onClick={onClose}>
              확인
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoPurchasePopup;
