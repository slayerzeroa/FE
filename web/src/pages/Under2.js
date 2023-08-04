/* eslint-disable */

import styles from "./Under2.module.css";
import { NavLink, Link } from "react-router-dom";
import React from "react";
import Select from "react-select";
import { useLocation, useNavigate } from "react-router-dom";
import prohibit from "../components/alarm/prohibit";

// import Axios from "axios";
// import { useState, useEffect } from "react";

const Majoroptions = [
    { value: "금융공학과", label: "금융공학과" },
    { value: "경영학과", label: "경영학과" },
    { value: "E-비즈니스학과", label: "E-비즈니스학과" },
];

const Taskoptions = [
    { value: "프론트오피스", label: "프론트오피스" },
    { value: "미들오피스", label: "미들오피스" },
    { value: "백오피스", label: "백오피스" },
];

const Companyoptions = [
    { value: "증권사", label: "증권사" },
    { value: "자산운용사", label: "자산운용사" },
    { value: "은행", label: "은행" },
];

const customStyles = {
    control: (provided) => ({
        ...provided,
        background: "var(--white-1)",
        border: "1px solid var(--gray-1)",
        borderRadius: "8px",
        width: "100%",

        "&:hover": {
            border: "1px solid var(--gray-1)",
        },
    }),
    option: (provided) => ({
        ...provided,
        color: "var(--text-10)",
        background: "var(--white-1)",
        "&:hover": {
            background: "var(--gray-1)",
        },
    }),
};

const Under2 = () => {
    // wallet props 받아오기
    const location = useLocation();
    const walletInfo = { ...location.state };

    // length가 0이면 undefined
    if (Object.keys(walletInfo).length === 0) {
        return prohibit();
    }

    return (
        <div className={styles.div}>
            <div className={styles.inner}>
                <div className={styles.iconParent}>
                    <img className={styles.icon} alt="" src="/icon4.svg" />
                    <div className={styles.avatar} />
                    <div className={styles.adminA}>{walletInfo.walletAddress}</div>
                    <img className={styles.iconarrowDown} alt="" src="/iconarrowdown5.svg" />
                </div>
            </div>
            <div className={styles.bodyWrapper}>
                <div className={styles.body}>
                    <div className={styles.compInput}>
                        <b className={styles.title}>진로 검색</b>
                        <div className={styles.compDropdownC1}>
                            <div className={styles.title1}>전공</div>
                            <Select
                                className={styles.compDropdownDefault}
                                options={Majoroptions}
                                styles={customStyles}
                            />
                        </div>
                        <div className={styles.compDropdownC1}>
                            <div className={styles.title1}>직무</div>
                            <Select
                                className={styles.compDropdownDefault}
                                options={Taskoptions}
                                styles={customStyles}
                            />
                        </div>
                        <div className={styles.compInputDefualt}>
                            <div className={styles.title3}>기업</div>
                            <Select
                                className={styles.compDropdownDefault}
                                options={Companyoptions}
                                styles={customStyles}
                            />
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
                        <img className={styles.icIcon1} alt="" src="/ic3.svg" />
                        <div className={styles.linkAjou}>Link Ajou</div>
                    </div>
                </NavLink>
                <div className={styles.nav}>
                    <Link
                        state={{
                            walletAddress: walletInfo.walletAddress,
                            currentBalance: walletInfo.currentBalance,
                            chainId: walletInfo.chainId,
                        }}
                        to="/under1"
                        style={{ textDecoration: "none", color: "var(--text-10)" }}
                    >
                        <div className={styles.menu}>
                            <img className={styles.iconarrowDown} alt="" src="/iconelement3.svg" />
                            <div className={styles.div53}>졸업생 데이터 분석</div>
                        </div>
                    </Link>
                    <Link
                        state={{
                            walletAddress: walletInfo.walletAddress,
                            currentBalance: walletInfo.currentBalance,
                            chainId: walletInfo.chainId,
                        }}
                        to="/under2"
                        style={{ textDecoration: "none", color: "var(--text-10)" }}
                    >
                        <div className={styles.menu1}>
                            <img className={styles.iconarrowDown} alt="" src="/iconcard1.svg" />
                            <div className={styles.div53}>맞춤형 활동 추천</div>
                        </div>
                    </Link>
                    <Link
                        state={{
                            walletAddress: walletInfo.walletAddress,
                            currentBalance: walletInfo.currentBalance,
                            chainId: walletInfo.chainId,
                        }}
                        to="/qa1"
                        style={{ textDecoration: "none", color: "var(--text-10)" }}
                    >
                        <div className={styles.menu2}>
                            <div className={styles.menu}>
                                <img className={styles.iconarrowDown} alt="" src="/icontransactionminus1.svg" />
                                <b className={styles.qa}>{`Q&A`}</b>
                            </div>
                        </div>
                    </Link>
                    <Link
                        state={{
                            walletAddress: walletInfo.walletAddress,
                            currentBalance: walletInfo.currentBalance,
                            chainId: walletInfo.chainId,
                        }}
                        to="/under3"
                        style={{ textDecoration: "none", color: "var(--text-10)" }}
                    >
                        <div className={styles.menu}>
                            <img className={styles.iconarrowDown} alt="" src="/iconactivity.svg" />
                            <div className={styles.div53}>토큰 환전</div>
                        </div>
                    </Link>
                </div>
                <div className={styles.iconGroup}>
                    <img className={styles.icon} alt="" src="/icon4.svg" />
                    <div className={styles.avatar} />
                    <div className={styles.adminA}>{walletInfo.walletAddress}</div>
                    <img className={styles.iconarrowDown} alt="" src="/iconarrowdown5.svg" />
                </div>
            </div>
            
        </div>
    );
};

export default Under2;
