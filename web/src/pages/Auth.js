/* eslint-disable */

import styles from "./Grad0.module.css";
import { NavLink, Link } from "react-router-dom";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Auth = () => {
    // wallet props 받아오기
    const location = useLocation();
    const walletInfo = { ...location.state };

    const [allAgreed, setAllAgreed] = useState(false);
    const [agreements, setAgreements] = useState({
        termAgreed: false,
        personallInfoAgreed: false,
        provisionAgreed: false,
        locationAgreed: false,
        serviceAlramAgreed: false,
    });

    const handleAgreementChange = (e) => {
        const { name, checked } = e.target;

        setAgreements((prevAgreements) => ({ ...prevAgreements, [name]: checked }));
        const allChecked = Object.values({ ...agreements, [name]: checked }).every((value) => value === true);
        setAllAgreed(allChecked);
    };

    const handleAllAgreedChange = (e) => {
        const { checked } = e.target;
        setAgreements((prevAgreements) =>
            Object.keys(prevAgreements).reduce((acc, curr) => ({ ...acc, [curr]: checked }), {}),
        );
        setAllAgreed(checked);
    };

    return (
        <div className={styles.div}>
            <div className={styles.inner}>
                <div className={styles.iconParent}>
                    <img className={styles.icon} alt="" src="/icon1.svg" />
                    <div className={styles.avatar} />
                    <div className={styles.adminA}>{walletInfo.walletAddress}</div>
                    <img className={styles.iconarrowDown} alt="" src="/iconarrowdown1.svg" />
                </div>
            </div>
            <div className={styles.bodyWrapper}>
                <div className={styles.body}>
                    <div className={styles.body}>
                        개인정보 수집 및 이용 동의
                        <div className={styles.subtitle}>Link Ajou</div>
                        <div className={styles.subtitle2}>개인정보 수집 및 이용에 대한 안내</div>
                        <div className={styles.subtitle3}>
                            Link Ajou는 개인정보보호법 제30조에 따라 정보주체의 개인정보를 보호하고 이와 관련한 고충을
                            신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리 방침을
                            수립·공개합니다.
                            <br />
                            <br />
                            ○ 이 개인정보처리방침은 2021년 8월 1부터 적용됩니다.
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <div className={styles.subtitle2}>1. 개인정보의 처리 목적</div>
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <div className={styles.subtitle2}>2. 개인정보의 처리 및 보유 기간</div>
                            <br />
                            <br />
                            <br />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.sidebar}>
                <NavLink
                    state={{
                        walletAddress: walletInfo.walletAddress,
                        currentBalance: walletInfo.currentBalance,
                        chainId: walletInfo.chainId,
                    }}
                    to="/main"
                    style={{ textDecoration: "none" }}
                >
                    <div className={styles.logo}>
                        <img className={styles.icIcon} alt="" src="/ic1.svg" />
                        <div className={styles.linkAjou}>Link Ajou</div>
                    </div>
                </NavLink>
                <div className={styles.nav}></div>
                <div className={styles.iconGroup}>
                    <img className={styles.icon} alt="" src="/icon1.svg" />
                    <div className={styles.avatar} />
                    <div className={styles.adminA}>{walletInfo.walletAddress}</div>
                    <img className={styles.iconarrowDown} alt="" src="/iconarrowdown1.svg" />
                </div>
            </div>
        </div>
    );
};

export default Auth;
