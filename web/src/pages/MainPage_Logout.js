/* eslint-disable */

import styles from "./MainPage_Logout.module.css";
import { NavLink } from "react-router-dom";
import React from "react";

import { useState, useEffect, useCallback } from "react";
import { ethers } from "ethers";
import { BrowserProvider } from "ethers";
import ConnectButton from "../components/ConnectButton";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function MainPage_Logout() {
    const [provider, setProvider] = useState(undefined);
    const [signer, setSigner] = useState(undefined);
    const [walletAddress, setWalletAddress] = useState(undefined);
    const [currentBalance, setCurrentBalance] = useState(undefined);
    const [chainId, setChainId] = useState(undefined);
    const [isConnected, setIsConnected] = useState(false);

    const navigate = useNavigate();

    const connectWallet = useCallback(async () => {
        try {
            if (typeof window.ethereum !== "undefined") {
                const _provider = await getProvider();
                const _signer = await getSigner(_provider);
                await getWalletData(_signer);
            } else {
                alert("please install MetaMask");
            }
        } catch (error) {
            console.log(error);
        }
    }, []);

    const getMetamaskData = async () => {
        const _provider = await getProvider();
        const _signer = await getSigner(_provider);
        await getWalletData(_signer);
    };

    const getProvider = async () => {
        const provider = await new ethers.providers.Web3Provider(window.ethereum);
        setProvider(provider);

        return provider;
    };

    const getSigner = async (provider) => {
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        setSigner(signer);

        return signer;
    };

    const getWalletData = async (signer) => {
        const result = await Promise.all([signer.getAddress(), signer.getBalance(), signer.getChainId()]);
        setWalletAddress(result[0]);
        setCurrentBalance(Number(ethers.utils.formatEther(result[1])));
        setChainId(result[2]);
    };

    const notice = () => {
        Swal.fire({
            title: "로그인이 필요합니다.",
            text: "로그인 버튼을 눌러 메타마스크 연동을 해주세요.",
            icon: "warning",
            confirmButtonText: "확인",
        });
    };

    if (walletAddress === undefined) {
        console.log("walletAddress is undefined");
    } else {
        console.log("walletAddress is defined");
        navigate("/main", {
            state: { walletAddress: walletAddress, currentBalance: currentBalance, chainId: chainId },
        });
    }

    return (
        <div className={styles.div}>
            <div className={styles.body}>
                <div className={styles.body1}>
                    <img className={styles.bgIcon} alt="" src="/bg1@2x.png" />
                    <div className={styles.lH}>
                        <div className={styles.compButton1} onClick={notice}>
                            <div className={styles.text1}>재학생</div>
                        </div>
                        <div className={styles.compButton1} onClick={notice}>
                            <div className={styles.text1}>졸업생</div>
                        </div>
                        <div className={styles.compButton1} onClick={notice}>
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
            <div className={styles.sidebar}>
                <NavLink to="/" style={{ textDecoration: "none" }}>
                    <div className={styles.logo}>
                        <img className={styles.icIcon} alt="" src="/ic.svg" />
                        <div className={styles.linkAjou}>Link Ajou</div>
                    </div>
                </NavLink>
                <div className={styles.nav} />
                {/* <ConnectButton
                    className={styles.compButton}
                    isConnected={isConnected}
                    connectWallet={connectWallet}
                    walletAddress={walletAddress}
                    currentBalance={currentBalance}
                    chainId={chainId}
                /> */}
                <button className={styles.compButton} onClick={() => connectWallet()}>
                    <b className={styles.text}>Connect</b>
                </button>

                <div>{walletAddress}</div>
                <div>{currentBalance}</div>
            </div>
            
        </div>
    );
}

export default MainPage_Logout;
