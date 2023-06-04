const generateButton = document.querySelector("#generate-btn");
const qrText = document.querySelector("#qrText");
const qrImage = document.querySelector("#qr-image");
const qrArea = document.querySelector(".bottom-area");

const generateQR = () => {
  if (qrText.value === "") {
    qrArea.classList.add("hidden");
    qrText.classList.add("error");
    setTimeout(() => {
      qrText.classList.remove("error");
    }, 1000);
  } else {
    qrArea.classList.remove("hidden");
    qrImage.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=" +
      qrText.value;
  }
};

generateButton.addEventListener("click", () => {
  generateQR();
});

document.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    generateQR();
  }
});
