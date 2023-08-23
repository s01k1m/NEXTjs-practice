# 소개

## [next-app](https://github.com/s01k1m/NEXTjs-practice/tree/master/next-app)

[생활 코딩 next js](https://opentutorials.org/course/5098) 연습한 기록 입니다

# What I Learned

1. next.js
2. next.js 서버
   Nextjs은 백엔드까지 동시에 제공하는 full stack framework입니다. Route Handlers를 사용하면 별도의 백엔드를 구축하지 않고 Nextjs API 서버까지 구축할 수 있습니다. 자세한 내용은 Route Handlers를 참고해주세요.
   여기서는 Json-server를 이용해서 간단하게 백엔드를 구축하고, 사용하였습니다.

   ```
   npx json-server --port 9999 --watch db.json
   ```

   저는 프론트 서버와 백 서버를 두번 키는 것이 불편해져서 추가적으로 함께 키는 설정을 추가했습니다

   ```
   $ npm i -D concurrently

   <!-- package.json -->
       "mockserver": "npx json-server --port 9999 --watch db.json",
       "con": "concurrently \"npm run dev\" \"npm run mockserver\""
   ``
   ```
