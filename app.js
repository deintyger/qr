const express = require('express');
const fs = require('fs');
const path = require('path');
const QRCode = require('qrcode');
const readline = require('readline');

const app = express();

const qrCodeDir = path.join(__dirname, 'qr-codes')
if(!fs.existsSync(qrCodeDir)){
    fs.mkdirSync(qrCodeDir);
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Enter text to convert to QR Code: ', async (input) => {
    try {
        const filename = `qr_${Date.now()}.png`
        const filepath = path.join(qrCodeDir, filename)

        QRCode.toFile(filepath, input, () => {
            console.log(`QR Code saved to ${filepath}`)
        })
    } catch (error) {
        console.log(error);
        
    }
})


app.listen(3001)