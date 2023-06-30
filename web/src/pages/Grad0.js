import styles from "./Grad0.module.css";
import { NavLink, Link } from "react-router-dom";
import React from "react";

const Grad0 = () => {
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
                <NavLink to="/main" style={{ textDecoration: "none", color: "#0073e8" }}>
                    <div className={styles.logo}>
                        <img className={styles.icIcon} alt="" src="/ic1.svg" />
                        <div className={styles.linkAjou}>Link Ajou</div>
                    </div>
                </NavLink>
                <div className={styles.nav}>
                    <Link to="/grad1" style={{ textDecoration: "none", color: "var(--text-10)" }}>
                        <div className={styles.menu}>
                            <img className={styles.iconarrowDown} alt="" src="/iconelement3.svg" />
                            <div className={styles.div1}>나의 정보</div>
                        </div>
                    </Link>
                    <Link to="/grad2" style={{ textDecoration: "none", color: "var(--text-10)" }}>
                        <div className={styles.menu}>
                            <img className={styles.iconarrowDown} alt="" src="/iconcard.svg" />
                            <div className={styles.div1}>동문 데이터 분석</div>
                        </div>
                    </Link>
                    <div className={styles.menu2}>
                        <Link to="/qa" style={{ textDecoration: "none", color: "var(--text-10)" }}>
                            <div className={styles.menu}>
                                <img className={styles.iconarrowDown} alt="" src="/icontransactionminus1.svg" />
                                <b className={styles.qa}>{`Q&A`}</b>
                            </div>
                        </Link>
                    </div>
                    <Link to="/grad3" style={{ textDecoration: "none", color: "var(--text-10)" }}>
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

export default Grad0;
