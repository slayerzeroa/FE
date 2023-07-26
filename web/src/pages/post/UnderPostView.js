// /* eslint-disable */

/* eslint-disable */

import styles from "./GradPostView.module.css";
import { NavLink, Link } from "react-router-dom";
import Axios from "axios";
import React, { Component } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function PostView() {
    const navigate = useNavigate();

    const [boardList, setBoardList] = useState([]);
    const { no } = useParams();

    // wallet props 받아오기
    const location = useLocation();
    const walletInfo = { ...location.state };

    console.log(walletInfo);

    const back = () => {
        navigate(-1, {
            state: {
                walletAddress: walletInfo.walletAddress,
                currentBalance: walletInfo.currentBalance,
                chainId: walletInfo.chainId,
            },
        });
    };

    useEffect(() => {
        Axios.get("http://localhost:8000/list", {})
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
                            <div className={styles.div}>졸업생 데이터 분석</div>
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
                            <div className={styles.div}>맞춤형 활동 추천</div>
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
                                <b className={styles.qa1}>{`Q&A`}</b>
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
                            <div className={styles.div}>토큰 환전</div>
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
            <div className={styles.bodyWrapper}>
                <div className={styles.body}>
                    <div className={styles.groupWrapper}>
                        <div className={styles.group}>
                            <>
                                <h2>게시글 상세정보</h2>
                                <div className="post-view-wrapper">
                                    {boardList ? (
                                        <>
                                            <div className="post-view-row">
                                                <label>게시글 번호</label>
                                                <label>{boardList?.[no]?.BOARD_ID}</label>
                                            </div>
                                            <div className="post-view-row">
                                                <label>제목</label>
                                                <label>{boardList?.[no]?.BOARD_TITLE}</label>
                                            </div>
                                            <div className="post-view-row">
                                                <label>작성일</label>
                                                <label>{boardList?.[no]?.REGISTER_DATE}</label>
                                            </div>
                                            <div className="post-view-row">
                                                <label>작성자</label>
                                                <label>{boardList?.[no]?.UPDATER_ID}</label>
                                            </div>
                                            <div className="post-view-row">
                                                <label>내용</label>
                                                <div>{boardList?.[no]?.BOARD_CONTENT}</div>
                                            </div>
                                        </>
                                    ) : (
                                        "해당 게시글을 찾을 수 없습니다."
                                    )}
                                    <button onClick={() => back()} className="post-view-go-list-btn">
                                        목록으로 돌아가기
                                    </button>
                                </div>
                            </>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostView;
