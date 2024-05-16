export function getRandomString(num) {
  const randomStringList =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"; // 指定要隨機的字串
  let value = "";
  for (let index = 0; index < num; index++) {
    // 按照傳進來參數指定要產幾位數
    const randomIndex = Math.floor(Math.random() * randomStringList.length); // 產生隨機索引
    value += randomStringList.substring(randomIndex, randomIndex + 1); // 依照隨機索引取出1個字串來串接
  }

  return value;
}