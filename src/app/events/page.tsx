import PhotoAlbum from "react-photo-album";
import fs from "fs";
import path from "path";
import sharp from "sharp";

const getEventImages = async (folderPath: string) => {
  const imagesDir = path.join(
    process.cwd(),
    "public",
    "event_pictures",
    folderPath
  );

  const imageFiles = fs.readdirSync(imagesDir);

  const imageData = await Promise.all(
    imageFiles.map(async (file) => {
      const imagePath = path.join(imagesDir, file);
      const relativePath = path.relative(
        path.join(process.cwd(), "public"),
        imagePath
      );
      const metadata = await sharp(imagePath).metadata();
      console.log(relativePath);
      return {
        src: relativePath,
        width: metadata.width ?? 0,
        height: metadata.height ?? 0,
      };
    })
  );

  return imageData;
};

export default async function Events() {
  const events = [
    "2024-04-13_open-source-saturday",
    "2024-04-07_intro-to-latex",
    "2024-03-23_open-source-saturday",
    "2024-03-15_frieday-rice",
    "2024-01-20_hackiiit",
    "2024-01-17_intro-to-gsoc",
    "2022-10-27_richard-stallman-talk",
  ];

  const imagePromises = await Promise.all(events.map(getEventImages));
  const images = imagePromises.reduce((acc, cur) => acc.concat(cur), []);

  return (
    <main className="p-12">
      <PhotoAlbum layout="masonry" photos={images} />
    </main>
  );
}
