import CryptoJS from "crypto-js";
export const encryptData = (data, secretKey) => {
  const ciphertext = CryptoJS.AES.encrypt(data, secretKey).toString();
  return ciphertext;
};
