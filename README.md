# WaterMark-JS

* ### Task
  A web backend service that inputs animage as jpeg, and adds a stamp/watermark on topof the image and returns the image with   the stamp

* ### Install
  1. clone the repo in the local machine.
  2. Install all the dependencies required automatically using ```npm install``` or open package.json to check the dependencies required to be downloaded.
  3. Once the dependencies are install, use ```node server.js``` on CLI and open ```http://localhost:3000/``` to use a simple webapp to upload your image from local directory.
  4.Use the command ```node index.js``` to watermark the image with another image/text on top, to change the LOGO image change the constant ```WATERMARK``` to a web link or file. 
  5. You can find the watermarked image in the parent directory of the github repo labelled as ```output.jpg```.
 


* ### Learnings/Outcomes
  * Using Jimp for image/text processing
  * Functional use of async/await functions
  * backend support for static website
  * using other dependencies such as fs, multer,express.
  * Developing the whole flow of the application that needs to be maintained in order to get the required output


* ### Difficulties Faced
  * Using the right calculations to process image using Jimp efficiently
  * Adjusting File Location can be a difficult task if the flow is not remembered thoroughly.
