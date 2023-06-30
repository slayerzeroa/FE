import styles from "./MainPage_Logout.module.css";
import { NavLink } from "react-router-dom";
import React from "react";

const MainPage_Logout = () => {
    return (
        <div className={styles.div}>
            <div className={styles.sidebar}>
                <NavLink to="/main" style={{ textDecoration: "none" }}>
                    <div className={styles.logo}>
                        <img className={styles.icIcon} alt="" src="/ic.svg" />
                        <div className={styles.linkAjou}>Link Ajou</div>
                    </div>
                </NavLink>
                <div className={styles.nav} />
                <div className={styles.compButton}>
                    <b className={styles.text}>Connect</b>
                </div>
            </div>
            <div className={styles.body}>
                <div className={styles.body1}>
                    <img className={styles.bgIcon} alt="" src="/bg1@2x.png" />
                    <div className={styles.lH}>
                        <NavLink to="/under0" style={{ textDecoration: "none", color: "black" }}>
                            <div className={styles.compButton1}>
                                <div className={styles.text1}>재학생</div>
                            </div>
                        </NavLink>
                        <NavLink to="/grad0" style={{ textDecoration: "none", color: "black" }}>
                            <div className={styles.compButton1}>
                                <div className={styles.text1}>졸업생</div>
                            </div>
                        </NavLink>
                        <div className={styles.compButton1}>
                            <div className={styles.text1}>
                                <p className={styles.p}>재학생/졸업생</p>
                                <p className={styles.p}>인증하기</p>
                            </div>
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

export default MainPage_Logout;
