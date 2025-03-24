// import bcrypt from bcrypt
const bcrypt = require('bcrypt');

const saltRounds = 10;
const myPassword = 'afafegdfaaeafeafpeafhfaefaegeafeachofarjfae';
const myPassword1 = myPassword + 'y';

// Tecgnique 1
//1. 사용자 등록
bcrypt.hash(myPassword, salt, function(err, hash){
   console.log("Password hash: ", hash);
   // 사용자 등록시 hash값을 DB에 저장

   // 2. 사용자 로그인
   bcrypt.compare(myPassword, hash, function(err, result) {
      console.log("로그인 결과1: ", result)
   })
   bcrypt.compare(myPassword1, hash, function(err, result) {
      console.log("로그인 결과2: ", result)
   })
})

// Tecgnique 2
//1. 사용자 등록
bcrypt.genSalt(saltRounds, function(err, salt){
   console.log('Salt: ', salt)
   bcrypt.hash(myPassword, salt, function(err, hash){
   console.log("Password hash: ", hash);
   // 사용자 등록시 hash값을 DB에 저장

   // 2. 사용자 로그인
   bcrypt.compare(myPassword, hash, function(err, result) {
      console.log("로그인 결과1: ", result)
   })
   bcrypt.compare(myPassword1, hash, function(err, result) {
      console.log("로그인 결과2: ", result)
   })
})
})
