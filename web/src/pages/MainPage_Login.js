/* eslint-disable */

// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styles from "./MainPage_Login.module.css";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import prohibit from "../components/alarm/prohibit";

const MainPage_Login = () => {
    const navigate = useNavigate();

    // wallet props 받아오기
    const location = useLocation();
    const walletInfo = { ...location.state };

    // length가 0이면 undefined
    if (Object.keys(walletInfo).length === 0) {
        return prohibit();
    }

    const go_grad = () => {
        navigate("/grad0", {
            state: {
                walletAddress: walletInfo.walletAddress,
                currentBalance: walletInfo.currentBalance,
                chainId: walletInfo.chainId,
            },
        });
    };

    const go_under = () => {
        navigate("/under0", {
            state: {
                walletAddress: walletInfo.walletAddress,
                currentBalance: walletInfo.currentBalance,
                chainId: walletInfo.chainId,
            },
        });
    };

    const go_auth = () => {
        navigate("/auth", {
            state: {
                walletAddress: walletInfo.walletAddress,
                currentBalance: walletInfo.currentBalance,
                chainId: walletInfo.chainId,
            },
        });
    };

    return (
        <div className={styles.div}>
            <div className={styles.sidebar}>
                <NavLink
                    state={{
                        walletAddress: walletInfo.walletAddress,
                        currentBalance: walletInfo.currentBalance,
                        chainId: walletInfo.chainId,
                    }}
                    style={{ border: "none", textDecoration: "none" }}
                >
                    <div className={styles.logo}>
                        <img className={styles.icIcon} alt="" src="/ic1.svg" />
                        <div className={styles.linkAjou}>Link Ajou</div>
                    </div>
                </NavLink>
                <div className={styles.nav}>
                    <div className={styles.menu}>
                        <img className={styles.iconcard} alt="" src="/iconelement3.svg" />
                        <div className={styles.div1}>졸업생 데이터 분석</div>
                    </div>
                    <div className={styles.menu}>
                        <img className={styles.iconcard} alt="" src="/iconcard.svg" />
                        <div className={styles.div1}>맞춤형 활동 추천</div>
                    </div>
                    <div className={styles.menu2}>
                        <div className={styles.icontransactionMinusParent}>
                            <img className={styles.iconcard} alt="" src="/icontransactionminus.svg" />
                            <b className={styles.qa}>{`Q&A`}</b>
                        </div>
                    </div>
                    <div className={styles.menu}>
                        <img className={styles.iconcard} alt="" src="/iconactivity.svg" />
                        <div className={styles.div1}>토큰 환전</div>
                    </div>
                </div>
                <div className={styles.iconParent}>
                    <img className={styles.icon} alt="" src="/icon1.svg" />
                    <div className={styles.avatar} />
                    <div className={styles.adminA}>{walletInfo.walletAddress}</div>
                    <img className={styles.iconcard} alt="" src="/iconarrowdown1.svg" />
                </div>
            </div>
            <div className={styles.body}>
                <div className={styles.body1}>
                    <img className={styles.bgIcon} alt="" src="/bg1@2x.png" />
                    <div className={styles.lH}>
                        <div onClick={go_under} style={{ textDecoration: "none" }}>
                            <button className={styles.compButton}>
                                <div className={styles.text}>재학생</div>
                            </button>
                        </div>
                        <div onClick={go_grad} style={{ textDecoration: "none" }}>
                            <button className={styles.compButton}>
                                <div className={styles.text}>졸업생</div>
                            </button>
                        </div>
                        <div onClick={go_auth} style={{ textDecoration: "none" }}>
                            <button className={styles.compButton}>
                                <div className={styles.text}>재학생/졸업생</div>
                                <div className={styles.text}>인증하기</div>
                            </button>
                        </div>
                    </div>
                    <b className={styles.title}>
                        <p className={styles.p}>LINK AJOU</p>
                        <p className={styles.p}>졸업생과 재학생의 만남</p>
                    </b>
                </div>
            </div>
        </div>
    );
};

export default MainPage_Login;
