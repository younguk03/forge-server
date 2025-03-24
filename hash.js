const forge = require('node-forge')

let message1 = 'hash함수 계산하기 위한 입력'

let md1 = forge.md.md5.create()
let md2 = forge.md.sha1.create()
let md3 = forge.md.sha256.create()
let md4 = forge.md.sha384.create()
let md5 = forge.md.sha512.create()

md1.update(message1)
md2.update(message1)
md3.update(message1)
md4.update(message1)
md5.update(message1)

let result1 = md1.digest().toHex()
let result2 = md2.digest().toHex()
let result3 = md3.digest().toHex()
let result4 = md4.digest().toHex()
let result5 = md5.digest().toHex()

console.log('입력 메시지:', message1)

console.log('MD5 hash:',result1, result1.length)
console.log('SHA1 hash:',result2, result2.length)
console.log('SHA256 hash:',result3, result3.length)
console.log('SHA384 hash:',result4, result4.length)
console.log('SHA512 hash:',result5, result5.length)