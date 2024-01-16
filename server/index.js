const express = require("express");
const cors = require("cors");

const mysql = require("mysql");

const PORT = process.env.port || 8000;

const app = express();

// NAS db 설정
// db environment 받아오기 (보안 위해 .env 폴더로 따로 관리)

const fs = require("fs");

fs.readFile("/volume1/docker/ajoufe/FE_ENV.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const db_env = data.split("\n");
});

const db = mysql.createPool({
  host: db_env[0],
  user: db_env[1],
  password: db_env[2],
  database: db_env[3],
});

// // 로컬 db 설정
// const db = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   password: "1234",
//   database: "test",
// });

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

// // GPA 코드 (교수님 NAS DB)
// app.get("/gpa", (req, res) => {
//   const sqlQuery =
//     "SELECT FLOOR(gpa) AS rounded_gpa, COUNT(*) AS count FROM privacy GROUP BY rounded_gpa;";
//   db.query(sqlQuery, (err, result) => {
//     res.send(result);
//   });
// });

// // Graduate 코드 (교수님 NAS DB)
// app.get("/graduate", (req, res) => {
//   const sqlQuery = "SELECT * FROM privacy;";
//   db.query(sqlQuery, (err, result) => {
//     res.send(result);
//   });
// });

// // cors 허용해주는 코드 작성

// let corsOptions = {
//   origin: "*", // 출처 허용 옵션
//   credential: true, // 사용자 인증이 필요한 리소스(쿠키 ..등) 접근
// };

// // app.use(cors({ credentials: true, origin: "http://localhost:3000/qa" }));
// app.use(cors(corsOptions));

// GPA 코드
app.get("/gpa", (req, res) => {
  const sqlQuery =
    "SELECT FLOOR(gpa) AS rounded_gpa, COUNT(*) AS count FROM GRADUATE GROUP BY rounded_gpa;";
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

// Graduate 코드
app.get("/graduate", (req, res) => {
  const sqlQuery = "SELECT * FROM GRADUATE;";
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

// submit 데이터 저장 코드
app.post("/submit", (req, res) => {
  const data = req.body;
  console.log(data);
  const sqlQuery = "INSERT INTO requested (rowno) VALUES (1)";
  db.query(sqlQuery, (err, result) => {
    res.send("success!");
  });
});
