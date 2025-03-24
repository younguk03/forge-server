const forge = require('node-forge');

let salt;
let numIterations = 1000000; //100만회 반복
let password = 'gafdfaeofs';
let keySize = 32;

// 동기식 키생성 - 송신자
salt = forge.random.getBytesSync(32); //32바이트 생성
let derivedKey = forge.pkcs5.pbkdf2(password, salt, numIterations, keySize);

console.log('Password: ', password);
console.log('Salt: ', forge.util.bytesToHex(salt));
console.log('Iterations: ', numIterations);
console.log('Derived key(송신자): ', forge.util.bytesToHex(derivedKey));

// 송신자 -> 수신자: salt,numIterations

//수신자
derivedKey = forge.pkcs5.pbkdf2(password, salt, numIterations, keySize);
console.log('Derived key(수신자): ', forge.util.bytesToHex(derivedKey));

//비동기식 키생성
forge.pkcs5.pbkdf2(
   password,
   salt,
   numIterations,
   keySize,
   function (err, derivedKey) {
      if (err) console.log(err);
      else
      console.log('Derived key1(async): ', forge.util.bytesToHex(derivedKey));
   }
);
forge.pkcs5.pbkdf2(
   password,
   salt,
   numIterations,
   keySize,
   function (err, derivedKey) {
      if (err) console.log(err);
      else
      console.log('Derived key2(async): ', forge.util.bytesToHex(derivedKey));
   }
);
forge.pkcs5.pbkdf2(
   password,
   salt,
   numIterations,
   keySize,
   function (err, derivedKey) {
      if (err) console.log(err);
      else
      console.log('Derived key3(async): ', forge.util.bytesToHex(derivedKey));
   }
);
forge.pkcs5.pbkdf2(
   password,
   salt,
   numIterations,
   keySize,
   function (err, derivedKey) {
      if (err) console.log(err);
      else
      console.log('Derived key4(async): ', forge.util.bytesToHex(derivedKey));
   }
);
forge.pkcs5.pbkdf2(
   password,
   salt,
   numIterations,
   keySize,
   function (err, derivedKey) {
      if (err) console.log(err);
      else
      console.log('Derived key5(async): ', forge.util.bytesToHex(derivedKey));
   }
);
