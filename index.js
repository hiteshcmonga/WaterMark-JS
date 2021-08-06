//dependency
const Jimp = require("jimp");
//location
const IMAGE = __dirname + '/uploads/images/image.jpg';
const WATERMARK = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Nuvola_apps_kcmsystem.svg/220px-Nuvola_apps_kcmsystem.svg.png";

const LOGO_MARGIN_PERCENTAGE = 5;
const OUTPUT = "output.jpg";

/*
async function blur(){
  const image = await Jimp.read(WATERMARK)
  image.blur (5);
}
blur();*/

const main = async () => {
    const image = await Jimp.read(IMAGE);
    const logo = await Jimp.read(WATERMARK);
    
    logo.resize(image.bitmap.width / 10, Jimp.AUTO);

    const xMargin = (image.bitmap.width * LOGO_MARGIN_PERCENTAGE) / 100;
    const yMargin = (image.bitmap.width * LOGO_MARGIN_PERCENTAGE) / 100;
  
    const X = image.bitmap.width - logo.bitmap.width - xMargin;
    const Y = image.bitmap.height - logo.bitmap.height - yMargin;
  
    return image.composite(logo, X, Y, [
      {
        mode: Jimp.BLEND_SCREEN,
        opacitySource: 0.1,
        opacityDest: 1
      }
    ]);
  };
  
  main().then(image => image.write(OUTPUT));
  