var str =
  "lorem ipsum dolor tuan anh sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur tuananh adip non";

var count = 0;
var words = "tuananh";
var strwords = "";

var arrayStr = str.split(" ");

for (var i = 0; i < arrayStr.length; i++) {
  if (arrayStr[i] === "tuananh") {
    strwords += `<span style = "background: yellow">tuan anh</span> `;
    count++;
  }

  strwords += arrayStr[i] + "";
}

document.write(strwords);

console.log("so lan xuat hien: " + count);
