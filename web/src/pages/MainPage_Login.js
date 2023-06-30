// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styles from "./MainPage_Login.module.css";
import React from "react";

const MainPage_Login = () => {
    return (
        <div className={styles.div}>
            <div className={styles.sidebar}>
                <NavLink to="/main" style={{ textDecoration: "none" }}>
                    <div className={styles.logo} to="/main">
                        <img className={styles.icIcon} alt="" src="/ic1.svg" />
                        <div className={styles.linkAjou} to="/main">
                            Link Ajou
                        </div>
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
                    <div className={styles.adminA}>Admin A</div>
                    <img className={styles.iconcard} alt="" src="/iconarrowdown1.svg" />
                </div>
            </div>
            <div className={styles.body}>
                <div className={styles.body1}>
                    <img className={styles.bgIcon} alt="" src="/bg1@2x.png" />
                    <div className={styles.lH}>
                        <NavLink to="/under0" style={{ textDecoration: "none" }}>
                            <div className={styles.compButton}>
                                <div className={styles.text}>재학생</div>
                            </div>
                        </NavLink>
                        <NavLink to="/grad0" style={{ textDecoration: "none" }}>
                            <div className={styles.compButton}>
                                <div className={styles.text}>졸업생</div>
                            </div>
                        </NavLink>
                        <div className={styles.compButton}>
                            <div className={styles.text}>
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

export default MainPage_Login;
