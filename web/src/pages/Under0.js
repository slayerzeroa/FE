import styles from "./Under0.module.css";
import { NavLink, Link } from "react-router-dom";
import React from "react";

const Under0 = () => {
    return (
        <div className={styles.div}>
            <div className={styles.inner}>
                <div className={styles.iconParent}>
                    <img className={styles.icon} alt="" src="/icon1.svg" />
                    <div className={styles.avatar} />
                    <div className={styles.adminA}>Admin A</div>
                    <img className={styles.iconarrowDown} alt="" src="/iconarrowdown1.svg" />
                </div>
            </div>
            <div className={styles.bodyWrapper}>
                <div className={styles.body} />
            </div>
            <div className={styles.sidebar}>
                <NavLink to="/main" style={{ textDecoration: "none" }}>
                    <div className={styles.logo}>
                        <img className={styles.icIcon} alt="" src="/ic1.svg" />
                        <div className={styles.linkAjou}>Link Ajou</div>
                    </div>
                </NavLink>
                <div className={styles.nav}>
                    <Link to="/under1" style={{ textDecoration: "none", color: "var(--text-10)" }}>
                        <div className={styles.menu}>
                            <img className={styles.iconarrowDown} alt="" src="/iconelement3.svg" />
                            <div className={styles.div1}>졸업생 데이터 분석</div>
                        </div>
                    </Link>
                    <Link to="/under2" style={{ textDecoration: "none", color: "var(--text-10)" }}>
                        <div className={styles.menu}>
                            <img className={styles.iconarrowDown} alt="" src="/iconcard.svg" />
                            <div className={styles.div1}>맞춤형 활동 추천</div>
                        </div>
                    </Link>
                    <Link to="/qa1" style={{ textDecoration: "none", color: "var(--text-10)" }}>
                        <div className={styles.menu2}>
                            <div className={styles.menu}>
                                <img className={styles.iconarrowDown} alt="" src="/icontransactionminus1.svg" />
                                <b className={styles.qa}>{`Q&A`}</b>
                            </div>
                        </div>
                    </Link>
                    <Link to="/under3" style={{ textDecoration: "none", color: "var(--text-10)" }}>
                        <div className={styles.menu}>
                            <img className={styles.iconarrowDown} alt="" src="/iconactivity.svg" />
                            <div className={styles.div1}>토큰 환전</div>
                        </div>
                    </Link>
                </div>
                <div className={styles.iconGroup}>
                    <img className={styles.icon} alt="" src="/icon1.svg" />
                    <div className={styles.avatar} />
                    <div className={styles.adminA}>Admin A</div>
                    <img className={styles.iconarrowDown} alt="" src="/iconarrowdown1.svg" />
                </div>
            </div>
        </div>
    );
};

export default Under0;
