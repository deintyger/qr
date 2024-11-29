/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

let counter = 1;

function generateQrCodes() {
  inquirer
    .prompt([
      /* Pass your questions in here */
      { message: "Type in your url :", name: "URL" },
    ])
    .then((answers) => {
      // Use user feedback for... whatever!!
      const url = answers.URL;
      const filename = `qr_codes/qr_img${counter}.png`;
      var qr_svg = qr.image(url);
      qr_svg.pipe(fs.createWriteStream(filename));

      fs.writeFile("URL.txt", url, (err) => {
        if (err) throw err;
        console.log("The file has been saved!");
      });

      counter++;
      generateQrCodes();
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}
generateQrCodes();
