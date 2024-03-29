import { sm2 } from "sm-crypto";
let pub1 = "asdfsdfadsfasd";
/*
sm2加解密
//依赖sm-crypto npm install --save sm-crypto
分为04 非04开头

使用示例
import {Encrypt,Decrypt,doEncrypt,doDecrypt,generateKey} from '@/utils/sm2crypto'

let { publicKey, privateKey } =generateKey();
    let pub='8ADA326609F5FA5A0AF5075A0345E39EF979940233A44AB685E1371E7835BDD0B66B0677E33C7F07422AEF858328D121B23DEB3C561DA73029F6A587961A97AC';
    let privateK='7F1595397CD118142FD6F916E7CD23E5D7911298534BA504034F99450D553FD5';
    let enc=Encrypt('你好水电费水电费第三方',pub);
    let dec=Decrypt(enc,privateK);

    let aaa='0465ede6f49c55130408412de6cc0d2fae4218512fc283faaf9d6e43da136cb7a354562583601cfa52be4f5d4e7159922cdab951c59afbed00cf0722e159d94ddd4430fdb1ffc48a124275852db3c7c0ba32fd6c461b65e9bde2b8167e7a8b33abeed1537f3331382676';
    let aaavalue=Decrypt(aaa,privateK);
    console.log('aaaaa---'+aaavalue);
    console.log('加密后结果---------'+enc);
    console.log('解密后结果---------'+dec);
*/
/**
 *生成sm2公钥密钥 04
 *
 * @export
 * @return {publicKey:公钥 privateKey密钥}
 */
export function generateKey04() {
  let { publicKey, privateKey } = sm2.generateKeyPairHex();
  return { publicKey, privateKey };
}
/**
 *生成sm2公钥密钥 04
 *
 * @export
 * @return {publicKey:公钥 privateKey密钥}
 */
export function generateKey() {
  let { publicKey, privateKey } = sm2.generateKeyPairHex();
  return {
    publicKey: publicKey.substring(2),
    privateKey: privateKey,
  };
}
/**
 *加密
 *
 * @export
 * @param {*} msgString 加密数据 非04开头
 * @param {*} publicKey 公钥
 * @param {number} [cipherMode=1] 1 - C1C3C2，0 - C1C2C3，默认为1
 * @return {*} 加密结果
 */
export function doEncrypt(msgString, publicKey, cipherMode = 1) {
  return sm2.doEncrypt(msgString, publicKey, cipherMode); // 加密结果
}

/**
 *解密
 *
 * @export
 * @param {*} msgString 解密数据 非04开头
 * @param {*} privateKey 密钥
 * @param {*} cipherMode [cipherMode=1]  // 1 - C1C3C2，0 - C1C2C3，默认为1
 * @return {*} 解密结果
 */
export function doDecrypt(msgString, privateKey, cipherMode = 1) {
  return sm2.doDecrypt(msgString.substring(2), privateKey, cipherMode);
}
/**
 *加密
 *
 * @export
 * @param {*} msgString 加密数据 04开头
 * @param {*} publicKey 公钥
 * @param {number} [cipherMode=1] 1 - C1C3C2，0 - C1C2C3，默认为1
 * @return {*} 加密结果
 */
export function Encrypt(msgString, publicKey, cipherMode = 1) {
  return "04" + sm2.doEncrypt(msgString, publicKey, cipherMode); // 加密结果
}

/**
 *解密
 *
 * @export
 * @param {*} msgString 解密数据 04开头
 * @param {*} privateKey 密钥
 * @param {*} cipherMode [cipherMode=1]  // 1 - C1C3C2，0 - C1C2C3，默认为1
 * @return {*} 解密结果
 */
export function Decrypt(msgString, privateKey, cipherMode = 1) {
  return sm2.doDecrypt(msgString.substring(2), privateKey, cipherMode);
}
