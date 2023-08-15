let qrCodeInstance;

function generateQR() {
  const textInput = document.getElementById('text-input').value;
  if (textInput.trim().length === 0) {
    alert('Please enter some text or URL.');
    return;
  }
  document.getElementById("sai").style.display="block";
  const qrcodeDiv = document.getElementById('qrcode');
  qrcodeDiv.style.textAlign = "center";
  qrcodeDiv.style.marginBottom = "-20px";
  qrcodeDiv.innerHTML = '';

  qrCodeInstance = new QRCode(qrcodeDiv, {
    text: textInput,
    width: 256,
    height: 256,
  });

  document.getElementById('text-input').value = ''; // Clear the input field
}

function saveQRCode() {
  if (!qrCodeInstance) {
    alert('Please generate a QR code first.');
    return;
  }

  setTimeout(function () {
    const canvas = document.querySelector('#qrcode canvas');
    const dataURL = canvas.toDataURL('image/png');
    const downloadLink = document.createElement('a');
    downloadLink.href = dataURL;
    downloadLink.download = 'qrcode.png';
    downloadLink.click();
  }, 1000); // Adjust the delay as needed (1 second in this case)
}

