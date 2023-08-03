/* eslint-disable */

import styles from "./Grad1.module.css";
import { NavLink, Link } from "react-router-dom";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";

const Grad1 = () => {
    const navigate = useNavigate();

    // wallet props 받아오기
    const location = useLocation();
    const walletInfo = { ...location.state };

    if (walletInfo === undefined) {
        console.log("walletAddress is undefined");
    } else {
        console.log("walletAddress is defined");
        console.log("walletAddress: ", walletInfo.walletAddress);
    }

    // 입력 이벤트
    const [name, setName] = useState("");
    const [major, setMajor] = useState("");
    const [studentId, setStudentId] = useState("");
    const [email, setEmail] = useState("");

    const [industry, setIndustry] = useState("");
    const [task, setTask] = useState("");
    const [company, setCompany] = useState("");
    const [year, setYear] = useState("");

    const [gpa, setGpa] = useState("");
    const [club, setClub] = useState("");
    const [winning, setWinning] = useState("");
    const [certificate, setCertificate] = useState("");
    const [volunteer, setVolunteer] = useState("");

    const changeName = (e) => {
        setName(e.target.value);
    };
    const changeMajor = (e) => {
        setMajor(e.target.value);
    };
    const changeStudentId = (e) => {
        setStudentId(e.target.value);
    };
    const changeEmail = (e) => {
        setEmail(e.target.value);
    };

    const changeIndustry = (e) => {
        setIndustry(e.target.value);
    };
    const changeTask = (e) => {
        setTask(e.target.value);
    };
    const changeCompany = (e) => {
        setCompany(e.target.value);
    };
    const changeYear = (e) => {
        setYear(e.target.value);
    };

    const changeGpa = (e) => {
        setGpa(e.target.value);
    };
    const changeClub = (e) => {
        setClub(e.target.value);
    };
    const changeWinning = (e) => {
        setWinning(e.target.value);
    };
    const changeCertificate = (e) => {
        setCertificate(e.target.value);
    };
    const changeVolunteer = (e) => {
        setVolunteer(e.target.value);
    };
    const Industryoptions = [
        { value: "증권사", label: "증권사" },
        { value: "자산운용사", label: "자산운용사" },
        { value: "은행", label: "은행" },
    ];
    const Taskoptions = [
        { value: "프론트오피스", label: "프론트오피스" },
        { value: "미들오피스", label: "미들오피스" },
        { value: "백오피스", label: "백오피스" },
    ];
    const Companyoptions = [
        { value: "KB증권", label: "KB증권" },
        { value: "키움증권", label: "키움증권" },
        { value: "삼성증권", label: "삼성증권" },
    ];

    // Industry, Task, Company Option
    const [Indoptions, setIndoptions] = useState(Industryoptions);
    const [Tkoptions, setTaskoptions] = useState(Taskoptions);
    const [Cpoptions, setCompanyoptions] = useState(Companyoptions);

    const createOption = (label) => ({
        label,
        value: label,
    });

    const handleChange = (newValue) => {
        setIndoptions(newValue ? [createOption(newValue), ...Indoptions] : Industryoptions);
    };
    const handleChange1 = (newValue) => {
        setTaskoptions(newValue ? [createOption(newValue), ...Tkoptions] : Taskoptions);
    };
    const handleChange2 = (newValue) => {
        setCompanyoptions(newValue ? [createOption(newValue), ...Cpoptions] : Companyoptions);
    };

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

    // submit event
    const submit = async () => {
        const data = {
            name: name,
            major: major,
            studentId: studentId,
            email: email,
            industry: industry,
            task: task,
            company: company,
            year: year,
            gpa: gpa,
            club: club,
            winning: winning,
            certificate: certificate,
            volunteer: volunteer,
        };
        console.log(data);
        const res = await axios.post("http://localhost:3001/api/user", data);

        if (res.data.success) {
            alert("회원가입이 완료되었습니다.");
            history.push("/login");
        } else {
            alert("회원가입에 실패하였습니다.");
        }
    };

    // change value and onChange event
    return (
        <div className={styles.div}>
            <div className={styles.bodyWrapper}>
                <div className={styles.body}>
                    <div className={styles.compInput}>
                        <b className={styles.title}>기본 정보</b>
                        <div className={styles.compInputDefualt}>
                            <div className={styles.title1}>이름</div>
                            <input className={styles.input} value={name} onChange={changeName}></input>
                        </div>
                        <div className={styles.compInputDefualt}>
                            <div className={styles.title1}>전공</div>
                            <input className={styles.input} value={major} onChange={changeMajor}></input>
                        </div>
                        <div className={styles.compInputDefualt}>
                            <div className={styles.title1}>학번</div>
                            <input className={styles.input} value={studentId} onChange={changeStudentId}></input>
                        </div>
                        <div className={styles.compInputDefualt}>
                            <div className={styles.title1}>이메일</div>
                            <input className={styles.input} value={email} onChange={changeEmail}></input>
                        </div>
                        <div className={styles.areaBtn}>
                            <div className={styles.compBtnDefualt} />
                        </div>
                    </div>
                    <div className={styles.compInput}>
                        <b className={styles.title}>커리어</b>
                        <div className={styles.compDropdownC1}>
                            <div className={styles.title6}>업종</div>
                            <CreatableSelect
                                className={styles.compDropdownDefault}
                                options={Indoptions}
                                placeholder="업종 선택"
                                styles={customStyles}
                                onCreateOption={handleChange}
                            />
                        </div>
                        <div className={styles.compDropdownC1}>
                            <div className={styles.title6}>직무</div>
                            <CreatableSelect
                                className={styles.compDropdownDefault}
                                options={Tkoptions}
                                placeholder="직무 선택"
                                styles={customStyles}
                                onCreateOption={handleChange1}
                            />
                        </div>
                        <div className={styles.compInputDefualt}>
                            <div className={styles.title1}>기업</div>
                            <CreatableSelect
                                className={styles.compDropdownDefault}
                                options={Cpoptions}
                                placeholder="기업 선택"
                                styles={customStyles}
                                onCreateOption={handleChange2}
                            />
                        </div>
                        <div className={styles.compDropdownC1}>
                            <div className={styles.title6}>연차</div>
                            <input className={styles.input} value={year} onChange={changeYear} maxLength="11"></input>
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
                                <input className={styles.input5} value={club} onChange={changeClub}></input>
                                <div className={styles.input8}>
                                    <b className={styles.text11}>+</b>
                                </div>
                            </div>
                        </div>
                        <div className={styles.compInputDefualt}>
                            <div className={styles.title1}>비교과 활동(수상 시 기록 게재)</div>
                            <div className={styles.lH1}>
                                <input className={styles.input5} value={winning} onChange={changeWinning}></input>

                                <div className={styles.input8}>
                                    <b className={styles.text11}>+</b>
                                </div>
                            </div>
                        </div>
                        <div className={styles.compInputDefualt}>
                            <div className={styles.title1}>자격증</div>
                            <div className={styles.lH1}>
                                <input
                                    className={styles.input5}
                                    value={certificate}
                                    onChange={changeCertificate}
                                ></input>

                                <div className={styles.input8}>
                                    <b className={styles.text11}>+</b>
                                </div>
                            </div>
                        </div>
                        <div className={styles.compInputDefualt}>
                            <div className={styles.title1}>봉사 활동</div>
                            <div className={styles.lH1}>
                                <input className={styles.input5} value={volunteer} onChange={changeVolunteer}></input>
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
                        <img className={styles.icIcon} alt="" src="/ic1.svg" />
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
                            <img className={styles.iconcard} alt="" src="/iconelement31.svg" />
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
                        <div className={styles.icontransactionMinusParent}>
                            <img className={styles.iconcard} alt="" src="/iconcard.svg" />
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
                        <div className={styles.menu2}>
                            <div className={styles.icontransactionMinusParent}>
                                <img className={styles.iconcard} alt="" src="/icontransactionminus1.svg" />
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
                        to="/grad3"
                        style={{ textDecoration: "none", color: "var(--text-10)" }}
                    >
                        <div className={styles.icontransactionMinusParent}>
                            <img className={styles.iconcard} alt="" src="/iconactivity.svg" />
                            <div className={styles.div1}>토큰 환전</div>
                        </div>
                    </Link>
                </div>
                <div className={styles.iconParent}>
                    <img className={styles.icon} alt="" src="/icon1.svg" />
                    <div className={styles.avatar} />
                    <div className={styles.adminA}>{walletInfo.walletAddress}</div>
                    <img className={styles.iconcard} alt="" src="/iconarrowdown1.svg" />
                </div>
            </div>
        </div>
    );
};

export default Grad1;
