import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";
const notfound_alarm = () => {
    const navigate = useNavigate();
    Swal.fire({
        title: "404 Not Found",
        text: "페이지를 찾을 수 없습니다. 해당 사이트는 내부 접근을 통해서만 접근이 가능합니다.",
        icon: "error",
        confirmButtonText: "확인",
    }).then(() => {
        navigate(-1);
    });
};

export default notfound_alarm;
