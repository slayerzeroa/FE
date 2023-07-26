import { Routes, Route, useNavigationType, useLocation } from "react-router-dom";
import MainPage_Login from "./pages/MainPage_Login";
import MainPage_Logout from "./pages/MainPage_Logout";

import QA from "./pages/QA";
import QA1 from "./pages/QA1";
import GradPostView from "./pages/post/GradPostView";
import UnderPostView from "./pages/post/UnderPostView";
// import QAMain from "./pages/post/PostMain";

import Grad0 from "./pages/Grad0";
import Grad1 from "./pages/Grad1";
import Grad2 from "./pages/Grad2";
import Grad3 from "./pages/Grad3";

import Under0 from "./pages/Under0";
import Under1 from "./pages/Under1";
import Under2 from "./pages/Under2";
import Under3 from "./pages/Under3";

import { useEffect } from "react";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    const action = useNavigationType();
    const location = useLocation();
    const pathname = location.pathname;

    useEffect(() => {
        if (action !== "POP") {
            window.scrollTo(0, 0);
        }
    }, [action, pathname]);

    useEffect(() => {
        let title = "";
        let metaDescription = "";

        switch (pathname) {
            case "/main":
                title = "";
                metaDescription = "";
                break;
            case "/":
                title = "";
                metaDescription = "";
                break;
            case "/1":
                title = "";
                metaDescription = "";
                break;
            case "/2":
                title = "";
                metaDescription = "";
                break;
            case "/qa":
                title = "";
                metaDescription = "";
                break;
            case "/3":
                title = "";
                metaDescription = "";
                break;
            case "/4":
                title = "";
                metaDescription = "";
                break;
            case "/5":
                title = "";
                metaDescription = "";
                break;
            case "/6":
                title = "";
                metaDescription = "";
                break;
            case "/7":
                title = "";
                metaDescription = "";
                break;
            case "/8":
                title = "";
                metaDescription = "";
                break;
            case "/9":
                title = "";
                metaDescription = "";
                break;
        }

        if (title) {
            document.title = title;
        }

        if (metaDescription) {
            const metaDescriptionTag = document.querySelector('head > meta[name="description"]');
            if (metaDescriptionTag) {
                metaDescriptionTag.content = metaDescription;
            }
        }
    }, [pathname]);

    return (
        <Routes>
            <Route path="/" element={<MainPage_Logout />} />
            <Route path="/0" element={<MainPage_Logout />} />
            <Route path="/main" element={<MainPage_Login />} />

            {/* Q&A 페이지 */}
            <Route path="/qa" element={<QA />} />
            <Route path="/qa1" element={<QA1 />} />
            {/* 포스트 넘버 */}
            <Route exact path="/qa/:no" element={<GradPostView />} />
            <Route exact path="/qa1/:no" element={<UnderPostView />} />
            {/* 포스트 뷰
            <Route exact path="/" component={QAView} /> */}
            {/* 글쓰기 */}
            <Route path="/write" element={<Grad3 />} />

            {/* 재학생 페이지 */}
            <Route path="/under0" element={<Under0 />} />
            <Route path="/under1" element={<Under1 />} />
            <Route path="/under2" element={<Under2 />} />
            <Route path="/under3" element={<Under3 />} />

            {/* 졸업생 페이지 */}
            <Route path="/grad0" element={<Grad0 />} />
            <Route path="/grad1" element={<Grad1 />} />
            <Route path="/grad2" element={<Grad2 />} />
            <Route path="/grad3" element={<Grad3 />} />
        </Routes>
    );
}
export default App;
