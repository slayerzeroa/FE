// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState, Component } from "react";
// import { getPostByNo } from "./Data";
import "./Post.css";
// eslint-disable-next-line no-unused-vars
import { useParams, useLocation, useNavigate, Link } from "react-router-dom";
import Axios from "axios";

// eslint-disable-next-line no-unused-vars
function withParams(Component) {
    // eslint-disable-next-line
    return (props) => <Component {...props} params={useParams()} />;
}
// eslint-disable-next-line no-unused-vars
// const getPostByNo = (no, postList) => {
//     const array = Object.values(postList).filter((x) => x?.BOARD_ID == no - 1);
//     if (array.length == 1) {
//         return array[0];
//     }
//     return null;
// };

class PostView extends Component {
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
        // eslint-disable-next-line no-unused-vars
        const { no } = this.props.params;
        // console.log(post);
        return (
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
                    <Link to={`/qa`} className="post-view-go-list-btn">
                        목록으로 돌아가기
                    </Link>
                </div>
            </>
        );
    }
}

export default withParams(PostView);
