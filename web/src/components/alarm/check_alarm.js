import Swal from "sweetalert2";

const check_alarm = () => {
    Swal.fire({
        title: "모든 동의서에 체크해주세요.",
        text: "모든 동의서에 체크되지 않았습니다. 모든 동의서에 체크 후 다시 시도해주세요.",
        icon: "warning",
        confirmButtonText: "확인",
    });
};

export default check_alarm;
