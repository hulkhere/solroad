import sharp from "sharp";

export const blur = (url: string, type: "image") => {
  // const outputFilePath = "path/to/output/blurry-image.jpg";
  // axios({
  //   url: url,
  //   responseType: "arraybuffer",
  // })
  //   .then((response) => {
  //     const imageBuffer = Buffer.from(response.data, "binary");
  //     // Blur the image
  //     sharp(imageBuffer)
  //       .blur(10) // Adjust the blur radius as desired
  //       .toFile(outputFilePath, (err, info) => {
  //         if (err) {
  //           console.error(err);
  //         } else {
  //           console.log("Image blurred successfully!");
  //         }
  //       });
  //   })
  //   .catch((error) => {
  //     console.error("Error downloading the image:", error);
  //   });
};
