import Swal from "sweetalert2";

const prohibit = () => {
    Swal.fire({
        title: "비정상적인 접근입니다.",
        text: "비정상적인 접근입니다. 해당 사이트는 내부 접근을 통해서만 접근이 가능합니다.",
        icon: "warning",
        confirmButtonText: "확인",
    });
};

export default prohibit;
