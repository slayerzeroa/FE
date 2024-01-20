/* eslint-disable */
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./Grad3.module.css";
import { NavLink, Link } from "react-router-dom";
import React from "react";
import prohibit from "../components/alarm/prohibit";

const Grad3 = () => {
    const navigate = useNavigate();

    // wallet props 받아오기
    const location = useLocation();
    const walletInfo = { ...location.state };

    // length가 0이면 undefined
    if (Object.keys(walletInfo).length === 0) {
        return prohibit();
    }

    return (
        <div className={styles.div}>
            <div className={styles.bodyWrapper}>
                <div className={styles.body}>
                    <div className={styles.compInput}>
                        <div className={styles.wrapper}>
                            <b className={styles.b}>활동 내역</b>
                        </div>
                        <div className={styles.listview}>
                            <div className={styles.nodeWrapper}>
                                <div className={styles.node}>현재 활동 내역이 존재하지 않습니다.</div>
                            </div>
                        </div>
                        <div className={styles.wrapper}>
                            <b className={styles.b}>총 토큰 수익</b>
                        </div>
                        <div className={styles.listview1}>
                            <div className={styles.nodeContainer}>
                                <div className={styles.node1}>
                                    <div className={styles.myToken}>평가손익</div>
                                </div>
                            </div>
                            <div className={styles.nodeFrame}>
                                <div className={styles.node}>\  89,833</div>
                            </div>
                        </div>
                        <div className={styles.listview1}>
                            <div className={styles.nodeContainer}>
                                <div className={styles.node1}>
                                    <div className={styles.myToken}>수익률</div>
                                </div>
                            </div>
                            <div className={styles.groupDiv}>
                                <div className={styles.node}>+0.48%</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.frameParent}>
                        <div className={styles.wrapper}>
                            <b className={styles.b}>자산 보유 현황</b>
                        </div>
                        <div className={styles.listview1}>
                            <div className={styles.nodeContainer}>
                                <div className={styles.node5}>
                                    <div className={styles.myToken}>My Token</div>
                                </div>
                            </div>
                            <div className={styles.nodeWrapper2}>
                                <div className={styles.node}>1626 AJ</div>
                            </div>
                        </div>
                        <div className={styles.listview1}>
                            <div className={styles.nodeContainer}>
                                <div className={styles.node1}>
                                    <div className={styles.myToken}>My ETH</div>
                                </div>
                            </div>
                            <div className={styles.nodeWrapper4}>
                                <div className={styles.node}>0.01283 ETH</div>
                            </div>
                        </div>
                        <div className={styles.listview1}>
                            <div className={styles.nodeContainer}>
                                <div className={styles.node1}>
                                    <div className={styles.myToken}>토큰당 이더리움</div>
                                </div>
                            </div>
                            <div className={styles.nodeWrapper4}>
                                <div className={styles.node}>0.8444 ETH</div>
                            </div>
                        </div>
                        <div className={styles.listview1}>
                            <div className={styles.nodeContainer}>
                                <div className={styles.node1}>
                                    <div className={styles.myToken}>수수료</div>
                                </div>
                            </div>
                            <div className={styles.nodeWrapper4}>
                                <div className={styles.node}>0.111 ETH</div>
                            </div>
                        </div>
                        <div className={styles.divider} />
                    </div>
                    <div className={styles.groupParent}>
                        <div className={styles.group}>
                            <div className={styles.group1}>
                                <b className={styles.ethToAj}>ETH to AJ</b>
                            </div>
                            <div className={styles.group2}>
                                <div className={styles.listviewActivity}>
                                    <div className={styles.inputYourEthParent}>
                                        <div className={styles.inputYourEth}>Input your ETH</div>
                                        <div className={styles.eth}>+0,00004591 ETH</div>
                                    </div>
                                    <div className={styles.harukiIconsParent}>
                                        <div className={styles.harukiIcons}>
                                            <img className={styles.unionIcon} alt="" src="/union.svg" />
                                        </div>
                                        <div className={styles.btn}>
                                            <div className={styles.buyAj}>Buy AJ</div>
                                        </div>
                                    </div>
                                    <div className={styles.ajParent}>
                                        <div className={styles.inputYourEth}>AJ</div>
                                        <div className={styles.parent}>
                                            <div className={styles.div5}>+0,00004591</div>
                                            <img className={styles.nodeIcon} alt="" src="/node.svg" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.divider} />
                        <div className={styles.group}>
                            <div className={styles.group1}>
                                <b className={styles.ethToAj}>AJ to ETH</b>
                            </div>
                            <div className={styles.group2}>
                                <div className={styles.listviewActivity}>
                                    <div className={styles.inputYourEthParent}>
                                        <div className={styles.inputYourEth}>Input your AJ</div>
                                        <div className={styles.eth}>+0,00004591 AJ</div>
                                    </div>
                                    <div className={styles.harukiIconsParent}>
                                        <div className={styles.harukiIcons}>
                                            <img className={styles.unionIcon} alt="" src="/union.svg" />
                                        </div>
                                        <div className={styles.btn}>
                                            <div className={styles.buyAj}>Buy Ethereum</div>
                                        </div>
                                    </div>
                                    <div className={styles.ajParent}>
                                        <div className={styles.inputYourEth}>ETH</div>
                                        <div className={styles.parent}>
                                            <div className={styles.div5}>+0,00004591</div>
                                            <img className={styles.nodeIcon} alt="" src="/node.svg" />
                                        </div>
                                    </div>
                                </div>
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
                        to="/grad1"
                        style={{ textDecoration: "none", color: "var(--text-10)" }}
                    >
                        <div className={styles.menu}>
                            <img className={styles.icon} alt="" src="/iconelement3.svg" />
                            <div className={styles.div1}>나의 정보</div>
                        </div>
                    </Link>
                    <Link
                        state={{
                            walletAddress: walletInfo.walletAddress,
                            currentBalance: walletInfo.currentBalance,
                            chainId: walletInfo.chainId,
                        }}
                        to="/grad2"
                        style={{ textDecoration: "none", color: "var(--text-10)" }}
                    >
                        <div className={styles.menu}>
                            <img className={styles.icon} alt="" src="/iconcard.svg" />
                            <div className={styles.div1}>동문 데이터 분석</div>
                        </div>
                    </Link>
                    <Link
                        state={{
                            walletAddress: walletInfo.walletAddress,
                            currentBalance: walletInfo.currentBalance,
                            chainId: walletInfo.chainId,
                        }}
                        to="/qa"
                        style={{ textDecoration: "none", color: "var(--text-10)" }}
                    >
                        <div className={styles.nodeContainer}>
                            <div className={styles.menu}>
                                <img className={styles.icon} alt="" src="/icontransactionminus1.svg" />
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
                        to="/grad3"
                        style={{ textDecoration: "none", color: "var(--text-10)" }}
                    >
                        <div className={styles.menu3}>
                            <img className={styles.icon} alt="" src="/iconactivity1.svg" />
                            <div className={styles.div1}>토큰 환전</div>
                        </div>
                    </Link>
                </div>
                <div className={styles.iconParent}>
                    <img className={styles.icon} alt="" src="/icon.svg" />
                    <div className={styles.avatar} />
                    <div className={styles.adminA}>{walletInfo.walletAddress}</div>
                    <img className={styles.icon} alt="" src="/iconarrowdown.svg" />
                </div>
            </div>
        </div>
    );
};

export default Grad3;
