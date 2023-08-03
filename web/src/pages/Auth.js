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
                    <form>
                        <label>회원정보 입력 및 이용약관 동의</label>
                        <ul>
                            <li>
                                <input
                                    type="checkbox"
                                    name="termAgreed"
                                    checked={agreements.termAgreed}
                                    onChange={handleAgreementChange}
                                />
                                <label>[필수] 이용약관 동의</label>
                            </li>
                            <li>
                                <input
                                    type="checkbox"
                                    name="personallInfoAgreed"
                                    checked={agreements.personallInfoAgreed}
                                    onChange={handleAgreementChange}
                                />
                                <label>[필수] 개인정보 수집 및 이용 동의</label>
                            </li>
                            <li>
                                <input
                                    type="checkbox"
                                    name="provisionAgreed"
                                    checked={agreements.provisionAgreed}
                                    onChange={handleAgreementChange}
                                />
                                <label>[필수] 서비스 이용약관 동의</label>
                            </li>
                            <li>
                                <input
                                    type="checkbox"
                                    name="locationAgreed"
                                    checked={agreements.locationAgreed}
                                    onChange={handleAgreementChange}
                                />
                                <label>[필수] 위치정보 이용약관 동의</label>
                            </li>

                            <li>
                                <input
                                    type="checkbox"
                                    name="allAgreed"
                                    checked={allAgreed}
                                    onChange={handleAllAgreedChange}
                                />
                                <label>모두 동의합니다.</label>
                            </li>

                            <li>
                                <NavLink
                                    state={{
                                        walletAddress: walletInfo.walletAddress,
                                        currentBalance: walletInfo.currentBalance,
                                        chainId: walletInfo.chainId,
                                    }}
                                    to="/main"
                                >
                                    <button type="submit">확인</button>
                                </NavLink>
                            </li>
                        </ul>
                    </form>
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
