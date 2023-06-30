import styles from "./Under2.module.css";
import { NavLink, Link } from "react-router-dom";
import React from "react";

const Under2 = () => {
    return (
        <div className={styles.div}>
            <div className={styles.inner}>
                <div className={styles.iconParent}>
                    <img className={styles.icon} alt="" src="/icon4.svg" />
                    <div className={styles.avatar} />
                    <div className={styles.adminA}>Admin A</div>
                    <img className={styles.iconarrowDown} alt="" src="/iconarrowdown5.svg" />
                </div>
            </div>
            <div className={styles.bodyWrapper}>
                <div className={styles.body}>
                    <div className={styles.compInput}>
                        <b className={styles.title}>진로 검색</b>
                        <div className={styles.compDropdownC1}>
                            <div className={styles.title1}>전공</div>
                            <div className={styles.compDropdownDefault}>
                                <div className={styles.contents}>
                                    <div className={styles.text}>Null</div>
                                    <img className={styles.lcDropdownIcon} alt="" src="/lcdropdown1.svg" />
                                </div>
                            </div>
                        </div>
                        <div className={styles.compDropdownC1}>
                            <div className={styles.title1}>직무</div>
                            <div className={styles.compDropdownDefault}>
                                <div className={styles.contents}>
                                    <div className={styles.text}>Null</div>
                                    <img className={styles.lcDropdownIcon} alt="" src="/lcdropdown1.svg" />
                                </div>
                            </div>
                        </div>
                        <div className={styles.compInputDefualt}>
                            <div className={styles.title3}>기업</div>
                            <div className={styles.input}>
                                <div className={styles.text2}>입력</div>
                            </div>
                        </div>
                        <div className={styles.areaBtn}>
                            <div className={styles.compBtnDefualt}>
                                <div className={styles.node}>
                                    <img className={styles.icIcon} alt="" src="/ic4.svg" />
                                    <b className={styles.text3}>검색하기</b>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.groupParent}>
                        <div className={styles.group}>
                            <div className={styles.titleWrapper}>
                                <div className={styles.title4}>교내 활동</div>
                            </div>
                            <div className={styles.group1}>
                                <div className={styles.div1}>
                                    <b className={styles.b}>번호</b>
                                </div>
                                <div className={styles.divide} />
                                <div className={styles.div2}>
                                    <b className={styles.b}>활동명</b>
                                </div>
                                <div />
                            </div>
                            <div className={styles.group2}>
                                <div className={styles.div1}>
                                    <div className={styles.b}>1</div>
                                </div>
                                <div className={styles.divide} />
                                <div className={styles.div2}>
                                    <div className={styles.b}>“Lorem Ipsum”</div>
                                </div>
                                <div />
                            </div>
                            <div className={styles.group2}>
                                <div className={styles.div1}>
                                    <div className={styles.b}>1</div>
                                </div>
                                <div className={styles.divide} />
                                <div className={styles.div2}>
                                    <div className={styles.b}>“Lorem Ipsum”</div>
                                </div>
                                <div />
                            </div>
                            <div className={styles.group2}>
                                <div className={styles.div1}>
                                    <div className={styles.b}>1</div>
                                </div>
                                <div className={styles.divide} />
                                <div className={styles.div2}>
                                    <div className={styles.b}>“Lorem Ipsum”</div>
                                </div>
                                <div />
                            </div>
                            <div className={styles.group2}>
                                <div className={styles.div1}>
                                    <div className={styles.b}>1</div>
                                </div>
                                <div className={styles.divide} />
                                <div className={styles.div2}>
                                    <div className={styles.b}>“Lorem Ipsum”</div>
                                </div>
                                <div />
                            </div>
                            <div className={styles.group2}>
                                <div className={styles.div1}>
                                    <div className={styles.b}>1</div>
                                </div>
                                <div className={styles.divide} />
                                <div className={styles.div2}>
                                    <div className={styles.b}>“Lorem Ipsum”</div>
                                </div>
                                <div />
                            </div>
                            <div className={styles.group2}>
                                <div className={styles.div1}>
                                    <div className={styles.b}>1</div>
                                </div>
                                <div className={styles.divide} />
                                <div className={styles.div2}>
                                    <div className={styles.b}>“Lorem Ipsum”</div>
                                </div>
                                <div />
                            </div>
                            <div className={styles.group2}>
                                <div className={styles.div1}>
                                    <div className={styles.b}>1</div>
                                </div>
                                <div className={styles.divide} />
                                <div className={styles.div2}>
                                    <div className={styles.b}>“Lorem Ipsum”</div>
                                </div>
                                <div />
                            </div>
                            <div className={styles.group2}>
                                <div className={styles.div1}>
                                    <div className={styles.b}>1</div>
                                </div>
                                <div className={styles.divide} />
                                <div className={styles.div2}>
                                    <div className={styles.b}>“Lorem Ipsum”</div>
                                </div>
                                <div />
                            </div>
                        </div>
                        <div className={styles.group}>
                            <div className={styles.titleWrapper}>
                                <div className={styles.title4}>대외활동</div>
                            </div>
                            <div className={styles.group1}>
                                <div className={styles.div1}>
                                    <b className={styles.b}>번호</b>
                                </div>
                                <div className={styles.divide} />
                                <div className={styles.div2}>
                                    <b className={styles.b}>활동명</b>
                                </div>
                                <div />
                            </div>
                            <div className={styles.group2}>
                                <div className={styles.div1}>
                                    <div className={styles.b}>1</div>
                                </div>
                                <div className={styles.divide} />
                                <div className={styles.div2}>
                                    <div className={styles.b}>“Lorem Ipsum”</div>
                                </div>
                                <div />
                            </div>
                            <div className={styles.group2}>
                                <div className={styles.div1}>
                                    <div className={styles.b}>1</div>
                                </div>
                                <div className={styles.divide} />
                                <div className={styles.div2}>
                                    <div className={styles.b}>“Lorem Ipsum”</div>
                                </div>
                                <div />
                            </div>
                            <div className={styles.group2}>
                                <div className={styles.div1}>
                                    <div className={styles.b}>1</div>
                                </div>
                                <div className={styles.divide} />
                                <div className={styles.div2}>
                                    <div className={styles.b}>“Lorem Ipsum”</div>
                                </div>
                                <div />
                            </div>
                            <div className={styles.group2}>
                                <div className={styles.div1}>
                                    <div className={styles.b}>1</div>
                                </div>
                                <div className={styles.divide} />
                                <div className={styles.div2}>
                                    <div className={styles.b}>“Lorem Ipsum”</div>
                                </div>
                                <div />
                            </div>
                            <div className={styles.group2}>
                                <div className={styles.div1}>
                                    <div className={styles.b}>1</div>
                                </div>
                                <div className={styles.divide} />
                                <div className={styles.div2}>
                                    <div className={styles.b}>“Lorem Ipsum”</div>
                                </div>
                                <div />
                            </div>
                            <div className={styles.group2}>
                                <div className={styles.div1}>
                                    <div className={styles.b}>1</div>
                                </div>
                                <div className={styles.divide} />
                                <div className={styles.div2}>
                                    <div className={styles.b}>“Lorem Ipsum”</div>
                                </div>
                                <div />
                            </div>
                            <div className={styles.group2}>
                                <div className={styles.div1}>
                                    <div className={styles.b}>1</div>
                                </div>
                                <div className={styles.divide} />
                                <div className={styles.div2}>
                                    <div className={styles.b}>“Lorem Ipsum”</div>
                                </div>
                                <div />
                            </div>
                            <div className={styles.group2}>
                                <div className={styles.div1}>
                                    <div className={styles.b}>1</div>
                                </div>
                                <div className={styles.divide} />
                                <div className={styles.div2}>
                                    <div className={styles.b}>“Lorem Ipsum”</div>
                                </div>
                                <div />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.sidebar}>
                <NavLink to="/main" style={{ textDecoration: "none" }}>
                    <div className={styles.logo}>
                        <img className={styles.icIcon1} alt="" src="/ic3.svg" />
                        <div className={styles.linkAjou}>Link Ajou</div>
                    </div>
                </NavLink>
                <div className={styles.nav}>
                    <Link to="/under1" style={{ textDecoration: "none", color: "var(--text-10)" }}>
                        <div className={styles.menu}>
                            <img className={styles.iconarrowDown} alt="" src="/iconelement3.svg" />
                            <div className={styles.div53}>졸업생 데이터 분석</div>
                        </div>
                    </Link>
                    <Link to="/under2" style={{ textDecoration: "none", color: "var(--text-10)" }}>
                        <div className={styles.menu1}>
                            <img className={styles.iconarrowDown} alt="" src="/iconcard1.svg" />
                            <div className={styles.div53}>맞춤형 활동 추천</div>
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
                            <div className={styles.div53}>토큰 환전</div>
                        </div>
                    </Link>
                </div>
                <div className={styles.iconGroup}>
                    <img className={styles.icon} alt="" src="/icon4.svg" />
                    <div className={styles.avatar} />
                    <div className={styles.adminA}>Admin A</div>
                    <img className={styles.iconarrowDown} alt="" src="/iconarrowdown5.svg" />
                </div>
            </div>
        </div>
    );
};

export default Under2;
