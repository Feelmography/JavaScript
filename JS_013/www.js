/**
 * express 도구를 install
 * http 서버를 생성하고
 * GET / 로 요청하면 "반갑습니다"
 * GET /user 로 요청하면 "안녕하세요"
 * 라고 보이도록
 */

import http from "http";
import express from "express";

const host = "127.0.0.1";
const port = 4000;

const app = express();
const server = http.createServer(app);
server.listen(port, host, () => {
  console.log("Start Server");
});

app.get("/", (req, res) => {
  /**
   * 여러 번 text를 보내고 싶을 때는 write()로 보내고
   * 제일 마지막에 end 로 마감한다
   */
  res.setHeader("Content-Type", "text/html;charset=UTF-8");
  res.write("안녕하세요<hr/>");
  res.write("오늘은 목요일<hr/>");
  res.end("금요일이면 좋겠네<hr/>");
});

app.get("/user", (req, res) => {
  // 한 번만 보낼 수 있다. send는 한글도 지원한다.
  res.send("안녕하세요");
});
