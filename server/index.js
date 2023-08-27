const express = require("express");
const cors = require("cors");

const mysql = require("mysql");

const PORT = process.env.port || 8000;

const app = express();

// db 설정
const db = mysql.createPool({
  host: "mechmedic.iptime.org",
  user: "Ajou",
  password: "Trading408",
  database: "linka",
});

app.use(
  cors({
    origin: "*", // 출처 허용 옵션
    credential: "true", // 사용자 인증이 필요한 리소스(쿠키 ..등) 접근
  })
);

// 테스트 코드
app.get("/", (req, res) => {
  const sqlQuery = "INSERT INTO requested (rowno) VALUES (1)";
  db.query(sqlQuery, (err, result) => {
    res.send("success!");
  });
});

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});

// // 게시판 코드
// app.get("/list", (req, res) => {
//   const sqlQuery = "SELECT * FROM BOARD;";
//   db.query(sqlQuery, (err, result) => {
//     res.send(result);
//   });
// });

// GPA 코드
app.get("/gpa", (req, res) => {
  const sqlQuery =
    "SELECT FLOOR(gpa) AS rounded_gpa, COUNT(*) AS count FROM privacy GROUP BY rounded_gpa;";
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

// Graduate 코드
app.get("/graduate", (req, res) => {
  const sqlQuery = "SELECT * FROM privacy;";
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

// // cors 허용해주는 코드 작성

// let corsOptions = {
//   origin: "*", // 출처 허용 옵션
//   credential: true, // 사용자 인증이 필요한 리소스(쿠키 ..등) 접근
// };

// // app.use(cors({ credentials: true, origin: "http://localhost:3000/qa" }));
// app.use(cors(corsOptions));
