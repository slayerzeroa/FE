import styles from "./Under1.module.css";
import { NavLink, Link } from "react-router-dom";
import React from "react";
import Chart from "react-apexcharts";
import Select from "react-select";
import Axios from "axios";
import { useState, useEffect } from "react";

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

const Under1 = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        Axios.get("http://localhost:8000/graduate", {})
            .then((res) => {
                setUsers(res);
                console.log(res.data);
            })
            .catch((Error) => {
                console.log(Error);
            });
    }, []);

    return (
        <div className={styles.div}>
            <div className={styles.inner}>
                <div className={styles.iconParent}>
                    <img className={styles.icon} alt="" src="/icon3.svg" />
                    <div className={styles.avatar} />
                    <div className={styles.adminA}>Admin A</div>
                    <img className={styles.iconarrowDown} alt="" src="/iconarrowdown4.svg" />
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
                            {/* <div className={styles.compDropdownDefault}>
                                <div className={styles.contents}>
                                    <div className={styles.text}>Null</div>
                                    <img className={styles.lcDropdownIcon} alt="" src="/lcdropdown2.svg" />
                                </div>
                            </div> */}
                        </div>
                        <div className={styles.compInputDefualt}>
                            <div className={styles.title3}>기업</div>
                            <Select
                                className={styles.compDropdownDefault}
                                options={Companyoptions}
                                styles={customStyles}
                            />
                            {/* 
                            <div className={styles.input}>
                                <div className={styles.text2}>입력</div>
                            </div> */}
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
                    <div className={styles.compParent}>
                        <div className={styles.comp}>
                            <div>
                                <Chart
                                    className={styles.value}
                                    type="bar"
                                    series={[
                                        {
                                            name: "series1",
                                            data: users?.data?.map((user) => user.gpa),
                                        },
                                    ]}
                                    options={{ chart: { height: 1200, width: 800 } }}
                                ></Chart>
                            </div>
                        </div>
                        <div className={styles.comp1}>
                            <b className={styles.text4}>통계 분석값을 Text로 넣을 수 있는 공간</b>
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
                            <img className={styles.iconarrowDown} alt="" src="/iconelement31.svg" />
                            <div className={styles.div1}>졸업생 데이터 분석</div>
                        </div>
                    </Link>
                    <Link to="/under2" style={{ textDecoration: "none", color: "var(--text-10)" }}>
                        <div className={styles.icontransactionMinusParent}>
                            <img className={styles.iconarrowDown} alt="" src="/iconcard.svg" />
                            <div className={styles.div1}>맞춤형 활동 추천</div>
                        </div>
                    </Link>
                    <Link to="/qa1" style={{ textDecoration: "none", color: "var(--text-10)" }}>
                        <div className={styles.menu2}>
                            <div className={styles.icontransactionMinusParent}>
                                <img className={styles.iconarrowDown} alt="" src="/icontransactionminus1.svg" />
                                <b className={styles.qa}>{`Q&A`}</b>
                            </div>
                        </div>
                    </Link>
                    <Link to="/under3" style={{ textDecoration: "none", color: "var(--text-10)" }}>
                        <div className={styles.icontransactionMinusParent}>
                            <img className={styles.iconarrowDown} alt="" src="/iconactivity.svg" />
                            <div className={styles.div1}>토큰 환전</div>
                        </div>
                    </Link>
                </div>
                <div className={styles.iconGroup}>
                    <img className={styles.icon} alt="" src="/icon3.svg" />
                    <div className={styles.avatar} />
                    <div className={styles.adminA}>Admin A</div>
                    <img className={styles.iconarrowDown} alt="" src="/iconarrowdown4.svg" />
                </div>
            </div>
        </div>
    );
};

export default Under1;
