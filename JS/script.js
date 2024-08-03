let secreteKey = "";
function generateSecretKey() {
  const length = 6;
  const charset = "0123456789";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    secreteKey += charset[randomIndex];
  }
  document.getElementById("secreteKey").innerText = secreteKey;
  //   console.log(secreteKey);
}
// console.log(secreteKey);
