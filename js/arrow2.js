// 커링 펑션: 파라메터를 한꺼번에 넣는게 아니라 순차적으로 입력
const res = a => b => a + b;

const result = res(1)(2);
console.log(result);

const res2 = a => b => c => a + b + c;
console.log(res2(1)(2)(3));