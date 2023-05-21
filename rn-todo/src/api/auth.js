const USER_EMAIL = 'test';
const USER_PASSWORD = '1234';

export const signIn = (email, password) => {
  return new Promise((resolve, reject) => {
    // 서버와의 통신 진행을 위해 1초 후에 resolve 혹은 reject가 호출되도록 설정
    setTimeout(() => {
      if (email === USER_EMAIL && password === USER_PASSWORD) {
        // email과 password가 일치하다면 성공(resolve)
        resolve(email);
      } else {
        // email 혹은 password가 일치하지 않다면 실패(reject)
        reject('이메일 혹은 비밀번호가 올바르지 않습니다.');
      }
    }, 1000);
  });
};
