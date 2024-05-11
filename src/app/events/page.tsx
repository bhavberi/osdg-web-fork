"use client";

import PhotoAlbum from "react-photo-album";
import { getEventImages, getEventsMetadata } from "@/app/lib";
import type { photoData } from "@/app/lib";
import { useState, useEffect } from "react";

export default function Events() {
  const [images, setImages] = useState<photoData[]>([]);

  useEffect(() => {
    getEventsMetadata().then((data) => {
      Promise.all(
        Object.entries(data).map(([folderPath, event]) =>
          getEventImages(folderPath, event)
        )
      ).then((imagePromises) => {
        setImages(imagePromises.reduce((acc, cur) => acc.concat(cur), []));
      });
    });
  }, []);

  return (
    <main className="p-12">
      {images.length === 0 ? (
        <h1>Loading</h1>
      ) : (
        <PhotoAlbum
          layout="masonry"
          photos={images}
          renderPhoto={({ photo, wrapperStyle, renderDefaultPhoto }) => (
            <a
              href={photo.href}
              style={wrapperStyle}
              target="_blank"
              rel="noreferrer noopener"
            >
              {renderDefaultPhoto({ wrapped: true })}
            </a>
          )}
        />
      )}
    </main>
  );
}
