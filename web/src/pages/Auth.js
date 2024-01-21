/* eslint-disable */

import styles from "./Auth.module.css";
import { NavLink, Link } from "react-router-dom";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import prohibit from "../components/alarm/prohibit";
import { Button } from "react-bootstrap";
import check_alarm from "../components/alarm/check_alarm";
import auth_alarm from "../components/alarm/auth_alarm";
import TermsModal from "../components/TermsModal"; // TermsModal 컴포넌트를 가져옵니다.
import TermsOfUse from "../public/TermsOfUse"; // TermsModal 컴포넌트를 가져옵니다.

const Auth = () => {
    // wallet props 받아오기
    const location = useLocation();
    const walletInfo = { ...location.state };

    // length가 0이면 undefined
    if (Object.keys(walletInfo).length === 0) {
        return prohibit();
    }

    const [allAgreed, setAllAgreed] = useState(false);
    const [agreements, setAgreements] = useState({
        termAgreed: false,
        personallInfoAgreed: false,
        provisionAgreed: false,
        locationAgreed: false,
        serviceAlramAgreed: false,
    });

    const navigate = useNavigate();

    const ischecked = () => {
        if (agreements.termAgreed && agreements.personallInfoAgreed && agreements.provisionAgreed) {
            return (
                auth_alarm(),
                navigate("/main", {
                    state: {
                        walletAddress: walletInfo.walletAddress,
                        currentBalance: walletInfo.currentBalance,
                        chainId: walletInfo.chainId,
                    },
                })
            );
        } else {
            return check_alarm();
        }
    };

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
                    <div className={styles.bodyInner}>
                        <div className={styles.innerText}>
                            <label> 회원정보 입력 및 이용약관 동의</label>
                            <ul>
                                <div>
                                    <TermsModal
                                        title={TermsOfUse[0]["title"]}
                                        content={TermsOfUse[0]["content"]}
                                        isChecked={agreements.termAgreed}
                                    />
                                </div>
                                <div>
                                    <TermsModal
                                        title={TermsOfUse[1]["title"]}
                                        content={TermsOfUse[1]["content"]}
                                        isChecked={agreements.termAgreed}
                                    />
                                </div>
                                <div>
                                    <TermsModal
                                        title={TermsOfUse[2]["title"]}
                                        content={TermsOfUse[2]["content"]}
                                        isChecked={agreements.termAgreed}
                                    />
                                </div>
                                <div>
                                    <label></label>
                                </div>
                                <div>
                                    <input
                                        type="checkbox"
                                        name="allAgreed"
                                        checked={allAgreed}
                                        onChange={handleAllAgreedChange}
                                    />
                                    <label> 모두 동의합니다 </label>
                                </div>
                                <div className={styles.button} onClick={ischecked}>
                                    <Button className={styles.button}>
                                        <div className={styles.buttondiv}>확인</div>
                                    </Button>
                                </div>
                            </ul>
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
