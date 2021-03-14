import { sm2 } from 'sm-crypto'
let pub1 = 'asdfsdfadsfasd';
/*
sm2加解密
//依赖sm-crypto npm install --save sm-crypto
分为04 非04开头
/**
 *生成sm2公钥密钥
 *
 * @export 
 * @return {publicKey:公钥 privateKey密钥}
 */
export function generateKey() {
    let { publicKey, privateKey } = sm2.generateKeyPairHex()
    return { publicKey, privateKey };
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
    return sm2.doEncrypt(msgString, publicKey, cipherMode) // 加密结果
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
    return '04' + sm2.doEncrypt(msgString, publicKey, cipherMode) // 加密结果
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
    return sm2.doDecrypt(msgString.substring(2), privateKey, cipherMode)
}

