// TermsModal.js
import React, { useState } from "react";
import styles from "./TermsModal.module.css"; // CSS 모듈을 가져옵니다.

const TermsModal = ({ title, content, isChecked }) => {
    // title과 content props를 추가합니다.
    const [isOpen, setIsOpen] = useState(false);

    const handleCheckboxClick = () => {
        setIsOpen(true);
    };

    const handleCloseClick = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <input type="checkbox" onClick={handleCheckboxClick} checked={isChecked} />
            <label>{title}</label> {/* title prop을 사용합니다. */}
            {isOpen && (
                <div className={styles.modal}>
                    <h2>{title}</h2> {/* title prop을 사용합니다. */}
                    <p>{content}</p> {/* content prop을 사용합니다. */}
                    <button onClick={handleCloseClick}>닫기</button>
                </div>
            )}
        </div>
    );
};

export default TermsModal;
