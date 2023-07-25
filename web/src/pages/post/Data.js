import Axios from "axios";
// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
// eslint-disable-next-line no-unused-vars
import { useParams, useLocation, useNavigate } from "react-router-dom";

// const postList = [
//     {
//         no: 1,
//         title: "첫번째 게시글입니다.",
//         content: "첫번째 게시글 내용입니다.",
//         createDate: "2020-10-25",
//         readCount: 6,
//     },
//     {
//         no: 2,
//         title: "두번째 게시글입니다.",
//         content: "두번째 게시글 내용입니다.",
//         createDate: "2020-10-25",
//         readCount: 5,
//     },
//     {
//         no: 3,
//         title: "세번째 게시글입니다.",
//         content: "세번째 게시글 내용입니다.",
//         createDate: "2020-10-25",
//         readCount: 1,
//     },
//     {
//         no: 4,
//         title: "네번째 게시글입니다.",
//         content: "네번째 게시글 내용입니다.",
//         createDate: "2020-10-25",
//         readCount: 2,
//     },
//     {
//         no: 5,
//         title: "다섯번째 게시글입니다.",
//         content: "다섯번째 게시글 내용입니다.",
//         createDate: "2020-10-25",
//         readCount: 4,
//     },
// ];

class QAList extends Component {
    state = {
        boardList: [],
    };
    getList = () => {
        Axios.get("http://localhost:8000/list", {})
            .then((res) => {
                const { data } = res;
                this.setState({
                    boardList: data,
                });
            })
            .catch((e) => {
                console.error(e);
            });
    };

    componentDidMount() {
        this.getList();
    }

    render() {
        const { boardList } = this.state;
        console.log(boardList);
        return boardList;
    }
}

const getPostByNo = (no) => {
    const postList = new QAList();
    const array = Object.values(postList).filter((x) => x?.BOARD_ID == no - 1);
    if (array.length == 1) {
        return array[0];
    }
    return null;
};

export { QAList, getPostByNo };
