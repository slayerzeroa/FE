import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";
const prohibit = () => {
    const navigate = useNavigate();
    Swal.fire({
        title: "비정상적인 접근입니다.",
        text: "비정상적인 접근입니다. 해당 사이트는 내부 접근을 통해서만 접근이 가능합니다.",
        icon: "error",
        confirmButtonText: "확인",
    }).then(() => {
        navigate(-1);
    });
};

export default prohibit;
