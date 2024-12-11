const QRCode = require("qrcode");

const url = "https://www.instagram.com/pycode.hubb?igsh=cDVxZXI4NDF2ZmN0";

// Generate the QR code and save it as a PNG file
QRCode.toFile(
  "my_qrcode.png",
  url,
  {
    color: {
      dark: "#000000", // Dark color for the QR code
      light: "#ffffff", // Light color for the background
    },
  },
  function (err) {
    if (err) throw err;
    console.log("QR Code generated and saved as 'my_qrcode.png'");
  }
);
