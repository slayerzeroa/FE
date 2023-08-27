/* eslint-disable */

import styles from "./Grad2.module.css";
import { NavLink, Link } from "react-router-dom";
import React from "react";
import Chart from "react-apexcharts";
import Select from "react-select";
import Axios from "axios";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import prohibit from "../components/alarm/prohibit";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

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

const Grad2 = () => {
    const [GPA, setGPA] = useState([]);
    const [showChart, setShowChart] = useState(false);

    // 동문 데이터 분석 - gpa
    useEffect(() => {
        Axios.get("http://ec2-3-39-10-110.ap-northeast-2.compute.amazonaws.com:8000/graduate", {})
            .then((res) => {
                setGPA(res);
                console.log(res.data);
            })
            .catch((Error) => {
                console.log(Error);
            });
    }, []);

    const handleSearchClick = () => {
        setShowChart(true);
    };

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
                                    <b className={styles.text3} onClick={handleSearchClick}>
                                        검색하기
                                    </b>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.compParent}>
                        <div className={styles.comp}>
                            {showChart && (
                                //left tab 추가

                                // <div>
                                //     <Chart
                                //         className={styles.value}
                                //         type="pie"
                                //         series={GPA?.data?.map((GPA) => GPA.count)}
                                //         options={{
                                //             labels: GPA?.data?.map((GPA) => GPA.rounded_gpa),
                                //             chart: { height: 1200, width: 800 },
                                //         }}
                                //     ></Chart>
                                // </div>

                                <Tab.Container
                                    className={styles.tabcontainer}
                                    id="left-tabs-example"
                                    defaultActiveKey="first"
                                >
                                    <Row>
                                        <Col className={styles.tabitems} sm={9}>
                                            <Tab.Content>
                                                <Tab.Pane eventKey="first">
                                                    <Chart
                                                        className={styles.valuePie}
                                                        type="pie"
                                                        series={GPA?.data?.map((GPA) => GPA.count)}
                                                        options={{
                                                            labels: GPA?.data?.map((GPA) => GPA.rounded_gpa),
                                                            chart: { height: 1200, width: 800 },
                                                        }}
                                                    ></Chart>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="second">
                                                    <Chart
                                                        className={styles.valueBar}
                                                        type="bar"
                                                        series={[
                                                            {
                                                                name: "series1",
                                                                data: GPA?.data?.map((GPA) => GPA.count),
                                                            },
                                                        ]}
                                                        options={{ chart: { height: 1200, width: 800 } }}
                                                    ></Chart>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="three">
                                                    <Chart
                                                        className={styles.valueBar}
                                                        type="bar"
                                                        series={[
                                                            {
                                                                name: "series1",
                                                                data: GPA?.data?.map((GPA) => GPA.count),
                                                            },
                                                        ]}
                                                        options={{ chart: { height: 1200, width: 800 } }}
                                                    ></Chart>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="four">
                                                    <Chart
                                                        className={styles.valueBar}
                                                        type="bar"
                                                        series={[
                                                            {
                                                                name: "series1",
                                                                data: GPA?.data?.map((GPA) => GPA.count),
                                                            },
                                                        ]}
                                                        options={{ chart: { height: 1200, width: 800 } }}
                                                    ></Chart>
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Col>
                                    </Row>
                                    <Col className={styles.tabcolumns} sm={3}>
                                        <Nav variant="pills" className="flex-column">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">GPA</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Intern</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="three">External</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="four">Society</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="five">Certificate</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="six">Competition</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="seven">Gender</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </Col>
                                </Tab.Container>
                            )}
                        </div>

                        <div className={styles.comp1}>
                            <b className={styles.text4}>통계 분석값을 Text로 넣을 수 있는 공간</b>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.sidebar}>
                <NavLink
                    to="/main"
                    state={{
                        walletAddress: walletInfo.walletAddress,
                        currentBalance: walletInfo.currentBalance,
                        chainId: walletInfo.chainId,
                    }}
                    style={{ textDecoration: "none" }}
                >
                    <div className={styles.logo}>
                        <img className={styles.icIcon1} alt="" src="/ic.svg" />
                        <div className={styles.linkAjou}>Link Ajou</div>
                    </div>
                </NavLink>
                <div className={styles.nav}>
                    <Link
                        to="/grad1"
                        state={{
                            walletAddress: walletInfo.walletAddress,
                            currentBalance: walletInfo.currentBalance,
                            chainId: walletInfo.chainId,
                        }}
                        style={{ textDecoration: "none", color: "var(--text-10)" }}
                    >
                        <div className={styles.menu}>
                            <img className={styles.iconcard} alt="" src="/iconelement3.svg" />
                            <div className={styles.div1}>나의 정보</div>
                        </div>
                    </Link>
                    <Link
                        to="/grad2"
                        state={{
                            walletAddress: walletInfo.walletAddress,
                            currentBalance: walletInfo.currentBalance,
                            chainId: walletInfo.chainId,
                        }}
                        style={{ textDecoration: "none", color: "var(--text-10)" }}
                    >
                        <div className={styles.menu1}>
                            <img className={styles.iconcard} alt="" src="/iconcard1.svg" />
                            <div className={styles.div1}>동문 데이터 분석</div>
                        </div>
                    </Link>
                    <Link
                        to="/qa"
                        state={{
                            walletAddress: walletInfo.walletAddress,
                            currentBalance: walletInfo.currentBalance,
                            chainId: walletInfo.chainId,
                        }}
                        style={{ textDecoration: "none", color: "var(--text-10)" }}
                    >
                        <div className={styles.menu2}>
                            <div className={styles.menu}>
                                <img className={styles.iconcard} alt="" src="/icontransactionminus1.svg" />
                                <b className={styles.qa}>{`Q&A`}</b>
                            </div>
                        </div>
                    </Link>
                    <Link
                        to="/grad3"
                        state={{
                            walletAddress: walletInfo.walletAddress,
                            currentBalance: walletInfo.currentBalance,
                            chainId: walletInfo.chainId,
                        }}
                        style={{ textDecoration: "none", color: "var(--text-10)" }}
                    >
                        <div className={styles.menu}>
                            <img className={styles.iconcard} alt="" src="/iconactivity.svg" />
                            <div className={styles.div1}>토큰 환전</div>
                        </div>
                    </Link>
                </div>
                <div className={styles.iconParent}>
                    <img className={styles.icon} alt="" src="/icon.svg" />
                    <div className={styles.avatar} />
                    <div className={styles.adminA}>{walletInfo.walletAddress}</div>
                    <img className={styles.iconcard} alt="" src="/iconarrowdown.svg" />
                </div>
            </div>
        </div>
    );
};

export default Grad2;
