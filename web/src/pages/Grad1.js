import styles from "./Grad1.module.css";
import { NavLink, Link } from "react-router-dom";
import React from "react";

const Grad1 = () => {
    return (
        <div className={styles.div}>
            <div className={styles.bodyWrapper}>
                <div className={styles.body}>
                    <div className={styles.compInput}>
                        <b className={styles.title}>기본 정보</b>
                        <div className={styles.compInputDefualt}>
                            <div className={styles.title1}>이름</div>
                            <div className={styles.input}>
                                <div className={styles.text}>입력</div>
                            </div>
                        </div>
                        <div className={styles.compInputDefualt}>
                            <div className={styles.title1}>전공</div>
                            <div className={styles.input}>
                                <div className={styles.text}>입력</div>
                            </div>
                        </div>
                        <div className={styles.compInputDefualt}>
                            <div className={styles.title1}>학번</div>
                            <div className={styles.input}>
                                <div className={styles.text}>입력</div>
                            </div>
                        </div>
                        <div className={styles.compInputDefualt}>
                            <div className={styles.title1}>이메일</div>
                            <div className={styles.input}>
                                <div className={styles.text}>입력</div>
                            </div>
                        </div>
                        <div className={styles.areaBtn}>
                            <div className={styles.compBtnDefualt} />
                        </div>
                    </div>
                    <div className={styles.compInput}>
                        <b className={styles.title}>커리어</b>
                        <div className={styles.compDropdownC1}>
                            <div className={styles.title6}>업종</div>
                            <div className={styles.compDropdownDefault}>
                                <div className={styles.contents}>
                                    <div className={styles.text4}>Null</div>
                                    <img className={styles.lcDropdownIcon} alt="" src="/lcdropdown.svg" />
                                </div>
                            </div>
                        </div>
                        <div className={styles.compDropdownC1}>
                            <div className={styles.title6}>직무</div>
                            <div className={styles.compDropdownDefault}>
                                <div className={styles.contents}>
                                    <div className={styles.text4}>Null</div>
                                    <img className={styles.lcDropdownIcon} alt="" src="/lcdropdown.svg" />
                                </div>
                            </div>
                        </div>
                        <div className={styles.compInputDefualt}>
                            <div className={styles.title1}>기업</div>
                            <div className={styles.input}>
                                <div className={styles.text}>입력</div>
                            </div>
                        </div>
                        <div className={styles.compDropdownC1}>
                            <div className={styles.title6}>연차</div>
                            <div className={styles.compDropdownDefault}>
                                <div className={styles.contents}>
                                    <div className={styles.text4}>Null</div>
                                    <img className={styles.lcDropdownIcon} alt="" src="/lcdropdown.svg" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.compInput}>
                        <b className={styles.title10}>학생 경력 검색</b>
                        <div className={styles.compInputDefualt}>
                            <div className={styles.title1}>학점</div>
                            <div className={styles.lH}>
                                <div className={styles.input5}>
                                    <div className={styles.text}>점수 입력</div>
                                </div>
                                <b className={styles.b}>.</b>
                                <div className={styles.input5}>
                                    <div className={styles.text}>점수 입력</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.compInputDefualt}>
                            <div className={styles.title1}>소학회 및 동아리</div>
                            <div className={styles.lH1}>
                                <div className={styles.input5}>
                                    <div className={styles.text}>입력</div>
                                </div>
                                <div className={styles.input8}>
                                    <b className={styles.text11}>+</b>
                                </div>
                            </div>
                        </div>
                        <div className={styles.compInputDefualt}>
                            <div className={styles.title1}>비교과 활동(수상 시 기록 게재)</div>
                            <div className={styles.lH1}>
                                <div className={styles.input5}>
                                    <div className={styles.text}>입력</div>
                                </div>
                                <div className={styles.input8}>
                                    <b className={styles.text11}>+</b>
                                </div>
                            </div>
                        </div>
                        <div className={styles.compInputDefualt}>
                            <div className={styles.title1}>자격증</div>
                            <div className={styles.lH1}>
                                <div className={styles.input5}>
                                    <div className={styles.text}>입력</div>
                                </div>
                                <div className={styles.input8}>
                                    <b className={styles.text11}>+</b>
                                </div>
                            </div>
                        </div>
                        <div className={styles.compInputDefualt}>
                            <div className={styles.title1}>봉사 활동</div>
                            <div className={styles.lH1}>
                                <div className={styles.input5}>
                                    <div className={styles.text}>입력</div>
                                </div>
                                <div className={styles.input8}>
                                    <b className={styles.text11}>+</b>
                                </div>
                            </div>
                        </div>
                        <img className={styles.groupChild} alt="" src="/rectangle-145.svg" />
                        <div className={styles.div2}>저장하기</div>
                    </div>
                </div>
            </div>
            <div className={styles.sidebar}>
                <NavLink to="/main" style={{ textDecoration: "none" }}>
                    <div className={styles.logo}>
                        <img className={styles.icIcon} alt="" src="/ic1.svg" />
                        <div className={styles.linkAjou}>Link Ajou</div>
                    </div>
                </NavLink>
                <div className={styles.nav}>
                    <Link to="/grad1" style={{ textDecoration: "none", color: "var(--text-10)" }}>
                        <div className={styles.menu}>
                            <img className={styles.iconcard} alt="" src="/iconelement31.svg" />
                            <div className={styles.div1}>나의 정보</div>
                        </div>
                    </Link>
                    <Link to="/grad2" style={{ textDecoration: "none", color: "var(--text-10)" }}>
                        <div className={styles.icontransactionMinusParent}>
                            <img className={styles.iconcard} alt="" src="/iconcard.svg" />
                            <div className={styles.div1}>동문 데이터 분석</div>
                        </div>
                    </Link>
                    <Link to="/qa" style={{ textDecoration: "none", color: "var(--text-10)" }}>
                        <div className={styles.menu2}>
                            <div className={styles.icontransactionMinusParent}>
                                <img className={styles.iconcard} alt="" src="/icontransactionminus1.svg" />
                                <b className={styles.qa}>{`Q&A`}</b>
                            </div>
                        </div>
                    </Link>
                    <Link to="/grad3" style={{ textDecoration: "none", color: "var(--text-10)" }}>
                        <div className={styles.icontransactionMinusParent}>
                            <img className={styles.iconcard} alt="" src="/iconactivity.svg" />
                            <div className={styles.div1}>토큰 환전</div>
                        </div>
                    </Link>
                </div>
                <div className={styles.iconParent}>
                    <img className={styles.icon} alt="" src="/icon1.svg" />
                    <div className={styles.avatar} />
                    <div className={styles.adminA}>Admin A</div>
                    <img className={styles.iconcard} alt="" src="/iconarrowdown1.svg" />
                </div>
            </div>
        </div>
    );
};

export default Grad1;
