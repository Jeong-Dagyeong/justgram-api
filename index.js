const parse = require("csv-parse/lib/sync"); // csv parser 함수
const fs = require("fs");

const csv = fs.readFileSync("csv/postings.csv"); // fs의 버퍼로 파일을 읽는 메소드
const records = parse(csv.toString("utf-8")); // 버퍼를 문자열로 전환 후 2차원 배열로 parse
