import Swal from "sweetalert2";

const auth_alarm = () => {
    Swal.fire({
        title: "인증이 완료되었습니다.",
        text: "인증이 완료되었습니다. 메인 페이지로 이동합니다.",
        icon: "success",
        confirmButtonText: "확인",
    });
};

export default auth_alarm;
