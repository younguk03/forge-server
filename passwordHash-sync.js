const bcrypt = require('bcrypt');

const saltRounds = 10;
const myPassword = 'afafegdfaaeafeafpeafhfaefaegeafeachofarjfae';
const myPassword1 = myPassword + 'y';

//1. 사용자 등록
const salt = bcrypt.genSaltSync(saltRounds);
const hash = bcrypt.hashSync(myPassword, salt);
console.log('Password Hash: ', hash)

//2. 로그인
const result1 = bcrypt.compareSync(myPassword, hash)
console.log('로그인 결과1: ', result1)
const result2 = bcrypt.compareSync(myPassword1, hash)
console.log('로그인 결과2: ', result2)