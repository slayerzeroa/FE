/* eslint-disable */

import styles from "./QA.module.css";
import { NavLink, Link } from "react-router-dom";
import Axios from "axios";
import React, { Component } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import prohibit from "../components/alarm/prohibit";

function QA() {
    const [boardList, setBoardList] = useState([]);
    const navigate = useNavigate();

    // wallet props 받아오기
    const location = useLocation();
    const walletInfo = { ...location.state };

    // length가 0이면 undefined
    if (Object.keys(walletInfo).length === 0) {
        return prohibit();
    }

    useEffect(() => {
        Axios.get("http://ajoufe.synology.me:8000/list", {})
            .then((res) => {
                setBoardList(res.data);
                console.log(res.data);
            })
            .catch((Error) => {
                console.log(Error);
            });
    }, []);

    console.log(boardList);
    return (
        <div className={styles.qa}>
            <div className={styles.qaInner}>
                <div className={styles.iconParent}>
                    <img className={styles.icon} alt="" src="/icon.svg" />
                    <div className={styles.avatar} />
                    <div className={styles.adminA}>{walletInfo.walletAddress}</div>
                    <img className={styles.iconarrowDown} alt="" src="/iconarrowdown.svg" />
                </div>
            </div>
            <div className={styles.bodyWrapper}>
                <div className={styles.body}>
                    <div className={styles.groupWrapper}>
                        <div className={styles.group}>
                            <div className={styles.titleWrapper}>
                                <div className={styles.title}>게시판</div>
                            </div>
                            <div className={styles.group1}>
                                <div className={styles.div3}>
                                    <b className={styles.b}>번호</b>
                                </div>
                                <div className={styles.divide} />
                                <div className={styles.div3}>
                                    <b className={styles.b}>분류</b>
                                </div>
                                <div className={styles.divide} />
                                <div className={styles.div3}>
                                    <b className={styles.b}>제목</b>
                                </div>
                                <div className={styles.divide} />
                                <div className={styles.div3}>
                                    <b className={styles.b}>파일</b>
                                </div>
                                <div className={styles.divide} />
                                <div className={styles.div3}>
                                    <b className={styles.b}>작성일</b>
                                </div>
                                <div className={styles.divide} />
                                <div className={styles.div3}>
                                    <b className={styles.b}>작성자</b>
                                </div>
                                <div />
                            </div>
                            <Link
                                state={{
                                    walletAddress: walletInfo.walletAddress,
                                    currentBalance: walletInfo.currentBalance,
                                    chainId: walletInfo.chainId,
                                }}
                                to={`/qa1/${boardList?.[0]?.BOARD_ID}`}
                                className={styles.group2}
                            >
                                {/* <div className={styles.group2}> */}
                                <div className={styles.div3}>
                                    <div className={styles.b}>{boardList?.[0]?.BOARD_ID}</div>
                                </div>
                                <div className={styles.divide} />
                                <div className={styles.div3}>
                                    <div className={styles.b}>{boardList?.[0]?.BOARD_ID}</div>
                                </div>
                                <div className={styles.divide} />
                                <div className={styles.div3}>
                                    <div className={styles.b}>{boardList?.[0]?.BOARD_TITLE}</div>
                                </div>
                                <div className={styles.divide} />
                                <div className={styles.div3}>
                                    <div className={styles.b}>Null</div>
                                </div>
                                <div className={styles.divide} />
                                <div className={styles.div3}>
                                    <div className={styles.b}>{boardList?.[0]?.REGISTER_DATE}</div>
                                </div>
                                <div className={styles.divide} />
                                <div className={styles.div3}>
                                    <div className={styles.b}>{boardList?.[0]?.UPDATER_ID}</div>
                                </div>
                                <div />
                                {/* </div> */}
                            </Link>
                            <Link
                                state={{
                                    walletAddress: walletInfo.walletAddress,
                                    currentBalance: walletInfo.currentBalance,
                                    chainId: walletInfo.chainId,
                                }}
                                to={`/qa1/${boardList?.[1]?.BOARD_ID}`}
                                className={styles.group2}
                            >
                                {/* <div className={styles.group2}> */}
                                <div className={styles.div3}>
                                    <div className={styles.b}>{boardList?.[1]?.BOARD_ID}</div>
                                </div>
                                <div className={styles.divide} />
                                <div className={styles.div3}>
                                    <div className={styles.b}>{boardList?.[1]?.BOARD_ID}</div>
                                </div>
                                <div className={styles.divide} />
                                <div className={styles.div3}>
                                    <div className={styles.b}>{boardList?.[1]?.BOARD_TITLE}</div>
                                </div>
                                <div className={styles.divide} />
                                <div className={styles.div3}>
                                    <div className={styles.b}>Null</div>
                                </div>
                                <div className={styles.divide} />
                                <div className={styles.div3}>
                                    <div className={styles.b}>{boardList?.[1]?.REGISTER_DATE}</div>
                                </div>
                                <div className={styles.divide} />
                                <div className={styles.div3}>
                                    <div className={styles.b}>{boardList?.[1]?.UPDATER_ID}</div>
                                </div>
                                <div />
                                {/* </div> */}
                            </Link>
                            <div className={styles.group2}>
                                <div className={styles.div3}>
                                    <div className={styles.b}>1</div>
                                </div>
                                <div className={styles.divide} />
                                <div className={styles.div3}>
                                    <div className={styles.b}>Type</div>
                                </div>
                                <div className={styles.divide} />
                                <div className={styles.div3}>
                                    <div className={styles.b}>Title</div>
                                </div>
                                <div className={styles.divide} />
                                <div className={styles.div3}>
                                    <div className={styles.b}>file.txt</div>
                                </div>
                                <div className={styles.divide} />
                                <div className={styles.div3}>
                                    <div className={styles.b}>2021/05.08</div>
                                </div>
                                <div className={styles.divide} />
                                <div className={styles.div3}>
                                    <div className={styles.b}>Steven Yeon</div>
                                </div>
                                <div />
                            </div>
                            <div className={styles.group2}>
                                <div className={styles.div3}>
                                    <div className={styles.b}>1</div>
                                </div>
                                <div className={styles.divide} />
                                <div className={styles.div3}>
                                    <div className={styles.b}>Type</div>
                                </div>
                                <div className={styles.divide} />
                                <div className={styles.div3}>
                                    <div className={styles.b}>Title</div>
                                </div>
                                <div className={styles.divide} />
                                <div className={styles.div3}>
                                    <div className={styles.b}>file.txt</div>
                                </div>
                                <div className={styles.divide} />
                                <div className={styles.div3}>
                                    <div className={styles.b}>2021/05.08</div>
                                </div>
                                <div className={styles.divide} />
                                <div className={styles.div3}>
                                    <div className={styles.b}>Steven Yeon</div>
                                </div>
                                <div />
                            </div>
                            <div className={styles.group2}>
                                <div className={styles.div3}>
                                    <div className={styles.b}>1</div>
                                </div>
                                <div className={styles.divide} />
                                <div className={styles.div3}>
                                    <div className={styles.b}>Type</div>
                                </div>
                                <div className={styles.divide} />
                                <div className={styles.div3}>
                                    <div className={styles.b}>Title</div>
                                </div>
                                <div className={styles.divide} />
                                <div className={styles.div3}>
                                    <div className={styles.b}>file.txt</div>
                                </div>
                                <div className={styles.divide} />
                                <div className={styles.div3}>
                                    <div className={styles.b}>2021/05.08</div>
                                </div>
                                <div className={styles.divide} />
                                <div className={styles.div3}>
                                    <div className={styles.b}>Steven Yeon</div>
                                </div>
                                <div />
                            </div>
                            <div className={styles.group2}>
                                <div className={styles.div3}>
                                    <div className={styles.b}>1</div>
                                </div>
                                <div className={styles.divide} />
                                <div className={styles.div3}>
                                    <div className={styles.b}>Type</div>
                                </div>
                                <div className={styles.divide} />
                                <div className={styles.div3}>
                                    <div className={styles.b}>Title</div>
                                </div>
                                <div className={styles.divide} />
                                <div className={styles.div3}>
                                    <div className={styles.b}>file.txt</div>
                                </div>
                                <div className={styles.divide} />
                                <div className={styles.div3}>
                                    <div className={styles.b}>2021/05.08</div>
                                </div>
                                <div className={styles.divide} />
                                <div className={styles.div3}>
                                    <div className={styles.b}>Steven Yeon</div>
                                </div>
                                <div />
                            </div>
                            <div className={styles.group2}>
                                <div className={styles.div3}>
                                    <div className={styles.b}>1</div>
                                </div>
                                <div className={styles.divide} />
                                <div className={styles.div3}>
                                    <div className={styles.b}>Type</div>
                                </div>
                                <div className={styles.divide} />
                                <div className={styles.div3}>
                                    <div className={styles.b}>Title</div>
                                </div>
                                <div className={styles.divide} />
                                <div className={styles.div3}>
                                    <div className={styles.b}>file.txt</div>
                                </div>
                                <div className={styles.divide} />
                                <div className={styles.div3}>
                                    <div className={styles.b}>2021/05.08</div>
                                </div>
                                <div className={styles.divide} />
                                <div className={styles.div3}>
                                    <div className={styles.b}>Steven Yeon</div>
                                </div>
                                <div />
                            </div>
                            <div className={styles.group2}>
                                <div className={styles.div3}>
                                    <div className={styles.b}>1</div>
                                </div>
                                <div className={styles.divide} />
                                <div className={styles.div3}>
                                    <div className={styles.b}>Type</div>
                                </div>
                                <div className={styles.divide} />
                                <div className={styles.div3}>
                                    <div className={styles.b}>Title</div>
                                </div>
                                <div className={styles.divide} />
                                <div className={styles.div3}>
                                    <div className={styles.b}>file.txt</div>
                                </div>
                                <div className={styles.divide} />
                                <div className={styles.div3}>
                                    <div className={styles.b}>2021/05.08</div>
                                </div>
                                <div className={styles.divide} />
                                <div className={styles.div3}>
                                    <div className={styles.b}>Steven Yeon</div>
                                </div>
                                <div />
                            </div>
                            <div className={styles.group2}>
                                <div className={styles.div3}>
                                    <div className={styles.b}>1</div>
                                </div>
                                <div className={styles.divide} />
                                <div className={styles.div3}>
                                    <div className={styles.b}>Type</div>
                                </div>
                                <div className={styles.divide} />
                                <div className={styles.div3}>
                                    <div className={styles.b}>Title</div>
                                </div>
                                <div className={styles.divide} />
                                <div className={styles.div3}>
                                    <div className={styles.b}>file.txt</div>
                                </div>
                                <div className={styles.divide} />
                                <div className={styles.div3}>
                                    <div className={styles.b}>2021/05.08</div>
                                </div>
                                <div className={styles.divide} />
                                <div className={styles.div3}>
                                    <div className={styles.b}>Steven Yeon</div>
                                </div>
                                <div />
                            </div>
                        </div>
                    </div>
                    <Link to="/write" className={styles.areaBtn}>
                        <div className={styles.compBtnDefualt}>
                            <div className={styles.node}>
                                <b className={styles.text}>글 쓰기</b>
                            </div>
                        </div>
                    </Link>
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
                        <img className={styles.icIcon} alt="" src="/ic.svg" />
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
                            <div className={styles.div1}>졸업생 데이터 분석</div>
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
                        <div className={styles.menu}>
                            <img className={styles.iconarrowDown} alt="" src="/iconcard.svg" />
                            <div className={styles.div1}>맞춤형 활동 추천</div>
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
                                <img className={styles.iconarrowDown} alt="" src="/icontransactionminus.svg" />
                                <b className={styles.div1}>{`Q&A`}</b>
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
                            <div className={styles.div1}>토큰 환전</div>
                        </div>
                    </Link>
                </div>
                <div className={styles.iconGroup}>
                    <img className={styles.icon} alt="" src="/icon.svg" />
                    <div className={styles.avatar} />
                    <div className={styles.adminA}>{walletInfo.walletAddress}</div>
                    <img className={styles.iconarrowDown} alt="" src="/iconarrowdown.svg" />
                </div>
            </div>
        </div>
    );
}

export default QA;
